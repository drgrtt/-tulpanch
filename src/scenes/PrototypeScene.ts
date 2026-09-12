import Phaser from 'phaser';
import flowers from '../data/flowers.json';
import playerConfig from '../data/player.json';
import { TulipBed } from '../entities/TulipBed';
import { CarryState } from '../systems/CarryState';
import { DeliveryState } from '../systems/DeliveryState';
import { DragJoystick } from '../systems/DragJoystick';
import { MovementController } from '../systems/MovementController';
import { HapticsFeedback } from '../systems/HapticsFeedback';
import { PickupSound } from '../systems/PickupSound';

const BED = new Phaser.Geom.Rectangle(150, 350, 240, 180);
const UNLOAD = new Phaser.Geom.Rectangle(160, 700, 220, 100);
const RADIUS = 20;
const PICKUP_RADIUS = RADIUS + 10;

export class PrototypeScene extends Phaser.Scene {
  private player!: Phaser.GameObjects.Arc;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  private keys!: Record<'W' | 'A' | 'S' | 'D', Phaser.Input.Keyboard.Key>;
  private joystick!: DragJoystick;
  private movement!: MovementController;
  private haptics = new HapticsFeedback();
  private pickupSound!: PickupSound;
  private bed!: TulipBed;
  private carry!: CarryState;
  private delivery!: DeliveryState;
  private bedArt!: Phaser.GameObjects.Graphics;
  private stackArt!: Phaser.GameObjects.Graphics;
  private status!: Phaser.GameObjects.Text;
  private inventory!: Phaser.GameObjects.Text;
  private delivered!: Phaser.GameObjects.Text;
  private feedback!: Phaser.GameObjects.Text;
  private feedbackUntil = 0;
  private pulseUntil = 0;
  private wasInUnload = false;

  constructor() { super('prototype'); }

