function Game() {
  this.canvas = new Canvas("canvas");
  this.player = new Player ("canvas", "./images/play14.png");
  this.malo = new Malo ("canvas", "./images/malo12.jpg");
  this.nave = new Nave ("canvas", "./images/nave12.jpg");
  this.sound = new Sound(".sounds/theme.mp3");

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
  this.malo.draw();
  this.nave.draw();

  window.requestAnimationFrame(this.draw.bind(this));
}
