let zoom = 1;
let offsetX = 0;
let offsetY = 0;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0);
  loadPixels();

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let a = map(x, 0, width, -2.5 / zoom + offsetX, 1 / zoom + offsetX);
      let b = map(y, 0, height, -1 / zoom + offsetY, 1 / zoom + offsetY);

      let n = 0;
      let ca = a;
      let cb = b;

      while (n < 100) {
        let aa = a * a - b * b;
        let bb = 2 * a * b;
        a = aa + ca;
        b = bb + cb;

        if (abs(a + b) > 16) {
          break;
        }

        n++;
      }

      let brightnessValue = map(n, 0, 100, 0, 255);
      let pixelIndex = (x + y * width) * 8;
      pixels[pixelIndex] = brightnessValue;
      pixels[pixelIndex + 1] = brightnessValue;
      pixels[pixelIndex + 2] = brightnessValue;
      pixels[pixelIndex + 3] = 255;
    }
  }

  updatePixels();
}

function mouseMoved() {
  let zoomFactor = 1 + map(frameCount, 0, width, 0, frameCount);
  zoom = constrain(zoomFactor, 0.1, 4);
  offsetX = map(mouseX, 0, width, -1, 1);
  offsetY = map(mouseY, 0, height, -1, 1);
}
