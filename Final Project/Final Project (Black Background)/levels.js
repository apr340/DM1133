// This file is meant to hold all the different setups for each level in individual functions
// They'll be called by the sketch file when it's their turn to be displayed

function menu() {
    // section for the title text
    fill(0);
    textSize(200);
    textStyle(BOLD);
    text("ECHO", 440, 200);

    // creates the balls that will reveal the title
    for (var i = 0; i < 5; i++) {
        balls.push(new Ball(random(300, 1180), random(50, 220)));
    }

    // three sets of ball spawn locations which will add a bit more to the menu
    // for (var i = 0; i < 1; i++) {
    //     balls.push(new Ball(random(50, 1300), random(400, 600)));
    // }

    // for (var i = 0; i < 1; i++) {
    //     balls.push(new Ball(random(1050, 1250), random(500, 600)));
    // }


    // creates a slight border around the play button so that the player knows that something is there
    noFill();
    stroke('rgba(50,50,50, 0.2)');
    strokeWeight(10);
    rect(520, 340, 410, 118);

    // controls the balls that bounce around when the button is highlighted
    for (var i = 0; i < ballsTwo.length; i++) {
        ballsTwo[i].update();
        ballsTwo[i].show();
    }

    // when the mouse is over the play button, creates a bunch of balls that will bounce around inside the button
    if (collideRectCircle(520, 340, 410, 118, mouseX, mouseY, 10)) {
        for (var i = 0; i < 1; i++) {
            ballsTwo.push(new Ball(random(560, 900), random(380, 420)));
        }
        // if mouse is pressed over button, go onto first level and get rid of all the balls on the screen
        if (mouseIsPressed) {
            crntLevel = 1;
            balls.splice(0, 1000);
        }
    } 

    // the walls of the play button which will contain all the balls within it
    for (var i = 0; i < ballsTwo.length; i++) {
        if (collideRectCircle(930, 350, 20, 100, ballsTwo[i].position.x, ballsTwo[i].position.y, 10)) { // right wall
            ballsTwo[i].velocity.x *= -1;
        }
        if (collideRectCircle(510, 350, 20, 100, ballsTwo[i].position.x, ballsTwo[i].position.y, 10)) { // left wall
            ballsTwo[i].velocity.x *= -1;
        }
        if (collideRectCircle(510, 330, 440, 20, ballsTwo[i].position.x, ballsTwo[i].position.y, 10)) { // top wall
            ballsTwo[i].velocity.y *= -1;
        }
        if (collideRectCircle(510, 450, 440, 20, ballsTwo[i].position.x, ballsTwo[i].position.y, 10)) { // bottom wall
            ballsTwo[i].velocity.y *= -1;
        }
    }

    if (collideRectCircle(530, 350, 400, 100, mouseX, mouseY, 10)) {
        for (var i = 0; i < balls.length; i++) {
            if (collideRectCircle(930, 350, 10, 100, balls[i].position.x, balls[i].position.y, 10)) { // right wall
                balls[i].velocity.x *= -1;
            }
            if (collideRectCircle(510, 350, 10, 100, balls[i].position.x, balls[i].position.y, 10)) { // left wall
                balls[i].velocity.x *= -1;
            }
            if (collideRectCircle(510, 330, 440, 10, balls[i].position.x, balls[i].position.y, 10)) { // top wall
                balls[i].velocity.y *= -1;
            }
            if (collideRectCircle(510, 450, 440, 10, balls[i].position.x, balls[i].position.y, 10)) { // bottom wall
                balls[i].velocity.y *= -1;
            }
        }
    }

    // physics for the outer edges of the screen
    for (var i = 0; i < balls.length; i++) {
        if (collideRectCircle(1470, 0, 10, 700, balls[i].position.x, balls[i].position.y, 10)) { // right wall
            balls[i].velocity.x *= -1;
        }
        if (collideRectCircle(0, 0, 10, 700, balls[i].position.x, balls[i].position.y, 10)) { // left wall
            balls[i].velocity.x *= -1;
        }
        if (collideRectCircle(0, 0, 1480, 10, balls[i].position.x, balls[i].position.y, 10)) { // top wall
            balls[i].velocity.y *= -1;
        }
        if (collideRectCircle(0, 690, 1480, 10, balls[i].position.x, balls[i].position.y, 10)) { // bottom wall
            balls[i].velocity.y *= -1;
        }
    }

    // has the text for the play button pop up only when the mouse is in its space
    if (collideRectCircle(520, 340, 410, 118, mouseX, mouseY, 10)) {
        fill(0);
        noStroke();
        textSize(100);
        text("PLAY", 610, 435);
    }
}

