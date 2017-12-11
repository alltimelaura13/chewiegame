var RIGHT_KEY = 39;

var UP_KEY = 38;

function Player(canvas, sprite) {
  this.canvas = document.getElementById("canvas");
  this.ctx = this.canvas.getContext("2d");

  this.sprite = new Image();
  this.sprite.src = sprite;
  this.sprite.isReady = false;
  this.x = 0;
  this.y = 330;
  this.speed = 13;
  this.isJumping = false;
  this.gravity = 0.3;
  this.ground = 330;
  this.yMove = 0;
  this.vy = 0;
  this.y += this.yMove * this.vy;




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
  if (this.isJumping && this.y >= this.ground) {
    this.isJumping = false;
    this.yMove = 0;
    this.sprite.hframes = 0;
    this.sprite.hfIndex = 1;
    setTimeout(function() {
      this.sprite.hfIndex = 0;
    }.bind(this), 200);
  }
}






Player.prototype.onKeyDown = function(event) {
  if (event.keyCode == RIGHT_KEY) {
    this.moveRight();
  }
}



Player.prototype.moveRight = function() {
  if (this.sprite.hfIndex >= 1) {
    this.sprite.hfIndex = 0;
  } else {
    this.sprite.hfIndex++;
  }

  this.x += this.speed;
}





Player.prototype.stop = function() {
  this.sprite.hfIndex = 0;
}



Player.prototype.onKeyUp = function(event) {
  if (event.keyCode == UP_KEY) {
    this.moveUp();
  }
}




Player.prototype.moveUp = function() {
  if (this.keys[38]) {
    if (!this.isJumping) {
      this.isJumping = true;
      this.yMove = -1;
      this.sprite.hfIndex = 1;
      setTimeout(function() {
        this.sprite.hfIndex = 1;
      }.bind(this), 175);
      setTimeout(function() {
        this.yMove = 1;
      }.bind(this), 330);
    }
  }
}
