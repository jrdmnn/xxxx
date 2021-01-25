class Player {
    constructor() {
        this.score = 0;
        this.gravity = 0.5;
        this.velocity = 0;
        this.width = 100;
        this.height = 140;
        this.x = 50;
        this.y = height - this.height;
    }
    jump() {
        this.velocity = -13;
    }
    move() {
        this.x += 100;
    }
    moveBack() {
        this.x -= 25;
    }
    draw() {
        // this gets higher with every loop
        this.velocity += this.gravity;
        // this pushes the player down => gravity
        this.y += this.velocity;
        // this makes sure that player does not move out of the bottom of the screen
        if (this.y >= height - this.height - height / 6) {
            // this is the starting y of the player
            this.y = height - this.height - height / 6;
        }
        if (this.x < 1 || this.x > width - this.width) {
            console.log('Off the screen!!!');
        }
        let xc = constrain(this.x, 0, width - this.width);

        image(game.playerImage, xc, this.y, this.width, this.height);
    }
}
