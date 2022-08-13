const myGameArea = {
  canvas: document.createElement("canvas"),
  frames: 0,
  obstacles: [],
  balls: [],
  start: function () {
    this.canvas.width = 480;
    this.canvas.height = 270;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    updateGameArea();
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
};

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
}

function createObstacle () {
    let y = myGameArea.canvas.height
    let height = 30
    let width = 30
    let randomX = Math.floor(Math.random() * (myGameArea.canvas.width - width))
    let newObstacle = new Component (randomX, 0, width, height, 'red')
    myGameArea.obstacles.push(newObstacle)
}


function createBall () {
    let y = myGameArea.canvas.height
    let height = 30
    let width = 30
    let randomX = Math.floor(Math.random() * (myGameArea.canvas.width - width))
    let newBall = new Component (randomX, 0, width, height, 'blue')
    myGameArea.balls.push(newBall)
}

function updateBall (){
    if (myGameArea.frames % 120 === 0){
        createBall()
    }

    for (ball of myGameArea.balls){
        ball.y += 1
        ball.draw();
    }
}

function updateObstacle (){
    if (myGameArea.frames % 120 === 0){
        createObstacle()
    }

    for (obstacle of myGameArea.obstacles){
        obstacle.y += 1
        obstacle.draw ();
    }

   // myGameArea.obstacles = myGameArea.obstacles.filter (obstacle => obstacle.x > 0 + obstacle.width)
}

const player = new Component(240, 240, 30, 30, "green");

function updateGameArea() {
  myGameArea.clear()
  player.newPos()
  player.draw()
  updateObstacle()
  updateBall()

myGameArea.frames += 1
  requestAnimationFrame(updateGameArea);
}

document.addEventListener("keydown", (e) => {
  const key = e.code;
  switch (key) {
    case 'ArrowUp': // up arrow
      player.speedY -= 1;
      break;
    case 'ArrowDown': // down arrow
      player.speedY += 1;
      break;
    case 'ArrowLeft': // left arrow
      player.speedX -= 1;
      break;
    case 'ArrowRight': // right arrow
      player.speedX += 1;
      break;
  }
});

document.addEventListener('keyup', () => {
    player.speedX = 0
    player.speedY = 0
})
