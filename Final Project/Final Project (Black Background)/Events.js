function enterWash(){
	// when you reach the washing machines, a figure will walk into the living room and turn the TV off
	if (collideRectCircle(950, 150, 180, 180, character.position.x, character.position.y, 10)) {
		eventTwo += 1;
	}
}

function doorBanging() {
	// plays banging noises in the bathroom
	// starts when you reenter the living room
	if (!(doorKnocking.isPlaying())){
		doorKnocking.play();
	}
	if (doorKnockingTimer % 20 === 0 && doorKnockingTimer < 90) {
		for (var i = 0; i < 20; i++) {
			balls.push(new Ball(990, 600));
		}
	}
	doorKnockingTimer++;
	if (doorKnockingTimer === 256) {
		doorKnockingTimer = 1;
	}

	if (collideRectCircle(600, 550, 100, 200, character.position.x, character.position.y, 10)) {
		eventThree = 2;
	}

}

function triggerEventFour() {
	// starts the wood breaking sound in the living room when you enter the bathroom
	if (collideRectCircle(800, 400, 300, 160, character.position.x, character.position.y, 10) && eventThree === 2) {
		eventFour++;
	}
}

function eventFourFunc() {
	// adds the balls that will accompany the wood breaking sound
    for (var i = 0; i < 40; i++) {
		balls.push(new Ball(540, 450));
	}
}

function triggerEventFive() {
	// changes the wall in the living room to one with a hole in it when you reach a certain point in the hallway
	if (collideRectCircle(700, 550, 100, 160, character.position.x, character.position.y, 10) && eventFour > 0) {
		eventFive = 1;
	}
}

function triggerEventSix() {
	// creates another figure in the living room and turns the TV on when you go through the hole in the living room
	if (collideRectCircle(680, 320, 150, 240, character.position.x, character.position.y, 10)) {
		eventSix++;
		TVstatus = 1;
	}
}