// 東京の日 (家紋)

let numPoints = 4; // Number of points for the star
let outerRadius = 100; // Outer radius of the star
let innerRadius = 50; // Inner radius of the star
let rotation = 0; // Initial rotation of the star
let bgColor = "#272727"; // Background color
let fillColor = "#EDD9A4"; // Fill color of the star

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(bgColor);
  translate(width / 2, height / 2); // Move the origin to the center

  // Draw the Kamon-like design
  drawKamon(width / 4, numPoints, outerRadius, innerRadius, rotation, fillColor);
  drawKamonOut(width / 4, numPoints, outerRadius, innerRadius, rotation, fillColor);
  rotation += .6; // Rotate the design slowly
}

function drawKamon(x, numPoints, outerRadius, innerRadius, rotation, fillColor) {
  fill(fillColor);
  stroke(10);
  strokeWeight(3)
  beginShape();
  for (let i = 0; i < numPoints * 2; i++) {
	let angle = 360 / (numPoints * 2) * i + rotation * frameCount / 50;
	let radius = i % 2 === 0 ? outerRadius : innerRadius;
	let xPoint = x * cos(angle);
	let yPoint = x * sin(angle);
	vertex(xPoint, yPoint);
  }
  endShape(CLOSE);
}

function drawKamonOut(x, numPoints, outerRadius, innerRadius, rotation, fillColor) {
	noFill(fillColor);
	stroke(255);
	strokeWeight(1)
	beginShape();
	for (let i = 0; i < numPoints * 2; i++) {
	  let angle = 360 / (numPoints * 2) * i + rotation * frameCount / 120;
	  let radius = i % 2 === 0 ? outerRadius : innerRadius;
	  let xPoint = x * cos(angle)*1.8;
	  let yPoint = x * sin(angle)*1.8;
	  vertex(xPoint, yPoint);
	}
	endShape(CLOSE);
  }
