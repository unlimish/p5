let mriImageSketch = function (p) {
  let rows, cols;
  let pixelSize = 4;
  let noiseScale = 0.05;

  p.setup = function () {
    p.createCanvas(400, 400);
    rows = p.height / pixelSize;
    cols = p.width / pixelSize;
  }

  p.draw = function () {
    p.background(255);

    // Generate MRI-like image using random noise
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        let noiseValue = p.noise(x * noiseScale * p.frameCount, y * noiseScale * p.frameCount);
        let brightnessValue = p.map(noiseValue, 0, 1, 0, 255);
        p.fill(brightnessValue);
        p.rect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
      }
    }
  }
}
