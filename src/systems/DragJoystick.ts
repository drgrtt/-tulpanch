import Phaser from 'phaser';
import { dragInput, type MovementConfig } from './MovementController';

/** Invisible drag input. The origin stays fixed until pointer release. */
export class DragJoystick {
  readonly direction = new Phaser.Math.Vector2();
  private origin = new Phaser.Math.Vector2();
  private pointerId: number | null = null;

  constructor(private readonly scene: Phaser.Scene, private readonly config: MovementConfig) {
    scene.input.on('pointerdown', this.down, this);
    scene.input.on('pointermove', this.move, this);
    scene.input.on('pointerup', this.up, this);
    scene.input.on('pointerupoutside', this.up, this);
    scene.input.on('gameout', this.reset, this);
    scene.game.events.on(Phaser.Core.Events.BLUR, this.reset, this);
    scene.game.events.on(Phaser.Core.Events.HIDDEN, this.reset, this);
    scene.events.once(Phaser.Scenes.Events.SHUTDOWN, this.destroy, this);
  }

  private down(pointer: Phaser.Input.Pointer): void {
    if (this.pointerId !== null || pointer.y < 136 || pointer.y > 844) return;
    this.pointerId = pointer.id;
    this.origin.set(pointer.x, pointer.y);
    this.direction.set(0, 0);
  }

  private move(pointer: Phaser.Input.Pointer): void {
    if (pointer.id !== this.pointerId) return;
    if (!pointer.isDown) { this.reset(); return; }
    const input = dragInput(pointer.x - this.origin.x, pointer.y - this.origin.y, this.config);
    this.direction.set(input.x, input.y);
  }

  private up(pointer: Phaser.Input.Pointer): void {
    if (pointer.id === this.pointerId) this.reset();
  }

  private reset(): void {
    this.pointerId = null;
    this.direction.set(0, 0);
  }

  private destroy(): void {
    this.scene.input.off('pointerdown', this.down, this);
    this.scene.input.off('pointermove', this.move, this);
    this.scene.input.off('pointerup', this.up, this);
    this.scene.input.off('pointerupoutside', this.up, this);
    this.scene.input.off('gameout', this.reset, this);
    this.scene.game.events.off(Phaser.Core.Events.BLUR, this.reset, this);
    this.scene.game.events.off(Phaser.Core.Events.HIDDEN, this.reset, this);
  }
}
