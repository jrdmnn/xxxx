class Trunk {
    constructor(image) {
        this.image = image;
        this.x = width;
        this.y = height / 2;
        this.width = 200;
        this.height = 50;
    }
    draw() {
        rect(this.x, this.y, this.width, this.height);
        image(this.image, this.x, this.y, this.width, this.height);
    }
}
