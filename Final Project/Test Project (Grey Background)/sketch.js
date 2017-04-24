var character;	// holds the player character
var balls = [];	// array to hold all the balls on the screen
var ball;
var hit;

function setup(){
	createCanvas(1480,700);
	character = new Character(500, 300);	// sets up the player character
	//ball = new Ball();
	background(225);
}

function draw(){
	// gives the balls a trail
	// background('rgba(0,0,0, 0.08)');

	// TESTING ONLY. MAKES EVERYTHING VISIBLE
	background(225);

	// run through all the balls, show them on the screen, update their position
	for (var i = 0; i < balls.length; i++) {
		balls[i].update();
		balls[i].show();
	}

	character.show();	// show the player character on the screen
	character.update();	// change the position of the character based off input

	fill(0);
	rect(600, 200, 30, 400);
	for (var i = 0; i < balls.length; i++) {
		hit = collideRectCircle(600, 200, 30, 400, balls[i].position.x, balls[i].position.y, 10);
		if (hit) {
			balls[i].velocity.x *= -1;
		}
	}

	// get rid of the balls in the ball array after they've changed from white to black
	for (var i = 0; i < balls.length; i++) {
		if (balls[i].returnEnd()) {
			balls.splice(i, 1);
		}
	}

}

function keyPressed(){
	// pressing 'h' key will throw a new set of balls onto the balls array and have them scatter in multiple directions
	// meant for testing. mic will be used in the future. not sure if this should stay or whether to take it out in the final product
	if (keyCode === 72){
		for (var i = 0; i < 20; i++) {
			balls.push(new Ball(character.position.x, character.position.y));
		}
	}
}