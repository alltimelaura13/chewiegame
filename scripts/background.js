function Canvas(id) {
  this.canvas = document.getElementById("canvas");
  this.ctx = this.canvas.getContext('2d');


  this.canvas.width = 1000;
  this.canvas.height = 500;



  this.img = new Image();
  this.img.src = "./images/bg2.png"
  this.ctx.scale (0.5, 0.5);
  this.x = 0;
  this.y = 0;
}

Canvas.prototype.start = function() {
  this.interval = setInterval(this.draw.bind(this), 20);
}

Canvas.prototype.draw = function() {
    if (this.x < 0) {
      this.x -= this.canvas.width;
    }

    if (this.x < this.canvas.width) {

      this.ctx.drawImage(this.img, this.x - this.img.width, this.y, this.img.width, this.img.height);
    }

    this.ctx.beginPath();
    this.ctx.moveTo(this.x, 0);
    this.ctx.lineWidth = 0.1
    this.ctx.lineTo(this.x, 600);
    this.ctx.stroke();


    this.ctx.drawImage(this.img, this.x, this.y, this.img.width, this.img.height);


    this.x -= 2;
}
