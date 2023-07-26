// 女性大臣の日

let faceColor, eyeColor, mouthColor, cheekColor;

function setup() {
  createCanvas(400, 400);
  faceColor = color(random(255), random(255), random(255));
  eyeColor = color(0);
  mouthColor = color(0);
  cheekColor = color(random(255), random(100, 200), random(100, 200));
}

function draw() {
  background(20);
  drawFemaleMinister(width / 2, height / 2, height/1.6);
}

function drawFemaleMinister(x, y, faceSize) {
	stroke(120)
  // 顔の描画
  faceColor = color((frameCount * 2) % 255, (frameCount * 3) % 255, (frameCount * 4) % 255);
  fill(faceColor);
  ellipse(x, y, faceSize, faceSize);

  // 目の描画
  var eyeSize = faceSize * 0.2;
  eyeColor = color((frameCount * 3) % 255, (frameCount * 4) % 255, (frameCount * 2) % 255);
  fill(eyeColor);
  ellipse(x - faceSize * 0.2, y - faceSize * 0.1, eyeSize, eyeSize);
  ellipse(x + faceSize * 0.2, y - faceSize * 0.1, eyeSize, eyeSize);

  // 口の描画
  var mouthWidth = faceSize * 0.3;
  var mouthHeight = faceSize * 0.1;
  mouthColor = color((frameCount * 4) % 255, (frameCount * 2) % 255, (frameCount * 3) % 255);
  rectMode(CENTER);
  fill(mouthColor);
  rect(x, y + faceSize * 0.2, mouthWidth, mouthHeight);

  // 頬の描画
  var cheekSize = faceSize * 0.15;
  cheekColor = color((frameCount * 3) % 255, (frameCount * 4) % 100 + 100, (frameCount * 2) % 100 + 100);
  fill(cheekColor);
  ellipse(x - faceSize * 0.3, y, cheekSize, cheekSize);
  ellipse(x + faceSize * 0.3, y, cheekSize, cheekSize);
}
