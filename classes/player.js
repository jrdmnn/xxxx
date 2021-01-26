class Player {
    constructor() {
        this.score = 0;
        this.gravity = 0.2;
        this.velocity = 0;
        this.width = 100;
        this.height = 140;
        this.x = 50;
        this.y = height - this.height - height / 6;
        this.ground = height - this.height - height / 6
        this.jumping;
        this.overObstacle = false;
    }
    jump() {
        if (!this.jumping) {
            this.jumping = true
            this.velocity = - 15;
        }
    }
    move() {
        this.x += 100;
    }
    moveBack() {
        this.x -= 25;
    }
    draw() {
        // console.log(this.overObstacle);
        // this gets higher with every loop
        this.velocity += this.gravity;
        // this pushes the player down => gravity
        this.y += this.velocity;
        if (this.overObstacle && (this.y - this.height) < (this.overObstacle.y + this.overObstacle.height)) {
            this.y = this.overObstacle.y - this.height - 5;
            // if (this.y >= this.overObstacle.y + this.height) {
            //     console.log('now');
            //     // this.y = this.height - this.overObstacle.y + this.overObstacle.height
            // }
            // console.log('over');
            // this.gravity = 0.2
            // this.y = this.height - this.overObstacle.y + this.overObstacle.height
            // this.y = this.overObstacle.y - this.height - 5;
        }
        // this makes sure that player does not move out of the bottom of the screen
        if (this.y >= height - this.height - height / 6) {
            // this.gravity = 0.2;
            // this is the starting y of the player
            this.y = this.ground;
            this.jumping = false;
        }

        // let xc = constrain(this.x, 0, width - this.width);
        // let yc = constrain(this.y, 0, height - this.height);

        // if (this.x > trunk.x && this.x < trunk.x + trunk.width) {
        //     yc = constrain(this.y, 0, game.trunk.y - this.height);
        // }
        game.trunks.forEach((trunk) => {
            // console.log(trunk.y);
            if (
                // condition for 'player is above the obstacle
                (this.x + this.width) >= trunk.x && this.x <= (trunk.x + trunk.width)
                && (this.y - this.height) < (trunk.y + trunk.height)
                // and 
            ) {
                // this.y = trunk.y - this.height - 5;
                // this.ground = trunk.y + trunk.height + this.height
                this.overObstacle = trunk;

                // console.log(this.ground);
            } else {
                // this.ground = height - this.height - height / 6;
                this.overObstacle = false
            }
        });

        // if (this.y < 1) {
        //     this.gravity *= 1.5;
        // }

        image(game.playerImage, this.x, this.y, this.width, this.height);
    }
}