function endMenu(){
    background(0);

    // creates the balls that will reveal the title
    for (var i = 0; i < 10; i++) {
        balls.push(new Ball(random(300, 1180), random(250, 450)));
    }

    for (var i = 0; i < balls.length; i++) {
        balls[i].update();
        balls[i].show();
    }

    // text for the title
    fill(0);
    stroke(0);
    strokeWeight(0);
    textSize(200);
    textStyle(BOLD);
    text("ECHO", 440, 400);
}

function levelOne() {
    // creates all the walls for level one as well as detects all collisions between objects and walls
    fill(0); // all walls are black
    noStroke();

    // all the walls for the levels
    // PERIMETER WALLS
    rect(1450, 0, 30, 700); // right wall
    rect(0, 0, 30, 700); // left wall
    rect(0, 0, 1480, 30); // top wall
    rect(0, 670, 1480, 30); // bottom wall

    // INTERIOR WALLS
    rect(150, 290, 30, 300);    // ONE
    rect(180, 290, 200, 30);    // TWO
    rect(380, 10, 30, 310);    // THREE
    rect(180, 560, 170, 30);    // FOUR
    rect(450, 560, 500, 30);    // FIVE
    rect(1050, 560, 170, 30);    // SIX
    rect(840, 320, 30, 240);    // SEVEN
    rect(500, 290, 970, 30);    // EIGHT
    rect(900, 110, 30, 190);    // NINE
    rect(1190, 10, 30, 550);    // TEN

    if (eventFive === 0) {
        rect(560, 300, 30, 260);    // ELEVEN
    }

    if (eventFive === 1) {
        rect(560, 300, 30, 160);    // ELEVEN
        rect(560, 530, 30, 40);
    }


    // FURNITURE
    makeBed(40, 40);    // creates a bed for the bedroom
    makeTV(185, 380);   // creates a TV for the living room
    makeCouch(420, 380);    // creates a couch for the living room
    // bigTable(560, 375);
    makeTable(550, 110);    // creates table for the kitchen
    kitchenCounters(605, 250);  // creates the counters, fridge, stove, and trash can in the kitchen
    washingMachine(1000, 245);  // creates washing machines and counter in the room by the kitchen
    bathroom(870, 320);
    // centerRoom(780, 380);

    // shows all the doors on the screen
    for (var i = 0; i < doors.length; i++) {
        doors[i].show();
    }

    // collisions for the balls
    for (var i = 0; i < balls.length; i++) {
        // PERIMETER
        if (collideRectCircle(1450, 0, 30, 700, balls[i].position.x, balls[i].position.y, 10)) { // right wall
            balls[i].velocity.x *= -1;
        }
        if (collideRectCircle(0, 0, 30, 700, balls[i].position.x, balls[i].position.y, 10)) { // left wall
            balls[i].velocity.x *= -1;
        }
        if (collideRectCircle(0, 0, 1480, 30, balls[i].position.x, balls[i].position.y, 10)) { // top wall
            balls[i].velocity.y *= -1;
        }
        if (collideRectCircle(0, 670, 1480, 30, balls[i].position.x, balls[i].position.y, 10)) { // bottom wall
            balls[i].velocity.y *= -1;
        }

        // INTERIOR

        ballPhys(150, 290, 30, 300, balls[i]);  // ONE
        ballPhys(180, 290, 200, 30, balls[i]);  // TWO
        ballPhys(380, 10, 30, 310, balls[i]);   // THREE
        ballPhys(180, 560, 170, 30, balls[i]);   // FOUR
        ballPhys(450, 560, 500, 30, balls[i]);   // FIVE
        ballPhys(1050, 560, 170, 30, balls[i]);   // SIX
        ballPhys(840, 320, 30, 240, balls[i]);   // SEVEN
        ballPhys(500, 290, 970, 30, balls[i]);   // EIGHT
        ballPhys(900, 110, 30, 190, balls[i]);   // NINE
        ballPhys(1190, 10, 30, 550, balls[i]);   // TEN

        if (eventFive === 0) {
            ballPhys(560, 300, 30, 260, balls[i]);  // ELEVEN
        }

        if (eventFive === 1) {
            ballPhys(560, 300, 30, 160, balls[i]);  // ELEVEN
            ballPhys(560, 530, 30, 40, balls[i]);
        }


        // collisions for balls-doors
        if (doors[0].active === 1) {
            if (collideRectCircle(30, 300, 120, 10, balls[i].position.x, balls[i].position.y, 10)) {
                balls[i].velocity.y *= -1;
            }
        }

        if (doors[1].active === 1) {
            if (collideRectCircle(340, 570, 120, 10, balls[i].position.x, balls[i].position.y, 10)) {
                balls[i].velocity.y *= -1;
            }
        }

        if (doors[2].active === 1) {
            if (collideRectCircle(940, 570, 120, 10, balls[i].position.x, balls[i].position.y, 10)) {
                balls[i].velocity.y *= -1;
            }
        }

        if (doors[3].active === 1) {
            if (collideRectCircle(920, 20, 10, 100, balls[i].position.x, balls[i].position.y, 10)) {
                balls[i].velocity.x *= -1;
            }
        }

        // END OF BALL COLLISION
    }

    // collisions for the character
    // PERIMETER	
    if (collideRectCircle(1450, 0, 30, 700, character.position.x, character.position.y, 10)) {	// right wall
        character.position.x -= 2.5;
    }
    if (collideRectCircle(0, 0, 30, 700, character.position.x, character.position.y, 10)) { 	// left wall
        character.position.x += 2.5;
    }
    if (collideRectCircle(0, 0, 1480, 30, character.position.x, character.position.y, 10)) {	// top wall
        character.position.y += 2.5;
    }
    if (collideRectCircle(0, 670, 1480, 30, character.position.x, character.position.y, 10)) {	// bottom wall
        character.position.y -= 2.5;
    }

    // INTERIOR

    charPhys(150, 290, 30, 300);    // ONE
    charPhys(180, 290, 200, 30);    // TWO
    charPhys(380, 10, 30, 310);     // THREE
    charPhys(180, 560, 170, 30);     // FOUR
    charPhys(450, 560, 500, 30);     // FIVE
    charPhys(1050, 560, 170, 30);     // SIX
    charPhys(840, 300, 30, 280);     // SEVEN
    charPhys(500, 290, 970, 30);     // EIGHT
    charPhys(900, 110, 30, 190);     // NINE
    charPhys(1190, 10, 30, 570);     // TEN

    if (eventFive === 0) {
        charPhys(560, 300, 30, 280);    // ELEVEN
    }

    if (eventFive === 1) {
        charPhys(560, 300, 30, 160);    // ELEVEN
        charPhys(560, 530, 30, 40);
    }


    // collisions for character-doors
    if (doors[0].active === 1) {
        if (collideRectCircle(30, 300, 120, 10, character.position.x, character.position.y, 10)) {  // bottom wall
            character.position.y -= 2.5;
        }
    }

    if (doors[1].active === 1) {
        if (collideRectCircle(340, 570, 120, 10, character.position.x, character.position.y, 10)) {  // bottom wall
            character.position.y += 2.5;
        }
    }

    if (doors[2].active === 1) {
        if (collideRectCircle(940, 570, 120, 10, character.position.x, character.position.y, 10)) {  // bottom wall
            character.position.y += 2.5;
        }
    }

    if (doors[3].active === 1) {
        if (collideRectCircle(920, 20, 10, 100, character.position.x, character.position.y, 10)) {  // bottom wall
            character.position.x -= 2.5;
        }
    }


    // END OF CHARACTER COLLISION


    // EVENTS
    enterWash();

    if (eventThree === 1) {
        doorBanging();
    }

    triggerEventFour();
    console.log(eventFour);
    if (eventFour === 1) {
        woodSound.play(0, 1, 1, 0, 2);
    }
    if (eventFour === 20) {
        eventFourFunc();
    }

    triggerEventFive();
    triggerEventSix();

    if (collideRectCircle(30, 400, 150, 100, character.position.x, character.position.y, 10) && eventNoise === 0) {
        whiteNoise.setVolume(0.004);
        whiteNoise.play();
        eventNoise = 1;
    }
}


