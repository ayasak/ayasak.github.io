function Bullets(x, y) {
    this.x = x;
    this.y = y;
    this.r = 5;
    this.goaway = false;
  
    this.show = function() {
      noStroke();
      fill(255);
      ellipse(this.x, this.y, this.r, this.r);
    }
  
    this.bye = function() {
      this.goaway = true;
    }

    this.hits = function(pixelgroup) {
      var d = dist(this.x, this.y, pixelgroup.x, pixelgroup.y);
      if (d < this.r + pixelgroup.r) {
        return true;
      } else {
        return false;
      }
    }
  
    this.move = function() {
      this.y = this.y - 5;
    }
  
  }
  