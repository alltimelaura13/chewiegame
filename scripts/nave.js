function Nave(canvas, sprite) {
  this.canvas = document.getElementById("canvas");
  this.ctx = this.canvas.getContext("2d");

  this.sprite = new Image();
  this.sprite.src = sprite;
  this.sprite.isReady = false;

  this.x = 10;
  this.y = 20;
  this.speed = 25;


  Nave.prototype.draw = function() {

    if (this.x <= 0) {
      this.x = this.canvas.width;
    }
    this.ctx.drawImage(this.sprite, this.x - this.sprite.width, this.y, this.sprite.width, this.sprite.height);
    this.x += 1;
  }
}
