let smogDaySketch = function (p) {
	p.setup = function () {
		p.createCanvas(400, 400);
		drawSky();
		p.frameRate(12);
	}

	p.draw = function () {
		// Add fractal noise to the sky
		p.background("#296299");
		// drawSky();

		// Smog's orange and purple hues
		let orangeHue = p.random(0, 300);
		let purpleHue = p.random(250, 280);

		// Draw buildings using noise
		for (let x = 0; x < p.width; x += 40) {
			for (let y = p.height / 3; y < p.height; y += 400) {
				drawBuilding(x, p.random(10, p.height), p.random(50, 150), orangeHue);
			}
		}

		// Draw vehicles using noise
		for (let x = 20; x < p.width; x += 80) {
			for (let y = p.height / 2 + 20; y < p.height; y += 80) {
				drawVehicle(x, y, p.random(30, 70), purpleHue);
			}
		}
	}

	// Draw the sky with fractal noise
	function drawSky() {
		for (let y = 0; y < p.height; y++) {
			for (let x = 0; x < p.width; x++) {
				let noiseVal = p.noise(x * 0.01 + p.frameCount * 0.05, y * 0.01, p.frameCount * 0.1); // Update noise with frameCount
				let skyColor = p.map(noiseVal, 0, 1, 30, 100);
				p.stroke(skyColor);
				p.point(x, y);
			}
		}
	}

	// Draw buildings
	function drawBuilding(x, y, size, hue) {
		p.stroke(255);
		p.noFill(hue, 100, 70, 150);
		p.rect(x, y, size, size * 100);
	}

	// Draw vehicles
	function drawVehicle(x, y, size, hue) {
		p.noStroke();
		p.fill(hue, 100, 70, 150);
		p.ellipse(x, p.random(0, p.height), size * 2, size);
	}
}
