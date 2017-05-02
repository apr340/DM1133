function Door(xPos, yPos, width, height) {
	this.position = createVector(xPos, yPos);	// holds the position of the door
	this.active = 1;	// sees whether door is open or closed. 1 = close. 0 = open

	this.show = function() {
		// only show door when closed
		if (this.active === 1) {
			fill(0);
			noStroke();
			rect(xPos, yPos, width, height);
		}
	}

	// check to see if the character is standing by the door
	this.unlockCheck = function() {
		return collideRectCircle(this.position.x, this.position.y - 20, 120, 50, character.position.x, character.position.y, 10)
	}

	// meant for the one vertical door in the kitchen
	this.unlockVCheck = function() {
		return collideRectCircle(this.position.x - 20, this.position.y, 20, 100, character.position.x, character.position.y, 10)
	}
}