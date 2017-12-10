var RIGHT_KEY = 39;

function Player(canvas, sprite) {
  this.canvas = document.getElementById("canvas");
  this.ctx = this.canvas.getContext("2d");

  this.sprite = new Image();
  this.sprite.src = sprite;
  this.sprite.isReady = false;
  // this.sprite.scale = 0.9;
  this.x = 0;
  this.y = 330;
  this.speed = 13;

  this.sprite.onload = (function() {
    this.sprite.isReady = true;
    this.sprite.hFrames = 2;
    this.sprite.vFrames = 1;
    this.sprite.frameWidth = Math.floor(this.sprite.width / this.sprite.hFrames);
    this.sprite.frameHeight = Math.floor(this.sprite.height / this.sprite.vFrames);
    this.sprite.hfIndex = 0;
    this.sprite.vfIndex = 0;
    this.width = this.sprite.frameWidth;
    this.height = this.sprite.frameHeight;
  }).bind(this);

}

Player.prototype.draw = function() {
  if (this.sprite.isReady) {
    this.ctx.drawImage(
      this.sprite,
      this.sprite.hfIndex * this.sprite.frameWidth,
      this.sprite.vfIndex * this.sprite.frameHeight,
      this.sprite.frameWidth,
      this.sprite.frameHeight,
      Math.min(this.x, this.canvas.width / 2),
      this.y,
      this.width,
      this.height
    );
  }
}

Player.prototype.onKeyDown = function(event) {
  if (event.keyCode == RIGHT_KEY) {
      this.moveRight();
  }
}

Player.prototype.moveRight = function() {
  if (this.sprite.hfIndex >= 0) {
    this.sprite.hfIndex = 1;
  } else {
    this.sprite.hfIndex ++;
  }

  this.x += this.speed;
}

Player.prototype.stop = function() {
  this.sprite.hfIndex = 0;
}
//
// Player.prototype.jump = function() {
//   if (this.sprite !jumping){
//     jumping = true;
//     setTimeout(land, 500);
//   }
// }
