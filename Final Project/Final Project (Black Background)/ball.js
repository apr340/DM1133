function Ball(xPos, yPos){
	this.position = createVector(xPos, yPos);	// holds the current position of the ball
	this.velocity = createVector((random(-1,1) * 3.5), (random(-1,1) * 3.5));	// give the ball a random velocity in a random direction
	var crntColor = 255;	// sets the balls color to white initially
	var timer = 0;
	var end = false;

	this.show = function(){
		noStroke();
		ellipse(this.position.x, this.position.y, 10, 10);	// creates a small ball with no stroke
	}

	this.update = function(){
		this.position.add(this.velocity);	// adds the balls velocity to it's positon to have it move in a random direction continuously
		// makes the ball's color change slowly over time from white to black.
		if (frameCount % 10 == 0) {
			crntColor -= 15;
		}
		fill(crntColor);

		// run a timer for when the ball should disappear
		// it will change its 'end' value to true to let the sketch know
		timer += 1;
		if (timer === 130) {
			end = true;
		}
	}

	// return a true or false value to see whether or not the balls time has come to an end
	this.returnEnd = function(){
		return end;
	}

}