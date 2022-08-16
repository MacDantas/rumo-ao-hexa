const myGameArea = {
  canvas: document.createElement("canvas"),
  frames: 0,
  obstacles: [],
  balls: [],
  trophies: [],
  stop: false,
  player: null,
  score: 0,
  start: function () {
    this.player = new Component(290, 340, 35, 35, "green");
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
  // getPoints: function () {
    // this.context.font = "18px sherif";
    // this.context.fillStyle = "black";
    // this.context.fillText(`Score: ${score}`, 420, 50);
  // },
};

function updateGameArea() {
  myGameArea.clear();
  myGameArea.player.newPos();
  myGameArea.player.draw();
  updateObstacle();
  updateBall();
  updateTrophie();

  myGameArea.frames += 1;
  checkGameOver();
  checkPoints();
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
        console.log('Verificar');
      myGameArea.balls.splice(index, 1);
      myGameArea.score += 1;
    }
  });
}
