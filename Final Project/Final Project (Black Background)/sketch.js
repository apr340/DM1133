var character;	// holds the player character
var unknown;	// holds the unknown figure
var unknownTwo;	// holds the unknown figure
var unknownArr = [];
var unknownArrTwo = [];
var balls = [];	// array to hold all the balls on the screen
var ballsTwo = [];	// holds the balls for the menu
var hit;		// boolean to see whether a ball has hit a wall
var charHit;	// boolean to see whether character has hit a wall
var mic;		// variable to hold mic input
var micLevel;	// holds the volume level of the mic input
var crntLevel = 0;	// keeps track of the current level
var doors = [];	// array to hold the doors
var TVstatus = 0;	// determines whether TV is on or off
var doorKnockingTimer = -20;	// determines when the door knocking starts

var erieSound;	// ambience which plays the entire time
var footsteps;	// footsteps that play when figure approaches TV
var whiteNoise;	// sound that plays when TV is on
var bangingSound;	// sound that plays right at the start in the other side of the house
var doorKnocking;	// knocking sound that plays at the bathroom door
var woodSound;	// sound that plays in the living room when you enter the bathroom

var eventNoise = 0;	// plays white noise when = 1
var eventOne = 1;	// controls the banging sounds that play at the start 
var eventTwo = 0;	// creates the unknown figure when = 1
var eventThree = 0;	// starts the door knocking noises in the bathroom when = 1
var eventFour = 0;	// controls the wood breaking noise
var eventFive = 0;	// changes the wall in the living room to one with a hole in it
var eventSix = 0;	// creates an unknown figure that approaches you 

function preload() {
	// load in all the sounds
	erieSound = loadSound("assets/EerieAmbience.mp3");
	footsteps = loadSound("assets/Footsteps.mp3");
	whiteNoise = loadSound("assets/WhiteNoise.mp3");
	bangingSound = loadSound("assets/Banging.mp3");
	doorKnocking = loadSound("assets/LoudKnocking.mp3");
	woodSound = loadSound("assets/WoodExplosion.mp3");
}

function setup(){
	createCanvas(1480,700);

	character = new Character(200, 100);	// sets up the player character

	// set and play the ambience from the start
	erieSound.setVolume(0.1);
	erieSound.play();

	// adjust the volumes for each bit of audio
	footsteps.setVolume(0.05);
	whiteNoise.setVolume(0.001);
	bangingSound.setVolume(0.05);
	doorKnocking.setVolume(0.05);
	woodSound.setVolume(0.05);

	mic = new p5.AudioIn()	// passes the mic input to the variable
	mic.start();	// starts collecting input from the mic

	background(0);

	doors.push(new Door(30, 300, 120, 10));	// bedroom door
	doors.push(new Door(340, 570, 120, 10));	// living room door
	doors.push(new Door(940, 570, 120, 10));	// bathroom door
	doors.push(new Door(920, 20, 10, 100));	// bathroom door
}

