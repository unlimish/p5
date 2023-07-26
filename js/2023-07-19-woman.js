let femaleMinisterSketch = function (p) {
  let faceColor, eyeColor, mouthColor, cheekColor;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    faceColor = p.color(p.random(255), p.random(255), p.random(255));
    eyeColor = p.color(0);
    mouthColor = p.color(0);
    cheekColor = p.color(p.random(255), p.random(100, 200), p.random(100, 200));
  }

  p.draw = function () {
    p.background(20);
    drawFemaleMinister(p.width / 2, p.height / 2, p.height / 1.6);
  }

  function drawFemaleMinister(x, y, faceSize) {
    p.stroke(120);
    // 顔の描画
    faceColor = p.color((p.frameCount * 2) % 255, (p.frameCount * 3) % 255, (p.frameCount * 4) % 255);
    p.fill(faceColor);
    p.ellipse(x, y, faceSize, faceSize);

    // 目の描画
    var eyeSize = faceSize * 0.2;
    eyeColor = p.color((p.frameCount * 3) % 255, (p.frameCount * 4) % 255, (p.frameCount * 2) % 255);
    p.fill(eyeColor);
    p.ellipse(x - faceSize * 0.2, y - faceSize * 0.1, eyeSize, eyeSize);
    p.ellipse(x + faceSize * 0.2, y - faceSize * 0.1, eyeSize, eyeSize);

    // 口の描画
    var mouthWidth = faceSize * 0.3;
    var mouthHeight = faceSize * 0.1;
    mouthColor = p.color((p.frameCount * 4) % 255, (p.frameCount * 2) % 255, (p.frameCount * 3) % 255);
    p.rectMode(p.CENTER);
    p.fill(mouthColor);
    p.rect(x, y + faceSize * 0.2, mouthWidth, mouthHeight);

    // 頬の描画
    var cheekSize = faceSize * 0.15;
    cheekColor = p.color((p.frameCount * 3) % 255, (p.frameCount * 4) % 100 + 100, (p.frameCount * 2) % 100 + 100);
    p.fill(cheekColor);
    p.ellipse(x - faceSize * 0.3, y, cheekSize, cheekSize);
    p.ellipse(x + faceSize * 0.3, y, cheekSize, cheekSize);
  }
}
