document.getElementById('startGame').onclick = () => {
    myGameArea.start()
}

document.addEventListener("keydown", (e) => {
    const key = e.code;
    switch (key) {
      case "ArrowUp":
        if (myGameArea.player.y >= 10){
          myGameArea.player.speedY -= 1;
        }
        break;
      case "ArrowDown":
        myGameArea.player.speedY += 1;
        break;
      case "ArrowLeft":
        myGameArea.player.speedX -= 1;
        break;
      case "ArrowRight":
        myGameArea.player.speedX += 1;
        break;
    }
  });
  
  document.addEventListener("keyup", () => {
      myGameArea.player.speedX = 0;
      myGameArea.player.speedY = 0;
  });