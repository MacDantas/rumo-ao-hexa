class prize {
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
}

function createTrophie() {
    let y = myGameArea.canvas.height;
    let height = 35;
    let width = 35;
    let randomX = Math.floor(Math.random() * (myGameArea.canvas.width - width));
    let newTrophie = new prize(randomX, 0, width, height, "yellow");
    myGameArea.trophies.push(newTrophie);
  }
  
  function updateTrophie() {
    if (myGameArea.score === 10) {
      createTrophie();
    }
  
    for (trophie of myGameArea.trophies) {
      trophie.y += 1;
      trophie.draw();
    }
  }