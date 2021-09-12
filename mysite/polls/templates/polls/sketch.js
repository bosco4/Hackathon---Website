function setup() {
	createCanvas(400, 400);
	angleMode(DEGREES);
	x = width / 2;
	y = height / 2;
	size = 250;
	bvel = 0;

	pause_breath = false;
	pause_frame_counter = 0;
	pvel = 0;
}

function draw() {
	background(220);
	noStroke();
	if (pause_breath) {
		pause_frame_counter += 1;
		pvel += 1;
		if (pause_frame_counter == 300) {
			pause_breath = false;
			pause_frame_counter = 0;
		}
	} else {
		bvel += 0.8;
	}

	for (let i = 0; i < 6; i++) {

		current_size = size - (100 - 10 * i) * cos(bvel + 10 * i) + 2 * cos(5 * pvel);
		fill(250 - 10 * i, 200 - 10 * i, 150 - 10 * i, 150);
		ellipse(x, y, current_size - 30 * i);
	}
}

function keyPressed() {
	print(keyCode)
	if (keyCode == 32) {
		pause_breath = true;
	}
}


