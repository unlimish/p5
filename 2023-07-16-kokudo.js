// 国土交通Day

let angle = 0;
const ellipseWidth = 300;
const ellipseHeight = 300;
const arrowLength = 150;
const arrowHeadSize = 30;
const arrowCurve = 5;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(30); // Dark background
  translate(width / 2, height / 2);
  drawRotatingEllipse();
  drawRotatingArrow();
}

function drawRotatingEllipse() {
  fill(41, 96, 153);
  stroke(255); // White outline for the ellipse
  strokeWeight(4);
  ellipse(-100, -100, ellipseWidth * 1.5, ellipseHeight * 1.5);
}

function drawRotatingArrow() {
  const x = cos(angle) * ellipseWidth / 10;
  const y = sin(angle) * ellipseHeight / 200;

  push();
  translate(x, y);
  const arrowAngle = atan2(y, x);
  rotate(arrowAngle);

  fill(255); // White fill for the arrow
  stroke(255);
  strokeWeight(50);

  // Draw the arrow body
  line(0, 0, arrowLength, 0);

  // Draw the arrowhead
  beginShape();
  vertex(arrowLength - arrowHeadSize, 0);
  vertex(arrowLength - arrowHeadSize + arrowCurve, arrowHeadSize / 2);
  vertex(arrowLength, 0);
  vertex(arrowLength - arrowHeadSize + arrowCurve, -arrowHeadSize / 2);
  endShape(CLOSE);

  pop();

  angle += 2; // Adjust the speed of rotation by changing the increment value
  angle %= 200; // Ensure the angle stays within 0 to 359 degrees
}
