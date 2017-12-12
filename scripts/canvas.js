function Canvas(id) {
  this.canvas = document.getElementById("canvas");
  this.ctx = this.canvas.getContext('2d');


  this.canvas.width = 1000;
  this.canvas.height = 500;



  this.img = new Image();
  this.img.src = "./images/bg21.jpg"
  this.x = 0;
  this.y = 0;
  this.img.onload = function() {


  }.bind(this);
}

Canvas.prototype.draw = function() {

  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    if (this.x <= 0) {
      this.x = this.canvas.width;
      var sound = new Audio ("./sounds/theme.mp3");
      sound.play();
    }
      this.ctx.drawImage(this.img, this.x - this.canvas.width, this.y, this.canvas.width, this.canvas.height);
      this.ctx.drawImage(this.img, this.x, this.y, this.canvas.width, this.canvas.height);
      this.x -= 0.2;


};
