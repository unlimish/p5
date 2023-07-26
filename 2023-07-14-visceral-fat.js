let rows, cols;
let pixelSize = 4;
let noiseScale = 0.05;

function setup() {
  createCanvas(400, 400);
  rows = height / pixelSize;
  cols = width / pixelSize;
}

function draw() {
  background(255);

  // Generate MRI-like image using random noise
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let noiseValue = noise(x * noiseScale * frameCount, y * noiseScale * frameCount);
      let brightnessValue = map(noiseValue, 0, 1, 0, 255);
      fill(brightnessValue);
      rect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
    }
  }
}
