function Canvas(id) {
  this.canvas = document.getElementById("canvas");
  this.ctx = this.canvas.getContext('2d');


  this.canvas.width = 1000;
  this.canvas.height = 500;



  this.img = new Image();
  this.img.src = "./images/bg2.png"
  this.x = 0;
  this.y = 0;
  this.img.onload = (function() {
    this.ctx.drawImage(this.img, this.x, this.y, this.canvas.width, this.canvas.height);}).bind(this);
  }

Canvas.prototype.draw = function(player) {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    if (this.x <= 0) {
      this.x = this.canvas.width;
    }
      this.ctx.drawImage(this.img, this.x - this.canvas.width, this.y, this.canvas.width, this.canvas.height);
      this.ctx.drawImage(this.img, this.x, this.y, this.canvas.width, this.canvas.height);
      this.x -= 0.5;





// this.imagesthis.m
// draw {
//   clear();
//   if (m===0){
//     m = img.width;
//   }
//   draw.img(m);
//   draw.(this.img.width-m);
//   m-=0.5 //para que m se repinte cada vez que se mueve la img
//   }
// }





    //
    // Canvas.prototype.draw = function(player) {
    //   if (this.x > this.canvas.width) {
    //   this.x = 0;
    // }
    //
    // if (this.x > 0) {
    //   this.ctx.drawImage(this.img, -this.img.width + this.x, this.y, this.img.width, this.img.height);
    // } else if (this.x - this.img.width > 0) {
    //   this.ctx.drawImage(this.img, -this.img.width * 2 + this.x, this.y, this.img.width, this.img.height);
    // }

    //
    //
    // this.ctx.beginPath();
    // this.ctx.moveTo(this.x, 0);
    // this.ctx.lineWidth = 0.1
    // this.ctx.lineTo(this.x, 1000);
    // this.ctx.stroke();
    // this.ctx.closePath();


}
