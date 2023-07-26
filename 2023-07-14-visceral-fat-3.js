let time = 0;
let zoff = 0;

function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
}

function draw() {
  background(255);
  loadPixels();

  let yoff = 0;

  for (let y = 0; y < height; y++) {
    let xoff = 0;
    for (let x = 0; x < width; x++) {
      let distance = dist(width / 2.9, height / 2, x * 0.7, y);
      let maxDist = width / 4;
      let r = 0;
      if (distance < maxDist) {
        let t = map(distance, 0, maxDist, 0, 1);
        let angle = noise(xoff, yoff, zoff) * TWO_PI * 2 * noise(width, height, x*y);
        r = map(t, 0, 1, 0, cos(angle));
      }
      let index = (x + y * width) * 4;
      pixels[index] = r * 255;
      pixels[index + 1] = r * 255;
      pixels[index + 2] = r * 255;
      pixels[index + 3] = 255;
      xoff += 0.02;
    }
    yoff += 0.02;
  }

  updatePixels();

  zoff += 0.01;
  time += 0.01;
}
