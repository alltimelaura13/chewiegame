function Malo(canvas, sprite) {
  this.canvas = document.getElementById("canvas");
  this.ctx = this.canvas.getContext("2d");

  this.sprite = new Image();
  this.sprite.src = sprite;
  this.sprite.isReady = false;

  this.x = 300;
  this.y = 370;
  this.speed = 25;


  Malo.prototype.draw = function() {

    if (this.x <= 0) {
      this.x = this.canvas.width;
    }
    this.ctx.drawImage(this.sprite, this.x - this.sprite.width, this.y, this.sprite.width, this.sprite.height);
    this.x -= 1;
  }
}


//   this.sprite.onload = (function() {
//     this.sprite.isReady = true;
//     this.sprite.hFrames = 3;
//     this.sprite.vFrames = 1;
//     this.sprite.frameWidth = Math.floor(this.sprite.width / this.sprite.hFrames);
//     this.sprite.frameHeight = Math.floor(this.sprite.height / this.sprite.vFrames);
//     this.sprite.hfIndex = 0;
//     this.sprite.vfIndex = 0;
//     this.width = this.sprite.frameWidth;
//     this.height = this.sprite.frameHeight;
//   }).bind(this);
//
// }
//
// Malo.prototype.draw = function() {
//   if (this.sprite.isReady) {
//     this.ctx.drawImage(
//       this.sprite,
//       this.sprite.hfIndex * this.sprite.frameWidth,
//       this.sprite.vfIndex * this.sprite.frameHeight,
//       this.sprite.frameWidth,
//       this.sprite.frameHeight,
//       Math.min(this.x, this.canvas.width / 2),
//       this.y,
//       this.width,
//       this.height
//     );
//   }
// }
