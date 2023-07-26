// 光化学スモッグの日
function setup() {
	createCanvas(400, 400);
}

function draw() {


	// Add fractal noise to the sky
	background("#296099")
	drawSky();

	// Smog's orange and purple hues
	let orangeHue = random(0, 300);
	let purpleHue = random(250, 280);

	// Draw buildings using noise
	for (let x = 0; x < width; x += 40) {
	  for (let y = height / 3; y < height; y += 400) {
		drawBuilding(x, random(10,height), random(50, 150), orangeHue);
	  }
	}

	// Draw vehicles using noise
	for (let x = 20; x < width; x += 80) {
	  for (let y = height / 2 + 20; y < height; y += 80) {
		drawVehicle(x, y, random(30, 70), purpleHue);
	  }
	}
  }

  // Draw the sky with fractal noise
  function drawSky() {
	for (let y = 0; y < height; y++) {
	  for (let x = 0; x < width; x++) {
		let noiseVal = noise(x * 0.01 + frameCount * 0.05, y * 0.01, frameCount * 0.1); // Update noise with frameCount
		let skyColor = map(noiseVal, 0, 1, 30, 100);
		stroke(skyColor);
		point(x, y);
	  }
	}
  }

  // Draw buildings
  function drawBuilding(x, y, size, hue) {
	stroke(255);
	noFill(hue, 100, 70, 150);
	rect(x, y, size, size * 100);
  }

  // Draw vehicles
  function drawVehicle(x, y, size, hue) {
	noStroke();
	fill(hue, 100, 70, 150);
	ellipse(x, random(0,height), size * 2, size);
  }
