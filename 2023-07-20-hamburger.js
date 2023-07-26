function setup() {
	createCanvas(400, 400);
  }

  function draw() {
	background(25);
	let tshirtWidth = 200;
	let tshirtHeight = 300;
	let centerX = width / 2;
	let centerY = height / 2;
	let designSize = map(mouseX, 0, width, 10, 100);
	let designColor = color(map(mouseY, 0, height, 255, 100), 255, 255);

	drawTShirt(centerX, centerY, tshirtWidth, tshirtHeight, designSize, designColor);
  }

  function drawTShirt(x, y, width, height, designSize, designColor) {
	// Tシャツのボディ
	fill(255, 204, 204); // ピンク色 (パステルカラー)
	rect(x - width / 2, y - height / 2, width, height);

	// Tシャツの首部分
	fill(250); // 白色
	rect(x - 40, y - height / 2, 80, 30);

	// Tシャツの左袖
	fill(204, 255, 204); // ミント色 (パステルカラー)
	beginShape();
	vertex(x - width / 2, y - height / 2);
	vertex(x - width / 2 - 30, y);
	vertex(x - width / 2, y + height / 2);
	vertex(x - width / 2 + 30, y);
	endShape(CLOSE);

	// Tシャツの右袖
	fill(204, 204, 255); // ラベンダー色 (パステルカラー)
	beginShape();
	vertex(x + width / 2, y - height / 2);
	vertex(x + width / 2 + 30, y);
	vertex(x + width / 2, y + height / 2);
	vertex(x + width / 2 - 30, y);
	endShape(CLOSE);

	// デザインの追加 (例として円を追加)
	fill(designColor); // マウスのY座標によって色を変える
	ellipse(x, y, designSize, designSize); // マウスのX座標によってサイズを変える
  }
