const myGameArea = {
  canvas: document.createElement("canvas"),
  frames: 0,
  obstacles: [],
  balls: [],
  trophies: [],
  stop: false,
  player: null,
  score: 0,
  prizes: 0,
  start: function () {
    this.player = new Component(290, 340, 35, 35, "green", "./images/brasil.png");
    this.canvas.width = 580;
    this.canvas.height = 370;
    this.context = this.canvas.getContext("2d");
    const main = document.getElementById("main");
    main.appendChild(this.canvas);
    updateGameArea();
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  getPoints: function () {
    this.context.font = "18px sherif";
    this.context.fillStyle = "black";
    this.context.fillText(`Score: ${this.score}`, 420, 50);
  },
  getTrophies: function () {
    this.context.font = "18px sherif";
    this.context.fillStyle = "black";
    this.context.fillText(`Trophies: ${this.trophies}`, 320, 50);
  }
};

function updateGameArea() {
  myGameArea.clear();
  myGameArea.player.newPos();
  myGameArea.player.draw();
  updateObstacle();
  updateBall();
  updateTrophy();

  myGameArea.frames += 1;
  myGameArea.getPoints();
  checkGameOver();
  checkPoints();
  checkPrizes();
  if (!myGameArea.stop) {
    requestAnimationFrame(updateGameArea);
  }
}

function checkGameOver() {
  const crashed = myGameArea.obstacles.some((obstacle) =>
    myGameArea.player.crashWith(obstacle)
  );
  if (crashed) {
    myGameArea.stop = true;
  }
}

function checkPoints() {
  myGameArea.balls.forEach((ball, index) => {
    const crashed = myGameArea.player.crashWith(ball);
    if (crashed) {
      myGameArea.balls.splice(index, 1);
      myGameArea.score += 1;
    }
  });
}

function checkPrizes() {
  myGameArea.trophies.forEach((trophy, index) => {
    const crashed = myGameArea.player.crashWith(trophy);
    if (crashed) {
      myGameArea.trophies.splice(index, 1);
      myGameArea.prizes += 1;
    }
  });
}
