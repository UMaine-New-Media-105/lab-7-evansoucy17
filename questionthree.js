let offSet = 80;
let redGradient = true;

function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(220);

  for (let numRows = 0; numRows < 5; numRows++) {
    for (let numCols = 0; numCols < 5; numCols++) {
      let redVal, greenVal, blueVal;
      
      if (redGradient) {
        redVal = 255 - numRows * 50;
        greenVal = 255 - numCols * 50;
        blueVal = 255;
      } else {
        redVal = 255;
        greenVal = 255 - numRows * 50;
        blueVal = 255 - numCols * 50;
      }

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

function mousePressed() {
  redGradient = !redGradient;
  redraw();
}