function ballPhys(xPos, yPos, width, height, balls){
    // handles the ball-wall collisions
    // reverses either the x or y velocity of the ball as it approaches the top, bottom, or sides of the wall
    if (collideRectCircle(xPos, yPos, width, 10, balls.position.x, balls.position.y, 10)) { // TOP
        balls.velocity.y *= -1;
    }
    if (collideRectCircle(xPos, yPos + height - 10, width, 10, balls.position.x, balls.position.y, 10)) { // BOTTOM
        balls.velocity.y *= -1;
    }
    if (collideRectCircle(xPos, yPos + 10, width, height - 20, balls.position.x, balls.position.y, 10)) { // SIDE
        balls.velocity.x *= -1;
    }
}

function charPhys(xPos, yPos, width, height){
    // handles the character-wall collisions
    // prevents character from going through wall by pushing it back when it approaches a wall's side
    if (collideRectCircle(xPos, yPos, width, 10, character.position.x, character.position.y, 10)) { // TOP
        character.position.y -= 2.5;
    }
    if (collideRectCircle(xPos, yPos + height - 10, width, 10, character.position.x, character.position.y, 10)) { // BOTTOM
        character.position.y += 2.5;
    }
    if (collideRectCircle(xPos, yPos + 10, 10, height - 20, character.position.x, character.position.y, 10)) { // LEFT SIDE
        character.position.x -= 2.5;
    }
    if (collideRectCircle(xPos + width - 10, yPos + 10, 10, height - 20, character.position.x, character.position.y, 10)) { // RIGHT SIDE
        character.position.x += 2.5;
    }
}


