let noiseGradientSketch = function (p) {
  let time = 0;
  let zoff = 0;

  p.setup = function () {
    p.createCanvas(p.windowHeight, p.windowWidth);
    p.pixelDensity(1);
  }

  p.draw = function () {
    p.background(255);
    p.loadPixels();

    let yoff = 0;

    for (let y = 0; y < p.height; y++) {
      let xoff = 0;
      for (let x = 0; x < p.width; x++) {
        let distance = p.dist(p.width / 2.9, p.height / 2, x * 0.7, y);
        let maxDist = p.width / 4;
        let r = 0;
        if (distance < maxDist) {
          let t = p.map(distance, 0, maxDist, 0, 1);
          let angle = p.noise(xoff, yoff, zoff) * p.TWO_PI * 2 * p.noise(p.width, p.height, x * y);
          r = p.map(t, 0, 1, 0, p.cos(angle));
        }
        let index = (x + y * p.width) * 4;
        p.pixels[index] = r * 255;
        p.pixels[index + 1] = r * 255;
        p.pixels[index + 2] = r * 255;
        p.pixels[index + 3] = 255;
        xoff += 0.02;
      }
      yoff += 0.02;
    }

    p.updatePixels();

    zoff += 0.1;
    time += 0.1;
  }
}

// Create an instance of the sketch
