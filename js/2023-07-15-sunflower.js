let himawariSketch = function (p) {
	const CANVAS_SIZE = p.windowHeight;

	p.setup = function () {
		p.frameRate(120);
		p.createCanvas(CANVAS_SIZE, CANVAS_SIZE);
		p.background(255, 255, 204);
		p.fill(129, 128, 0);
	}

	p.draw = function () {
		p.background(255, 255, 204 - p.mouseX, p.mouseY * 0.07);
		p.translate(CANVAS_SIZE / 2, CANVAS_SIZE / 2);
		p.noStroke();

		for (let i = 0; i < (p.mouseX + p.mouseY) / 10; i++) {
			p.fill(129, 128, 0);
			p.rotate(p.PI / p.frameCount * 10);
			p.rotate(p.cos(p.mouseX * 0.001));
			p.ellipse(p.mouseX * 0.5, p.mouseY * 0.5, 20, 200);
		}

		p.fill(51, 51, 0);
		p.ellipse(0, 0, 100 * ((p.mouseX + p.mouseY) * 0.003));
		p.rotate(p.frameCount * 2);
	}
}
