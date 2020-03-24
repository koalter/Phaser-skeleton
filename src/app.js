import Bootloader from './Bootloader.js';
import SceneA from './scenes/SceneA.js';

window.addEventListener('load', () => {
    const config = {
        title: "Phaser-skeleton",
        width: 640,
        height: 480,
        parent: "container",
        backgroundColor: "#22a6b3",
        pixelArt: true,
        scene: [Bootloader, SceneA]
    };

    new Phaser.Game(config);
});