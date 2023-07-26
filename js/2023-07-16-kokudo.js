let kokuDaySketch = function (p) {
  let angle = 0;
  const ellipseWidth = 300;
  const ellipseHeight = 300;
  const arrowLength = 150;
  const arrowHeadSize = 30;
  const arrowCurve = 5;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.angleMode(p.DEGREES);
  }

  p.draw = function () {
    p.background(30); // Dark background
    p.translate(p.width / 2, p.height / 2);
    drawRotatingEllipse();
    drawRotatingArrow();
  }

  function drawRotatingEllipse() {
    p.fill(41, 96, 153);
    p.stroke(255); // White outline for the ellipse
    p.strokeWeight(4);
    p.ellipse(-100, -100, ellipseWidth * 1.5, ellipseHeight * 1.5);
  }

  function drawRotatingArrow() {
    const x = p.cos(angle) * ellipseWidth / 10;
    const y = p.sin(angle) * ellipseHeight / 200;

    p.push();
    p.translate(x, y);
    const arrowAngle = p.atan2(y, x);
    p.rotate(arrowAngle);

    p.fill(255); // White fill for the arrow
    p.stroke(255);
    p.strokeWeight(50);

    // Draw the arrow body
    p.line(0, 0, arrowLength, 0);

    // Draw the arrowhead
    p.beginShape();
    p.vertex(arrowLength - arrowHeadSize, 0);
    p.vertex(arrowLength - arrowHeadSize + arrowCurve, arrowHeadSize / 2);
    p.vertex(arrowLength, 0);
    p.vertex(arrowLength - arrowHeadSize + arrowCurve, -arrowHeadSize / 2);
    p.endShape(p.CLOSE);

    p.pop();

    angle += 2; // Adjust the speed of rotation by changing the increment value
    angle %= 200; // Ensure the angle stays within 0 to 359 degrees
  }
}

// Create an instance of the sketch
let kokuDayInstance = new p5(kokuDaySketch);
