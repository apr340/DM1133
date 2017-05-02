function UnknownOne() {
	this.position = createVector(400, 600);	// position of the figure
	this.active = 1;	// when this = 0, removes the figure from the screen
	this.timer = 0;		// keeps track of how long to keep the figure on screen

	this.show = function() {
		fill(0);
		noStroke();
		ellipse(this.position.x, this.position.y, 30, 30);
	}

	this.update = function() {
		// update the figures position as it moves
		if (this.position.y > 440) {
			this.position.x -= .5;
			this.position.y -= .8;
		} else if (this.position.x > 250) {
			this.position.x -= 0.6;
		}
		else {
			TVstatus = 2;
			eventThree = 1;
		}
		this.timer++;	// increase the timer after each time it runs
	}
}

function UnknownTwo() {
	this.position = createVector(280, 440);	// position of figure
	this.active = 1;
	this.timer = 0;		// cuts to the end screen once this timer reaches a certain point

	this.show = function() {
		fill(0);
		noStroke();
		ellipse(this.position.x, this.position.y, 30, 30);
	}

	this.update = function() {
		// change the position of the figure as it moves toward the hole
		if (this.position.y < 530 && this.position.x < 500) {
			this.position.y += .8;
			this.position.x += 0.5;
		} else if (this.position.x < 500) {
			this.position.x += 0.6;
		} else if (this.position.x < 580) {
			this.position.x += 0.5;
			this.position.y -= 0.3;
		}
		this.timer++;
	}
}