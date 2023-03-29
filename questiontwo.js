//Lab 7 Q2
// Evan Soucy
let offSet = 80;
function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(220);

  for (let numRows = 0; numRows < 5; numRows++) {
    for (let numCols = 0; numCols < 5; numCols++) {
      let redVal = 255 - numRows * 50;
      let greenVal = 255 - numCols * 50;
      let blueVal = 255;
      let randomColor = color(redVal, greenVal, blueVal);

      drawSprite(numRows * offSet + 40, numCols * offSet + 40, randomColor);
    }
  }
}

function drawSprite(x, y, color) {
  push();
  fill(color);
  ellipse(x, y, 70);
  pop();
}
