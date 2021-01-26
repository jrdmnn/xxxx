class Player {
    constructor() {
        this.score = 0;
        this.gravity = 0.5;
        this.velocity = 0;
        this.width = 100;
        this.height = 140;
        this.x = 50;
        this.y = height - this.height - height / 6;
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
            this.gravity = 0.5;
            // this is the starting y of the player
            this.y = height - this.height - height / 6;
        }

        let xc = constrain(this.x, 0, width - this.width);
        let yc = constrain(this.y, 0, height - this.height);

        game.trunks.forEach((trunk) => {
            if (
                yc - this.height > trunk.y &&
                xc > trunk.x - this.width &&
                xc < trunk.x + trunk.width
            ) {
                console.log(
                    'higher than trunk',
                    this.y >= height - this.height - trunk.y
                );
                console.log(
                    'in the trunk width',
                    this.x > trunk.x && this.x < trunk.x + trunk.width
                );
                yc = height - this.height - trunk.y;
            }
        });

        if (this.y < 1) {
            this.gravity *= 1.5;
        }

        image(game.playerImage, xc, yc, this.width, this.height);
    }
}
