var UP_KEY = 38;

function Game() {
  this.canvas = new Canvas("canvas");
  this.player = new Player ("canvas", "./images/chew1111.png");
  this.nave = new Nave ("canvas", "./images/nave12.png");
  setInterval(function() {
    this.nave.move();
  }.bind(this), 1000);

  this.badnaves = [];

  // this.malisimos.push(new Malo(this.canvas, "./images/malo12.png"));
  setInterval(function() {
    this.badnavesaux = new Nave ("canvas", "./images/nave12.png");
    this.badnaves.push(this.badnavesaux);
  }.bind(this), 30000);



  this.malo = new Malo ("canvas", "./images/malo12.png");
  setInterval(function() {
    this.malo.move();
  }.bind(this), 500);

  this.malisimos = [];

  // this.malisimos.push(new Malo(this.canvas, "./images/malo12.png"));
  setInterval(function() {
    this.maloaux = new Malo ("canvas", "./images/malo12.png");
    this.malisimos.push(this.maloaux);
  }.bind(this), 1000);

  this.bicho = new Bicho("canvas", "./images/malosi2.png");
  setInterval(function() {
    this.bicho.move();
  }.bind(this), 800);

  this.bichisimos = [];

  // this.malisimos.push(new Malo(this.canvas, "./images/malo12.png"));
  setInterval(function() {
    this.bichoaux = new Bicho ("canvas", "./images/malosi2.png");
    this.bichisimos.push(this.bichoaux);
  }.bind(this), 3000);




  window.onkeydown = this.onKeyDown.bind(this);
}


Game.prototype.onKeyDown = function(event) {
  if (event.keyCode == RIGHT_KEY) {
      this.player.onKeyDown(event);
  }
  else if(event.keyCode == LEFT_KEY){
    this.player.onKeyDown(event);
  }
  else if(event.keyCode == UP_KEY){
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
  this.bicho.draw();
  this.malisimos.forEach(function(malo) {
    setInterval(function() {
      malo.move();
    }.bind(this), 200);
    // setInterval(function() {
      malo.draw();
    // }.bind(this), 300);

  });

  this.badnaves.forEach(function(nave) {
    setInterval(function() {
      nave.move();
    }.bind(this), 20000);
    // setInterval(function() {
      nave.draw();
    // }.bind(this), 300);

  });

  this.bichisimos.forEach(function(bicho) {
    setInterval(function() {
      bicho.move();
    }.bind(this), 300);
    // setInterval(function() {
      bicho.draw();
    // }.bind(this), 300);

  });

  window.requestAnimationFrame(this.draw.bind(this));
}
