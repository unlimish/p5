// ひまわりの日

const CANVAS_SIZE = 400;

function setup(){

	frameRate(120);
	createCanvas(CANVAS_SIZE, CANVAS_SIZE);
	background(255,255,204)
	createCanvas(CANVAS_SIZE,CANVAS_SIZE);
	fill(129,128,0)


}


function draw(){
	background(255,255,204-mouseX,mouseY*0.07)
	translate(CANVAS_SIZE/2, CANVAS_SIZE/2);
	noStroke();

	for (let i = 0; i < (mouseX+mouseY)/10; i ++) {
		fill(129,128,0)

		rotate(PI/frameCount*10);
		rotate(cos(mouseX*0.001))
		ellipse(mouseX*0.5, mouseY*0.5, 20, 200);
	}
	fill(51, 51, 0)
	ellipse(0, 0, 100*((mouseX+mouseY)*0.003))
	rotate(frameCount*2)
}
