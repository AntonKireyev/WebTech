// define things
const button = document.getElementById("start");
const shape = document.getElementById("shape");
let startTime;
// arrays for shape and color
// const shapeBorder = ["0", "50"];
// const color = ["red", "green", "blue", "yellow", "violet"];
// make the function to set x and y, shape, color, and show the shape.

function getShape() {
  //   // random integer
  //   const randIndex = Math.floor(Math.random() * 2);
  //   // let x = 300
  //   // let y = 300
  //   shape.style.borderRadius = shapeBorder[randIndex];
  //   // shape.style.color = color[];

  // set random shape
  if (Math.random > 0.5) {
    shape.style.borderRadius = "50%";
  } else {
    shape.style.borderRadius = "0";
  }

  // set random size, height in range [50, 150]
  const randomLength = Math.random() * 100 + 50;
  shape.style.width = randomLength + "px";
  shape.style.height = randomLength = "px";

  // set random position
  const top = Math.random() * (window.innerHeight - 150 - 150);
  const left = Math.random() * (window.innerWidth - 150);
  shape.style.top = top + "px";
  shape.style.left = left + "px";

  // set random color
  shape.style.color = createRandomColor();
  // display shape
  shape.style.display = "block";
}
function createRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `${red}, ${green}, ${blue}`;
}
function startGame() {
  console.log("... starting the game");
  getShape();
  startTime = new Date().getTime();
}

function displayReactionTime() {
  let endTime = new Date().getTime();
  let duration = (endTime - startTime) / 1000;
  document.getElementById("timeTaken").textContent = duration + "s";
}

function endRound() {
  shape.style.display = "none";
  displayReactionTime();
  setTimeout(startGame, 100);
}

button.addEventListener("click", function () {
  startGame();
});

shape.addEventListener("click", function () {
  endRound();
});
