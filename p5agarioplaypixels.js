
function Pixels(x, y) {
    this.x = x;
    this.y = y;
    this.r = 20;
   // this.velocity =1;
  // this.beginX =x;
    this.xway = 1;
  
    this.shiftDown = function(){
      if(this.y < height-100 ){
      this.xway *= -1;
      this.y += this.r;
    } else{
      gameover = true;
    }
  }
    this.move = function(){
      this.x = this.x + this.xway;
    }   

    this.show = function() {
      noStroke();
      var r = random(0, 255);
      var g = random(0, 255);
      var b = random(0, 255);
      fill(r,g,b);
      rect(this.x, this.y, 20, 20);

     
    }
}
