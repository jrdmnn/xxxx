class Background {
    constructor() {
        this.mx = 0;
    }

    draw() {
        game.backgroundImages.forEach(function (img) {
            // here we use the speed property of the image instead of
            // a specific value so that every image moves at a different speed
            img.x -= img.speed;
            img.y = height / 6;
            image(img.src, img.x, 0, width, height - img.y);
            // this puts a second image after the first
            image(img.src, img.x + width, 0, width, height - img.y);
            // if the image leaves the screen we set it back to it's starting
            // position
            if (img.x <= -width) {
                img.x = 0;
            }
        });

        image(game.grassImage, 0, height / 1.2, width, height);
    }
}
