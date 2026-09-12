import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import ts from 'typescript';
const config = JSON.parse(await readFile(new URL('../src/data/player.json', import.meta.url), 'utf8'));
const source = await readFile(new URL('../src/systems/MovementController.ts', import.meta.url), 'utf8');
const compiled = ts.transpile(source, { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext });
const { MovementController, dragInput } = await import(`data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`);

test('drag ignores dead zone and small sideways wobble, caps diagonal magnitude', () => {
  assert.deepEqual(dragInput(8, 4, config), { x: 0, y: 0 });
  assert.equal(dragInput(64, 6, config).y, 0);
  const diagonal = dragInput(200, 200, config);
  assert.ok(Math.abs(Math.hypot(diagonal.x, diagonal.y) - 1) < 1e-10);
  assert.ok(dragInput(32, 0, config).x < 1);
});

test('accelerates in 80–150ms, stops within 120ms with little drift', () => {
  const movement = new MovementController(config);
  movement.update(1, 0, 1 / 120);
  assert.ok(movement.currentVelocity.x > 0 && movement.currentVelocity.x < 50);
  for (let i = 1; i < 16; i++) movement.update(1, 0, 1 / 120);
  assert.ok(movement.currentVelocity.x >= config.playerMaxSpeed * 0.95);
  let drift = 0;
  for (let i = 0; i < 14; i++) { movement.update(0, 0, 1 / 120); drift += movement.currentVelocity.x / 120; }
  assert.equal(movement.currentVelocity.x, 0);
  assert.ok(drift < 13);
});

test('reversal is smoothed and diagonal keyboard input cannot exceed max speed', () => {
  const movement = new MovementController(config);
  for (let i = 0; i < 60; i++) movement.update(1, 0, 1 / 60);
  movement.update(-1, 0, 1 / 60);
  assert.ok(movement.currentVelocity.x > 0);
  for (let i = 0; i < 20; i++) movement.update(-1, 0, 1 / 60);
  assert.ok(movement.currentVelocity.x < -250);
  for (let i = 0; i < 60; i++) movement.update(1, 1, 1 / 60);
  assert.ok(Math.hypot(movement.currentVelocity.x, movement.currentVelocity.y) <= config.playerMaxSpeed + 1e-8);
});
