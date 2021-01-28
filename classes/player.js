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
        // ******************
        this.underObstacle = false;
        // ******************
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
        // this gets higher with every loop
        this.velocity += this.gravity;
        // this pushes the player down => gravity
        this.y += this.velocity;

        // **********************
        // this makes sure the player does not go through the trunk when under the trunk and jumping
        if (this.underObstacle && this.y <= (this.underObstacle.y + this.underObstacle.height) && this.jumping) {
            this.y = this.underObstacle.y + this.underObstacle.height;
            this.velocity = 1;
        }
        // **********************

        // **********************
        // also add !this.underObstacle here: 
        if (!this.underObstacle && this.overObstacle && this.y >= this.overObstacle.y - this.height) {
            this.y = this.overObstacle.y - this.height;
        }
        // this makes sure that player does not move out of the bottom of the screen
        if (this.y >= height - this.height - height / 6) {
            this.y = this.ground;
            this.jumping = false;
        }

        game.trunks.forEach((trunk) => {
            // condition for if the player is above the obstacle
            if (
                (this.x + this.width) >= trunk.x && this.x <= (trunk.x + trunk.width)
                && (this.y - this.height) < (trunk.y + trunk.height)
            ) {
                this.overObstacle = trunk;

            } else {
                this.overObstacle = false
            }

            // **********************
            // condition for if the player is under the obstacle
            if ((this.x + this.width) >= trunk.x && this.x <= (trunk.x + trunk.width) &&
                this.y > (trunk.y - trunk.height)) {
                this.underObstacle = trunk;
            } else {
                this.underObstacle = false;
            }
            // **********************
        });


        image(game.playerImage, this.x, this.y, this.width, this.height);
    }
}
