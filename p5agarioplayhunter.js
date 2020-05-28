function Hunter() {
    this.x = width/2;
    this.xway = 0;
  
    this.show = function() {
      fill(255);
      rectMode(CENTER);
      rect(this.x, height-30, 30, 60);
    }
  
    this.setWay = function(direction) {
      this.xway = direction;
    }
  
    this.move = function(direction) {
      this.x += this.xway*4;
    }
  
  }
  