  create(): void {
    const tulip = flowers.find(flower => flower.id === 'tulip')!;
    this.bed = new TulipBed(Array.from({ length: tulip.yield }, (_, i) => ({
      x: 210 + (i % 2) * 120, y: 400 + Math.floor(i / 2) * 80,
    })), tulip.growthSeconds);
    this.carry = new CarryState(playerConfig.carryCapacity);
    this.delivery = new DeliveryState();
    this.feedbackUntil = this.pulseUntil = 0;
    this.wasInUnload = false;
    this.cameras.main.setBackgroundColor('#252729');
    this.add.rectangle(270, 490, 492, 708, 0x66696c).setStrokeStyle(4, 0x93979a);
    const grid = this.add.graphics().lineStyle(1, 0x74787b, 0.5);
    for (let x = 30; x < 516; x += 30) grid.lineBetween(x, 138, x, 842);
    for (let y = 140; y < 844; y += 30) grid.lineBetween(26, y, 514, y);
    this.label(24, 22, 'ТЮЛЬПАНЧИК / GARDEN LOOP', 22);
    this.inventory = this.label(24, 62, '', 22);
    this.delivered = this.label(350, 65, '', 17);
    this.label(24, 101, 'WASD / стрелки · тяни пальцем для движения', 16, '#b9bec1');
    this.label(270, 280, 'ГРЯДКА ТЮЛЬПАНОВ', 20).setOrigin(0.5);
    this.status = this.label(270, 310, '', 17).setOrigin(0.5);
    this.bedArt = this.add.graphics();
    this.add.rectangle(270, 750, UNLOAD.width, UNLOAD.height, 0x8b9fa3).setStrokeStyle(3, 0xe3f4f6);
    this.label(270, 724, 'РАЗГРУЗКА', 20, '#202c30').setOrigin(0.5);
    this.label(270, 775, 'Войди с цветами', 16, '#202c30').setOrigin(0.5);
    this.player = this.add.circle(270, 620, RADIUS, 0xe7e9ea).setStrokeStyle(3, 0x202224);
    this.stackArt = this.add.graphics();
    this.feedback = this.label(270, 866, '', 21).setOrigin(0.5);
    this.label(270, 903, 'Собери → разгрузи → повтори', 18, '#b9bec1').setOrigin(0.5);
    this.label(270, 935, 'Пройди рядом с каждым отдельным цветком', 16, '#b9bec1').setOrigin(0.5);
    if (!this.input.keyboard) throw new Error('Keyboard input is unavailable');
    this.cursors = this.input.keyboard.createCursorKeys();
    this.keys = this.input.keyboard.addKeys('W,A,S,D') as typeof this.keys;
    this.joystick = new DragJoystick(this, playerConfig);
    this.movement = new MovementController(playerConfig);
    this.pickupSound = new PickupSound();
    const unlockSound = () => this.pickupSound.unlock();
    const resetMovement = () => this.movement.reset();
    this.input.on('pointerdown', unlockSound);
    this.input.keyboard.on('keydown', unlockSound);
    this.game.events.on(Phaser.Core.Events.BLUR, resetMovement);
    this.game.events.on(Phaser.Core.Events.HIDDEN, resetMovement);
    this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => {
      this.input.off('pointerdown', unlockSound);
      this.input.keyboard?.off('keydown', unlockSound);
      this.game.events.off(Phaser.Core.Events.BLUR, resetMovement);
      this.game.events.off(Phaser.Core.Events.HIDDEN, resetMovement);
      this.pickupSound.destroy();
    });
    this.refresh(performance.now() / 1000);
  }

  update(_time: number, delta: number): void {
    const now = performance.now() / 1000;
    // Only movement is capped; plants use independent monotonic deadlines.
    const seconds = Math.min(delta / 1000, playerConfig.movementMaxDelta);
    const direction = new Phaser.Math.Vector2(
      Number(this.cursors.right.isDown || this.keys.D.isDown) - Number(this.cursors.left.isDown || this.keys.A.isDown),
      Number(this.cursors.down.isDown || this.keys.S.isDown) - Number(this.cursors.up.isDown || this.keys.W.isDown),
    );
    if (direction.lengthSq() > 0) direction.normalize();
    else direction.copy(this.joystick.direction);
    this.movement.update(direction.x, direction.y, seconds);
    const velocity = this.movement.currentVelocity;
    this.player.x = Phaser.Math.Clamp(this.player.x + velocity.x * seconds, 26 + RADIUS, 514 - RADIUS);
    this.player.y = Phaser.Math.Clamp(this.player.y + velocity.y * seconds, 138 + RADIUS, 842 - RADIUS);
    this.bed.update(now);
    this.bed.slots.forEach((slot, index) => {
      if (Phaser.Math.Distance.Between(this.player.x, this.player.y, slot.x, slot.y) > PICKUP_RADIUS) return;
      if (!this.bed.harvest(index, now, this.carry)) return;
      this.pickup(slot.x, slot.y, now);
    });
    const inUnload = UNLOAD.contains(this.player.x, this.player.y);
    if (inUnload && !this.wasInUnload && this.carry.count > 0) {
      this.animateUnload(this.carry.count);
      const amount = this.delivery.unload(this.carry);
      this.haptics.play('unload');
      this.pulseUntil = 0;
      this.showFeedback(`Разгружено: +${amount}`, now);
    }
    this.wasInUnload = inUnload;
    this.refresh(now);
  }

  private pickup(x: number, y: number, now: number): void {
    this.pulseUntil = now + (this.carry.isFull ? 0.45 : 0.22);
    this.haptics.play('flowerPickup');
    this.pickupSound.play();
    if (this.carry.isFull) {
      this.showFeedback('FULL · Руки полны', now);
      this.haptics.play('carryFull');
    }
    const flower = this.flowerVisual(x, y - 28);
    const flight = { progress: 0 };
    this.tweens.add({
      targets: flight, progress: 1, duration: 180, ease: 'Sine.easeInOut',
      onUpdate: () => {
        const t = flight.progress;
        flower.setPosition(Phaser.Math.Linear(x, this.player.x, t),
          Phaser.Math.Linear(y - 28, this.player.y - 40, t) - Math.sin(t * Math.PI) * 30);
        flower.setScale(1 - t * 0.3);
      },
      onComplete: () => flower.destroy(),
    });
    const impulse = this.add.circle(x, y, 12).setStrokeStyle(2, 0xe5f5d5).setDepth(10);
    this.tweens.add({ targets: impulse, scale: 2.4, alpha: 0, duration: 180, onComplete: () => impulse.destroy() });
    const pop = this.label(x, y - 24, '+1', 20, '#f1ffdf').setOrigin(0.5);
    this.tweens.add({ targets: pop, y: y - 60, alpha: 0, duration: 420, onComplete: () => pop.destroy() });
  }

  private flowerVisual(x: number, y: number): Phaser.GameObjects.Graphics {
    const flower = this.add.graphics().setPosition(x, y).setDepth(20);
    flower.lineStyle(3, 0xa8b29e).lineBetween(0, 9, 0, -3);
    flower.fillStyle(0xe4edda).fillEllipse(0, -5, 13, 12);
    return flower;
  }

  private animateUnload(count: number): void {
    // The inventory transfers immediately; these short-lived visuals never block control.
    for (let i = 0; i < count; i++) {
      const flower = this.flowerVisual(this.player.x + (i % 2 === 0 ? -7 : 7),
        this.player.y - 29 - Math.floor(i / 2) * 13);
      this.tweens.add({ targets: flower, x: UNLOAD.centerX, y: UNLOAD.centerY,
        scale: 0.3, alpha: 0, duration: 220, delay: i * 10, ease: 'Sine.easeIn',
        onComplete: () => flower.destroy() });
    }
    this.tweens.add({ targets: this.delivered, scale: 1.1, duration: 100, yoyo: true });
  }

  private showFeedback(text: string, now: number): void {
    this.feedback.setText(text);
    this.feedbackUntil = now + 1;
  }

  private refresh(now: number): void {
    const art = this.bedArt.clear();
    art.fillStyle(0x494d50).fillRoundedRect(BED.x, BED.y, BED.width, BED.height, 8);
    art.lineStyle(3, 0x969da2).strokeRoundedRect(BED.x, BED.y, BED.width, BED.height, 8);
    for (const slot of this.bed.slots) {
      const ready = slot.state === 'ready';
      const progress = this.bed.progress(slot, now);
      art.fillStyle(ready ? 0xa7b59b : 0x353b36).fillEllipse(slot.x, slot.y + 5, 32, 16);
      const height = ready ? 28 : 3 + progress * 18;
      art.lineStyle(4, ready ? 0xc4ccc0 : 0x85907d).lineBetween(slot.x, slot.y + 5, slot.x, slot.y - height);
      if (ready) art.fillStyle(0xeff3e8).fillEllipse(slot.x, slot.y - height, 23, 22);
      else {
        art.fillStyle(0x303432).fillRect(slot.x - 17, slot.y + 18, 34, 4);
        art.fillStyle(0xc8d1c1).fillRect(slot.x - 17, slot.y + 18, 34 * progress, 4);
      }
    }
    const readyCount = this.bed.slots.filter(slot => slot.state === 'ready').length;
    this.status.setText(`ready: ${readyCount} · growing: ${this.bed.slots.length - readyCount}`);
    this.inventory.setText(`В руках: ${this.carry.count} / ${this.carry.capacity}`);
    this.delivered.setText(`Delivered: ${this.delivery.total}`);
    if (now >= this.feedbackUntil) this.feedback.setText('');
    const stack = this.stackArt.clear();
    const duration = this.carry.isFull ? 0.45 : 0.22;
    const progress = Phaser.Math.Clamp(1 - (this.pulseUntil - now) / duration, 0, 1);
    const bounce = Math.sin(progress * Math.PI) * (this.carry.isFull ? 10 : 5);
    stack.setPosition(this.player.x, this.player.y - bounce);
    stack.setScale(1 + Math.sin(progress * Math.PI) * 0.14);
    for (let i = 0; i < this.carry.count; i++) {
      const x = i % 2 === 0 ? -7 : 7;
      const y = -26 - Math.floor(i / 2) * 13;
      stack.lineStyle(2, 0xa8b29e).lineBetween(x, y + 7, x, y);
      stack.fillStyle(0xe4edda).fillEllipse(x, y - 3, 12, 10);
    }
  }

  private label(x: number, y: number, text: string, size: number, color = '#eff0f1'): Phaser.GameObjects.Text {
    return this.add.text(x, y, text, { fontFamily: 'system-ui, sans-serif', fontSize: `${size}px`, color });
  }
}
