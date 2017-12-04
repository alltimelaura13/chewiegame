function Game() {
  this.canvas = new Canvas("canvas");
  this.player = new Player ("canvas", "./images/player1- (1) 2.png");

  window.onkeydown = this.onKeyDown.bind(this);
}

Game.prototype.onKeyDown = function(event) {
  if (event.keyCode == RIGHT_KEY) {
      this.player.onKeyDown(event);
  }
}

Game.prototype.start = function() {
  window.requestAnimationFrame(this.draw.bind(this));
}

Game.prototype.draw = function() {
  this.canvas.draw();
  this.player.draw();

  window.requestAnimationFrame(this.draw.bind(this));
}
