function Malo(canvas, sprite) {
  this.canvas = document.getElementById("canvas");
  this.ctx = this.canvas.getContext("2d");

  this.sprite = new Image();
  this.sprite.src = sprite;
  this.sprite.isReady = false;

  this.x = 300;
  this.y = 310;
  this.speed = 100;


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


Malo.prototype.intervalo = function() {
  setInterval(this.move(), 200);
}


Malo.prototype.draw = function() {
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

Malo.prototype.move = function() {
      this.x --;

  if (this.sprite.hfIndex >= 1) {
    this.sprite.hfIndex = 0;

  } else {
    this.sprite.hfIndex++;
  }
}


Malo.prototype.update = function() {
  if (this.sprite.isReady == true) {
    this.move();

  }
}














// Malo.prototype.loaded = function() {
//   this.sprite.isReady = true;
//   setTimeout(update, 1000 / 60);
// }
//
// Malo.prototype.redraw = function() {
//   ctx.fillStyle = '#000000';
//   ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
//   if (this.sprite.isReady = true)
//     this.ctx.drawImage(img, frame * 96, 0, 96, 54,
//       this.canvas.width / 2 - 48, this.canvas.height / 2 - 48, 96, 54);
// }
//
// Malo.prototype.update = function() {
//   redraw();
//   this.sprite.hfIndex++;
//   if (this.sprite.hfIndex >= 6) this.sprite.hfIndex = 0;
//   setTimeout(update, 1000 / 60);
// }
