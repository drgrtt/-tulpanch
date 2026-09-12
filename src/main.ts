import Phaser from 'phaser';
import { PrototypeScene } from './scenes/PrototypeScene';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: 'game',
  backgroundColor: '#252729',
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 540,
    height: 960,
  },
  scene: [PrototypeScene],
};

export const game = new Phaser.Game(config);
