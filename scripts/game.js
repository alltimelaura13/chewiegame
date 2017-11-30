function Game() {
  this.canvas = new Canvas("canvas");
  this.player = new Player ("canvas", "./images/player1.png");
  this.interval = setInterval(this.update.bind(this), 20);
}

Game.prototype.update = function() {
  this.canvas.draw()
  this.player.draw()
}