// FUNCTIONS FOR FURNITURE
// each piece of furniture will prevent the player from entering them but will let balls pass freely
function makeBed(xPos, yPos) {
    //  bed frame
    noFill();
    stroke(0);
    strokeWeight(15);
    rect(xPos, yPos, 100, 150);

    // sheets
    noStroke();
    fill(0);
    rect(xPos, yPos + 45, 100, 105);

    // pillows
    stroke(0);
    noFill();
    strokeWeight(2);
    rect(xPos + 12, yPos + 12, 35, 28);
    rect(xPos + 54, yPos + 12, 35, 28);

    // collisions
    charPhys(xPos, yPos, 110, 160);
}

function makeTV(xPos, yPos) {
    // TV stand
    strokeWeight(10);
    rect(xPos, yPos, 50, 120);

    // TV
    noStroke();
    fill(0);
    rect(xPos + 20, yPos + 20, 20, 80);

    // collisions
    charPhys(xPos, yPos - 6, 56, 132);

    if (TVstatus === 1) {
        for (var i = 0; i < 1; i++) {
            balls.push(new Ball(xPos + 30, yPos + 55));
        }
        if (whiteNoise.isPlaying()) {
            whiteNoise.setVolume(0.01);
        } else {
            whiteNoise.play();
        }
    }
    if (TVstatus === 2) {
        whiteNoise.stop();
    }
}

