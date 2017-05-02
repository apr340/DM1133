function Character(xPos, yPos){
	this.position = createVector(xPos, yPos);
	//this.velocity = createVector();
	//this.acceleration = createVector();
	//this.topSpeed = 2;

	this.show = function(){	// creates a ball to represent the character
		fill(0);
		strokeWeight(0);	
		ellipse(this.position.x, this.position.y, 20, 20);
	}

	this.update = function(){

		if (keyIsDown(87)) {	// move up when 'w' is pressed
			this.position.y -= 2.5;
		}
		if (keyIsDown(65)) {	// move left when 'a' is pressed
			this.position.x -= 2.5;
		}
		if (keyIsDown(83)) {	// move down when 's' is pressed
			this.position.y += 2.5;
		}
		if (keyIsDown(68)) {	// move right when 'd' is pressed
			this.position.x += 2.5;
		}
	}
}