function draw(){
	// gives the balls a trail
	background('rgba(0,0,0, 0.5)');

	// TESTING ONLY. MAKES EVERYTHING VISIBLE
	// background(225);

	micLevel = mic.getLevel();	// gets a number between 0 and 1 based on mic level

	// run through all the balls, show them on the screen, update their position
	for (var i = 0; i < balls.length; i++) {
		balls[i].update();
		balls[i].show();
	}


	// all menus and levels are loaded in here
	if (crntLevel === 0) {
		menu();
	} else if (crntLevel === 1) {
		levelOne();	// load all the walls and collisions for level one
		character.show();	// show the player character on the screen
		character.update();	// change the position of the character based off input


		eventOne++;
		// creates the balls for the banging noise at the start
		if (eventOne % 66 === 0 && eventOne < 260) {
			for (var i = 0; i < 40; i++) {
				balls.push(new Ball(1100, 200));
			}
		}
		// plays the audio for the banging noise
		if (eventOne === 30) {
			bangingSound.play(0.6, 1, 1, 0, 3.5);
		}

		// creates the first unknown figure
		if (eventTwo === 1) {
			unknown = new UnknownOne();
			unknownArr.push(unknown);
		}

		// creates the second unknown figure
		if (eventSix === 1) {
			unknownTwo = new UnknownTwo();
			unknownArrTwo.push(unknownTwo);
		}

		// controls the movement for the first unknown figure as well as play a sound for its footsteps
		if (unknownArr.length > 0) {
			if (unknownArr[0].active === 1) {
				unknownArr[0].show();		// shows the figure on the screen
				unknownArr[0].update();	// updates the figures location
				if (unknownArr[0].timer % 60 === 0 && unknownArr[0].timer <= 310) {
					for (var i = 0; i < 50; i++) {
						balls.push(new Ball(unknownArr[0].position.x, unknownArr[0].position.y));
					}
				}
				if (unknownArr[0].timer % 600 === 10 && unknownArr[0].timer <= 310) {
					footsteps.play(0, 1, 1, 0, 5);
				}
				if (unknownArr[0].timer % 440 === 0) {
					unknownArr[0].active = 0;
				}
			}
			if (unknownArr[0].active === 0) {
				unknownArr.splice(0,1);
			}
		}

		// controls the second unknown figure
		if (unknownArrTwo.length > 0) {
			if (unknownArrTwo[0].active === 1) {
				unknownArrTwo[0].show();		// shows the figure on the screen
				unknownArrTwo[0].update();	// updates the figures location
				// if (unknownArrTwo[0].timer % 60 === 0 && unknownArrTwo[0].timer <= 310) {
				// 	for (var i = 0; i < 50; i++) {
				// 		balls.push(new Ball(unknownArrTwo[0].position.x, unknownArrTwo[0].position.y));
				// 	}
				// }
				// if (unknownArrTwo[0].timer % 600 === 10 && unknownArrTwo[0].timer <= 310) {
				// 	footsteps.play(0, 1, 1, 0, 5);
				// }
				// if (unknownArrTwo[0].timer % 440 === 0) {
				// 	unknownArrTwo[0].active = 0;
				// }
			}
			if (unknownArrTwo[0].timer === 560) {
				crntLevel = 2;
			}
			if (unknownArrTwo[0].active === 0) {
				unknownArrTwo.splice(0,1);
			}
		}
	} else if (crntLevel === 2) {	// jumps to the end screen after the second figure has stopped moving
		endMenu();
	}


	// end of menus and levels


	// get rid of the balls in the ball array after they've changed from white to black
	for (var i = 0; i < balls.length; i++) {
		if (balls[i].returnEnd()) {
			balls.splice(i, 1);
		}
	}

	for (var i = 0; i < ballsTwo.length; i++) {
		if (ballsTwo[i].returnEnd()) {
			ballsTwo.splice(i, 1);
		}
	}

	// uses the mic to create the balls
	// console.log(micLevel);
	if (micLevel >= 0.2){
		for (var i = 0; i < 5; i++) {
			balls.push(new Ball(character.position.x, character.position.y));
		}
	}
}

function keyPressed(){
	// pressing 'h' key will throw a new set of balls onto the balls array and have them scatter in multiple directions
	// meant for testing. mic will be used in the future. not sure if this should stay or whether to take it out in the final product
	if (keyCode === 72){
		for (var i = 0; i < 40; i++) {
			balls.push(new Ball(character.position.x, character.position.y));
		}
	}

	// lets you open the doors in the house by using the space bar
	if (keyCode === 32) {
		for (var i = 0; i < doors.length - 1; i++) {
			if (doors[i].unlockCheck()) {
				doors[i].active = 0;
			}
		}

		// activate the TV once you open the door to the living room
		if (doors[1].unlockCheck()) {
			TVstatus = 1;
		}

		if (doors[3].unlockVCheck()) {
			doors[3].active = 0;
		}
	}
}