import Phaser from 'phaser';
import { PrototypeScene } from './scenes/PrototypeScene';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: 'game',
  backgroundColor: '#f6efe6',
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 540,
    height: 960,
  },
  scene: [PrototypeScene],
};

new Phaser.Game(config);
