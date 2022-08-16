class Component {
    constructor(x, y, width, height, color) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.color = color;
      this.speedX = 0;
      this.speedY = 0;
    }
  
    draw() {
      const ctx = myGameArea.context;
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  
    newPos() {
      this.x += this.speedX;
      this.y += this.speedY;
    }
  
    top() {
      return this.y;
    }
  
    bottom() {
      return this.y + this.width;
    }
  
    left() {
      return this.x;
    }
  
    rigth() {
      return this.x + this.height;
    }
  
    crashWith(obstacle) {
      return !(
        this.bottom() < obstacle.top() ||
        this.top() > obstacle.bottom() ||
        this.rigth() < obstacle.left() ||
        this.left() > obstacle.rigth()
      );
    }
  
    getPoints(ball) {
      return !(
        this.bottom() < ball.top() ||
        this.top() > ball.bottom() ||
        this.rigth() < ball.left() ||
        this.left() > ball.rigth()
      );
    }
  }