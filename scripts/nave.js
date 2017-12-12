function Nave(canvas, sprite) {
  this.canvas = document.getElementById("canvas");
  this.ctx = this.canvas.getContext("2d");

  this.sprite = new Image();
  this.sprite.src = sprite;
  this.sprite.isReady = false;

  this.x = 10;
  this.y = 20;
  this.speed = 30;
  this.scale = 2;
  this.width = 300;
  this.height = 100;


  Nave.prototype.draw = function() {
    if (this.x <= 1) {
      this.x = this.canvas.width;
    }
    this.ctx.drawImage(this.sprite, this.x - this.sprite.width, this.y, this.sprite.width, this.sprite.height);
    this.x += 1;
  }
}


Nave.prototype.move = function() {
  this.x++;

  if (this.sprite.hfIndex >= 1) {
    this.sprite.hfIndex = 0;

  } else {
    this.sprite.hfIndex++;
  }

}


Nave.prototype.update = function() {
  if (this.sprite.isReady == true) {
    this.move();

  }
}