function makeCouch(xPos, yPos) {
    // main piece
    stroke(0);
    strokeWeight(10);
    noFill();
    rect(xPos, yPos, 60, 120);
    strokeWeight(5);
    rect(xPos, yPos + 60, 40, 1);

    // armrests
    fill(0);
    rect(xPos, yPos, 45, 20);
    rect(xPos, yPos + 100, 45, 20);

    // backrest
    rect(xPos + 40, yPos, 17, 120);

    // collisions
    charPhys(xPos - 5, yPos - 6, 70, 132);
}

function makeTable(xPos, yPos) {
    // table
    noFill();
    strokeWeight(10);
    rect(xPos - 60, yPos - 40, 120, 80);

    // chairs
    strokeWeight(5);
    rect(xPos - 110, yPos - 20, 40, 40);
    rect(xPos + 70, yPos - 20, 40, 40);

    // collisions
    charPhys(xPos - 65, yPos - 45, 130, 90);    // table
    charPhys(xPos - 113, yPos - 25, 50, 50);    // left chair
    charPhys(xPos + 65, yPos - 25, 50, 50);     // right chair
}

function kitchenCounters(xPos, yPos) {
    // counter
    rect(xPos + 45, yPos, 80, 40);
    rect(xPos + 175, yPos, 80, 40);

    rect(xPos + 255 , yPos - 100, 40, 140);

    // stove
    rect(xPos + 125, yPos - 5, 50, 45);

    fill(0);
    ellipse(xPos + 140, yPos + 10, 10, 10);
    ellipse(xPos + 160, yPos + 10, 10, 10);
    ellipse(xPos + 140, yPos + 30, 10, 10);
    ellipse(xPos + 160, yPos + 30, 10, 10);

    // trash can
    noFill();
    strokeWeight(3);
    rect(xPos - 28, yPos + 5, 20, 30);

    // sink
    ellipse(xPos + 274, yPos - 70, 24, 30);
    rect(xPos + 276, yPos - 72, 12, 2);
    rect(xPos + 286, yPos - 66, 2, 2);
    rect(xPos + 286, yPos - 78, 2, 2);

    // fridge
    fill(0);
    strokeWeight(5);
    rect(xPos, yPos + 6, 40, 34);
    rect(xPos, yPos - 2, 40, 2);

    // collisions
    charPhys(xPos - 30, yPos + 1, 30, 50);  // trash can
    charPhys(xPos, yPos - 6, 270, 60);      // bottom section
    charPhys(xPos + 252, yPos - 104, 40, 140);  // right section
}

function washingMachine(xPos, yPos){
    // washing machine
    rect(xPos, yPos, 45, 45);
    rect(xPos + 60  , yPos, 45, 45)

    // counters
    noFill();
    rect(xPos + 150, yPos - 160, 40, 100);

    // collisions
    charPhys(xPos - 4, yPos - 4, 114, 70);  // washing machine
    charPhys(xPos + 147, yPos - 165, 45, 110);  // counter on right
}

function bathroom(xPos, yPos) {
    // shower
    rect(xPos, yPos, 70, 70);
    fill(0);
    ellipse(xPos + 14, yPos + 36, 8, 8);
    rect(xPos, yPos + 35, 7, 2);

    // sink
    noFill();
    rect(xPos + 220, yPos + 200, 100, 40);
    strokeWeight(4);
    ellipse(xPos + 270, yPos + 220, 30, 24);
    rect(xPos + 269, yPos + 222, 2, 12);

    // toilet
    rect(xPos + 275, yPos + 50, 45, 30);
    rect(xPos + 305, yPos + 50, 15, 30);
    ellipse(xPos + 290, yPos + 65, 20, 20);
    rect(xPos + 315, yPos + 30, 4, 8);

    // collisions
    charPhys(xPos, yPos - 10, 75, 85);  // shower
    charPhys(xPos + 270, yPos + 45, 55, 40);    // toliet
    charPhys(xPos + 215, yPos + 195, 110, 70);  // sink
}

// function centerRoom(xPos, yPos){
//     // corpse
//     fill(0);
//     noStroke();
// }