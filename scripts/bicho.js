function Bicho(canvas, sprite) {
  this.canvas = document.getElementById("canvas");
  this.ctx = this.canvas.getContext("2d");

  this.sprite = new Image();
  this.sprite.src = sprite;
  this.sprite.isReady = false;

  this.x = 1000;
  this.y = 350;
  this.speed = 50;


  this.sprite.onload = (function() {
    this.sprite.isReady = true;
    this.sprite.hFrames = 3;
    this.sprite.vFrames = 1;
    this.sprite.frameWidth = Math.floor(this.sprite.width / this.sprite.hFrames);
    this.sprite.frameHeight = Math.floor(this.sprite.height / this.sprite.vFrames);
    this.sprite.hfIndex = 0;
    this.sprite.vfIndex = 0;
    this.width = this.sprite.frameWidth;
    this.height = this.sprite.frameHeight;
  }).bind(this);

}


Bicho.prototype.intervalo = function() {
  setInterval(this.move(), 50);
}


Bicho.prototype.draw = function() {
  if (this.sprite.isReady) {
    this.ctx.save();
    this.ctx.drawImage(
      this.sprite,
      this.sprite.hfIndex * this.sprite.frameWidth,
      this.sprite.vfIndex * this.sprite.frameHeight,
      this.sprite.frameWidth,
      this.sprite.frameHeight,
      Math.min(this.x, this.canvas.width),
      this.y,
      this.width,
      this.height
    );
    this.ctx.restore();
  }

}

Bicho.prototype.move = function() {
  this.x--;

  if (this.sprite.hfIndex >= 1) {
    this.sprite.hfIndex = 0;

  } else {
    this.sprite.hfIndex++;
  }

}


Bicho.prototype.update = function() {
  if (this.sprite.isReady == true) {
    this.move();

  }
}
