class Game {
    constructor() {
        this.backgroundImages;
        this.trunkImage;
    }
    preload() {
        this.backgroundImages = [
            { src: loadImage('assets/background/plx-1.png'), x: 0, speed: 0 },
            { src: loadImage('assets/background/plx-2.png'), x: 0, speed: 0.5 },
            { src: loadImage('assets/background/plx-3.png'), x: 0, speed: 0.5 },
            { src: loadImage('assets/background/plx-4.png'), x: 0, speed: 1 },
            { src: loadImage('assets/background/plx-5.png'), x: 0, speed: 2 },
        ];
        this.grassImage = loadImage('assets/background/jungle-grass.png');
        this.playerImage = loadImage('assets/player/playerImg.png');
        this.trunkImage = loadImage('assets/trunks-obstacles/tree-trunk.png');
    }
    setup() {
        this.player = new Player();
        this.background = new Background();
        this.trunks = [];
    }
    draw() {
        clear();
        // this.trunk.draw();
        this.background.draw();
        this.player.draw();
        if (frameCount % 180 === 0) {
            this.trunks.push(new Trunk(this.trunkImage));
            console.log(this.trunks);
        }
        this.trunks.forEach((trunk) => {
            trunk.draw();
        });
    }
}
