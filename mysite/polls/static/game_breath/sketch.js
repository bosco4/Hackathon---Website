var canvas_size = 1000;

function setup() {
	createCanvas(canvas_size, canvas_size);
	angleMode(DEGREES);

	// Controlled
	size = 650;
	pause_second = 5;

	size_ratio = 100;
	change_size_by = 1;

	speed_ratio = 100;
	change_speed_by = 2;


	// Passive
	pause_frame_counter = 60 * pause_second;
	bvel = 0;
	x = width / 2;
	y = height / 2;
}

function draw() {
	background(220);
	noStroke();
	if (keyIsPressed && keyCode == 32) { // spacebar
		pause_frame_counter += 1;
	} else {
		bvel += 0.8 * speed_ratio / 100;
	}
	if (keyIsPressed) {
		if (keyCode == 37 && speed_ratio > 6) { // left
			speed_ratio -= change_speed_by;
		}
		if (keyCode == 39) { // right
			speed_ratio += change_speed_by;
		}
		if (keyCode == 38) { // up
			size_ratio += change_size_by;
		}
		if (keyCode == 40) { // down
			size_ratio -= change_size_by;
		}
	}

	for (let i = 0; i < 6; i++) {

		current_size = size - (300 - 30 * i) * cos(bvel + 10 * i) + 10 * cos(1 * pause_frame_counter) - 90 * i;
		current_size *= size_ratio / 100;
		fill(250 - 10 * i, 200 - 10 * i, 150 - 10 * i, 150);
		ellipse(x, y, current_size);
	}
}

function keyPressed() {
	print(keyCode)
	if (keyCode == 82) {
		setup();
	}
}