let reloadLimit = 0;

function dayClick(d) {
	const body = document.getElementById('bdy');
	const day1 = document.getElementById('day1');
	let canvas = document.getElementById('defaultCanvas0');

	if (d === 1) {
		canvas = new p5(cassisSketch);
	}
	if (d === 2) {
		canvas = new p5(mriImageSketch);
	}
	if (d === 3) {
		new p5(himawariSketch);
	}
	if (d === 4) {
		new p5(kokuDaySketch);
	}
	if (d === 5) {
		new p5(tokyoDaySketch);
	}
	if (d === 6) {
		new p5(smogDaySketch);
	}
	if (d === 7) {
		new p5(femaleMinisterSketch);
	}
	if (d === 8) {
		new p5(tshirtDesignSketch);
	}
	reloadLimit++;
	if (reloadLimit > 6) {
		location.reload();
		reloadLimit = 0;
	}
}
