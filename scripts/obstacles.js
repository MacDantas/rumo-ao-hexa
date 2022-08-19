function createObstacle() {
    let y = myGameArea.canvas.height;
    let height = 35;
    let width = 35;
    let randomX = Math.floor(Math.random() * (myGameArea.canvas.width - width));
    let newObstacle = new Component(randomX, 0, width, height, "red", "./images/argentina.png");
    myGameArea.obstacles.push(newObstacle);
  }

  function updateObstacle() {
    if (myGameArea.frames % 120 === 0) {
      createObstacle();
    }
  
    for (obstacle of myGameArea.obstacles) {
      obstacle.y += 1;
      obstacle.draw();
    }
  
    myGameArea.obstacles = myGameArea.obstacles.filter(
      (obstacle) => obstacle.x > 0 + obstacle.width
    );
    myGameArea.balls = myGameArea.balls.filter((ball) => ball.x > 0 + ball.width);
  }