import Phaser from 'phaser';

export class PrototypeScene extends Phaser.Scene {
  private player!: Phaser.GameObjects.Arc;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  private keys!: Record<'W' | 'A' | 'S' | 'D', Phaser.Input.Keyboard.Key>;

  constructor() {
    super('prototype');
  }

  create(): void {
    this.add.text(24, 24, 'Tulpanчик · first playable', {
      color: '#513c36',
      fontFamily: 'system-ui, sans-serif',
      fontSize: '24px',
      fontStyle: 'bold',
    });

    this.add.text(24, 58, 'Move with WASD or arrow keys', {
      color: '#7a625a',
      fontFamily: 'system-ui, sans-serif',
      fontSize: '16px',
    });

    this.player = this.add.circle(270, 480, 28, 0xc8708b);
    this.player.setStrokeStyle(5, 0xffffff, 0.9);

    if (!this.input.keyboard) {
      throw new Error('Keyboard input is unavailable');
    }

    this.cursors = this.input.keyboard.createCursorKeys();
    this.keys = this.input.keyboard.addKeys('W,A,S,D') as Record<
      'W' | 'A' | 'S' | 'D',
      Phaser.Input.Keyboard.Key
    >;
  }

  update(_time: number, delta: number): void {
    const speed = 260;
    const step = (speed * delta) / 1000;

    const left = this.cursors.left.isDown || this.keys.A.isDown;
    const right = this.cursors.right.isDown || this.keys.D.isDown;
    const up = this.cursors.up.isDown || this.keys.W.isDown;
    const down = this.cursors.down.isDown || this.keys.S.isDown;

    let x = Number(right) - Number(left);
    let y = Number(down) - Number(up);

    if (x !== 0 && y !== 0) {
      const diagonal = Math.SQRT1_2;
      x *= diagonal;
      y *= diagonal;
    }

    this.player.x = Phaser.Math.Clamp(this.player.x + x * step, 32, 508);
    this.player.y = Phaser.Math.Clamp(this.player.y + y * step, 96, 928);
  }
}
