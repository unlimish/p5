let tshirtDesignSketch = function (p) {
	p.setup = function () {
		p.createCanvas(400, 400);
	}

	p.draw = function () {
		p.background(25);
		let tshirtWidth = 200;
		let tshirtHeight = 300;
		let centerX = p.width / 2;
		let centerY = p.height / 2;
		let designSize = p.map(p.mouseX, 0, p.width, 10, 100);
		let designColor = p.color(p.map(p.mouseY, 0, p.height, 255, 100), 255, 255);

		drawTShirt(centerX, centerY, tshirtWidth, tshirtHeight, designSize, designColor);
	}

	function drawTShirt(x, y, width, height, designSize, designColor) {
		// Tシャツのボディ
		p.fill(255, 204, 204); // ピンク色 (パステルカラー)
		p.rect(x - width / 2, y - height / 2, width, height);

		// Tシャツの首部分
		p.fill(250); // 白色
		p.rect(x - 40, y - height / 2, 80, 30);

		// Tシャツの左袖
		p.fill(204, 255, 204); // ミント色 (パステルカラー)
		p.beginShape();
		p.vertex(x - width / 2, y - height / 2);
		p.vertex(x - width / 2 - 30, y);
		p.vertex(x - width / 2, y + height / 2);
		p.vertex(x - width / 2 + 30, y);
		p.endShape(p.CLOSE);

		// Tシャツの右袖
		p.fill(204, 204, 255); // ラベンダー色 (パステルカラー)
		p.beginShape();
		p.vertex(x + width / 2, y - height / 2);
		p.vertex(x + width / 2 + 30, y);
		p.vertex(x + width / 2, y + height / 2);
		p.vertex(x + width / 2 - 30, y);
		p.endShape(p.CLOSE);

		// デザインの追加 (例として円を追加)
		p.fill(designColor); // マウスのY座標によって色を変える
		p.ellipse(x, y, designSize, designSize); // マウスのX座標によってサイズを変える
	}
}
