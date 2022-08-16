function createBall() {
    let y = myGameArea.canvas.height;
    let height = 35;
    let width = 35;
    let randomX = Math.floor(Math.random() * (myGameArea.canvas.width - width));
    let newBall = new Component(randomX, 0, width, height, "blue");
    myGameArea.balls.push(newBall);
  }
  
  function updateBall() {
    if (myGameArea.frames % 120 === 0) {
      createBall();
    }
  
    for (ball of myGameArea.balls) {
      ball.y += 1;
      ball.draw();
    }
  }