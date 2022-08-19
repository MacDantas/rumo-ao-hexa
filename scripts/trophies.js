class prize {
    constructor(x, y, width, height, color, imgSrc) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.color = color;
      this.image = new Image();
      this.image.src = imgSrc;
      this.speedX = 0;
      this.speedY = 0;
    }
  
    draw() {
      const ctx = myGameArea.context;
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
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

    getPrizes(trophy) {
        return !(
          this.bottom() < ball.top() ||
          this.top() > ball.bottom() ||
          this.rigth() < ball.left() ||
          this.left() > ball.rigth()
        );
      }
}

function createTrophy() {
    let y = myGameArea.canvas.height;
    let height = 35;
    let width = 35;
    let randomX = Math.floor(Math.random() * (myGameArea.canvas.width - width));
    let newTrophy = new prize(randomX, 0, width, height, "yellow", "./images/trophy.png");
    myGameArea.trophies.push(newTrophy);
  }
  
  function updateTrophy() {
    if (myGameArea.trophies.length === 0 && myGameArea.score % 3 === 0 && myGameArea.score != 0) {
      createTrophy();
    }
  
    for (trophy of myGameArea.trophies) {
      trophy.y += 1;
      trophy.draw();
    }
  }