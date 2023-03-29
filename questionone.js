//Lab 7 Q1
//Evan Soucy
let arrayOfColors = ["palevioletred", "orangered", "darkseagreen", "mediumspringgreen", "seagreen", "paleturquoise", "lightseagreen", "aqua", "deepskyblue", "dodgerblue", "royalblue", "mediumorchid", "blueviolet"];//random list of colors to be used in the array
let xCord = 30// cordinate of x value for first line
let yCord = 30// cordinate of y value for first line
let offSet=25// offset for first line
let x2cord= 37// cordinate of x value for second line
let y2cord=373// cordinate of x value for second line
let offset2= 24// offset for second line

function setup() {
  createCanvas(400, 400);
  noLoop ();
}

function draw() {
  background(220);
  for (let i=0; i<15; i++){  //first line
    let randomColor = random(arrayOfColors);
    drawSprite (xCord, yCord, randomColor)
    xCord+=offSet;
    yCord+=offSet;
  }
    for (let i=0; i<15; i++){ //second line 
    let randomColor = random(arrayOfColors);
    drawSprite (x2cord, y2cord, randomColor)
    x2cord+=offset2;
    y2cord-=offset2;
  }
}

function drawSprite (x,y,color) { //ellipse sprite 
  push();
  fill(color)
  ellipse (x,y,30)
  pop();
}
