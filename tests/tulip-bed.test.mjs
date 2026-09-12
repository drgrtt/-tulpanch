import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import ts from 'typescript';

async function load(relativePath) {
  const source = await readFile(new URL(relativePath, import.meta.url), 'utf8');
  const compiled = ts.transpile(source, { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext });
  return import(`data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`);
}
const { TulipBed } = await load('../src/entities/TulipBed.ts');
const { CarryState } = await load('../src/systems/CarryState.ts');
const { DeliveryState } = await load('../src/systems/DeliveryState.ts');
const config = JSON.parse(await readFile(new URL('../src/data/player.json', import.meta.url), 'utf8'));
const flowers = JSON.parse(await readFile(new URL('../src/data/flowers.json', import.meta.url), 'utf8'));
const tulip = flowers.find(flower => flower.id === 'tulip');
const newBed = () => new TulipBed(Array.from({ length: tulip.yield }, (_, i) => ({ x: i * 80, y: 0 })), tulip.growthSeconds);
const newCarry = () => new CarryState(config.carryCapacity);

test('four plants start ready, each pickup adds exactly one without duplicate harvest', () => {
  const bed = newBed();
  const carry = newCarry();
  assert.equal(bed.slots.length, 4);
  assert.ok(bed.slots.every(slot => slot.state === 'ready'));
  assert.equal(bed.harvest(0, 100, carry), true);
  assert.equal(carry.count, 1);
  assert.equal(bed.harvest(0, 100, carry), false);
  assert.equal(carry.count, 1);
  assert.ok(bed.slots.slice(1).every(slot => slot.state === 'ready'));
});

test('individual flowers regrow independently after six seconds', () => {
  const bed = newBed();
  const carry = newCarry();
  bed.harvest(0, 100, carry);
  bed.harvest(1, 102, carry);
  bed.update(105.9);
  assert.equal(bed.slots[0].state, 'growing');
  bed.update(106);
  assert.equal(bed.slots[0].state, 'ready');
  assert.equal(bed.slots[1].state, 'growing');
  bed.update(108);
  assert.ok(bed.slots.every(slot => slot.state === 'ready'));
});

test('growth uses elapsed time even when no intermediate frames run', () => {
  const bed = newBed();
  bed.harvest(0, 100, newCarry());
  bed.update(160);
  assert.equal(bed.slots[0].state, 'ready');
  assert.equal(bed.progress(bed.slots[0], 160), 1);
});

test('capacity is configured as 10 and full carry preserves the mature flower', () => {
  const carry = newCarry();
  assert.equal(carry.capacity, 10);
  for (let i = 0; i < 10; i++) assert.equal(carry.add(), true);
  assert.equal(carry.isFull, true);
  assert.equal(carry.add(), false);
  const bed = newBed();
  const before = structuredClone(bed.slots[0]);
  for (let i = 0; i < 100; i++) assert.equal(bed.harvest(0, i, carry), false);
  assert.deepEqual(bed.slots[0], before);
  assert.equal(carry.count, 10);
});

test('unload clears 10 to 0, counts actual deliveries and permits repeated loops', () => {
  const carry = newCarry();
  const delivery = new DeliveryState();
  for (let i = 0; i < 10; i++) carry.add();
  assert.equal(delivery.unload(carry), 10);
  assert.equal(carry.count, 0);
  assert.equal(carry.isFull, false);
  assert.equal(delivery.total, 10);
  assert.equal(delivery.unload(carry), 0);
  assert.equal(delivery.total, 10);
  carry.add(); carry.add(); carry.add();
  assert.equal(delivery.unload(carry), 3);
  assert.equal(delivery.total, 13);
  const bed = newBed();
  assert.equal(bed.harvest(0, 200, carry), true);
  assert.equal(carry.count, 1);
});
