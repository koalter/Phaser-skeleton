class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader');
    }

    preload() {
        console.log('Bootloader is up!');
        this.load.path = './assets/';

        this.load.image('logo', 'logo.png');
    }

    create() {
        this.add.image(this.sys.game.config.width/2, this.sys.game.config.height/2, 'logo');
    }

    update(time, delta) {

    }
}
export default Bootloader;