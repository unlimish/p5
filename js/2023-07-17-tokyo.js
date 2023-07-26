let tokyoDaySketch = function (p) {
	let numPoints = 4; // Number of points for the star
	let outerRadius = 100; // Outer radius of the star
	let innerRadius = 50; // Inner radius of the star
	let rotation = 0; // Initial rotation of the star
	let bgColor = "#272727"; // Background color
	let fillColor = "#EDD9A4"; // Fill color of the star

	p.setup = function () {
		p.createCanvas(p.windowWidth, p.windowHeight);
		p.angleMode(p.DEGREES);
	}

	p.draw = function () {
		p.background(bgColor);
		p.translate(p.width / 2, p.height / 2); // Move the origin to the center

		// Draw the Kamon-like design
		drawKamon(p.width / 4, numPoints, outerRadius, innerRadius, rotation, fillColor);
		drawKamonOut(p.width / 4, numPoints, outerRadius, innerRadius, rotation, fillColor);
		rotation += 0.6; // Rotate the design slowly
	}

	function drawKamon(x, numPoints, outerRadius, innerRadius, rotation, fillColor) {
		p.fill(fillColor);
		p.stroke(10);
		p.strokeWeight(3);
		p.beginShape();
		for (let i = 0; i < numPoints * 2; i++) {
			let angle = 360 / (numPoints * 2) * i + rotation * p.frameCount / 50;
			let radius = i % 2 === 0 ? outerRadius : innerRadius;
			let xPoint = x * p.cos(angle);
			let yPoint = x * p.sin(angle);
			p.vertex(xPoint, yPoint);
		}
		p.endShape(p.CLOSE);
	}

	function drawKamonOut(x, numPoints, outerRadius, innerRadius, rotation, fillColor) {
		p.noFill(fillColor);
		p.stroke(255);
		p.strokeWeight(1);
		p.beginShape();
		for (let i = 0; i < numPoints * 2; i++) {
			let angle = 360 / (numPoints * 2) * i + rotation * p.frameCount / 120;
			let radius = i % 2 === 0 ? outerRadius : innerRadius;
			let xPoint = x * p.cos(angle) * 1.8;
			let yPoint = x * p.sin(angle) * 1.8;
			p.vertex(xPoint, yPoint);
		}
		p.endShape(p.CLOSE);
	}
}
