function Game() {
  this.canvas = new Canvas("canvas");
  this.player = new Player ("canvas", "./images/chew1111.png");
  this.nave = new Nave ("canvas", "./images/nave12.png");
  this.malo = new Malo ("canvas", "./images/malo12.png");
  setInterval(function() {
    this.malo.move();
  }.bind(this), 200);

  this.malisimos = [];

  this.malisimos.push(new Malo(this.canvas, this.sprite));
  setInterval(function() {
    this.malisimos.push(new Malo(this.canvas, this.sprite));
  }.bind(this), 1300);


  window.onkeydown = this.onKeyDown.bind(this);
}


Game.prototype.onKeyDown = function(event) {
  if (event.keyCode == RIGHT_KEY) {
      this.player.onKeyDown(event);
  }
}

Game.prototype.onKeyUp = function(event) {
  if (event.keyCode == UP_KEY) {
    this.player.onKeyUp(event);
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
  this.malisimos.forEach(function(malo) {
    malo.draw();
  });

  window.requestAnimationFrame(this.draw.bind(this));
}
