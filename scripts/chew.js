// function Player(canvas, sprite) {
//   this.canvas = document.getElementById("canvas");
//   this.ctx = this.canvas.getContext("2d");
//
//   this.sprite = new Image();
//   this.sprite.src = sprite;
//   this.sprite.isReady =  false;
//   this.sprite.scale = 0.3;
//   this.sprite.onload = (function() {
//     this.sprite.isReady = true;
//     this.sprite.frameIndex = 0;
//     this.sprite.cFrames = 4;
//     this.sprite.rFrames = 1;
//     this.sprite.frameWidth = this.sprite.width / this.sprite.cFrames;
//     this.sprite.frameHeight = this.sprite.height / this.sprite.rFrames;
//     this.width = this.sprite.frameWidth * this.sprite.scale;
//     this.height = this.sprite.frameHeight * this.sprite.scale;
//   }).bind(this)
//
//   this.x = 0;
//   this.y = 0;
//   this.speed = 10;
// }
//
// Player.prototype.draw() = function(){
//   if (this.isReady()) {
//     this.ctx.drawImage(
//       this.sprite,
//       this.sprite.frameIndex * this.sprite.frameWidth, 0,
//       this.sprite.frameWidth,
//       this.sprite.frameHeight,
//       this.x,
//       this.y,
//       this.width,
//       this.height
//       );
//     }
// }
