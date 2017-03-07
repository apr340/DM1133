// adjective: shy
var palOne = [];	// colors for when NOT running away
var palTwo = [];	// colors for when running away
var bodyOne, pupilColorOne, mouthColorOne, bodyTwo, pupilColorTwo, mouthColorTwo;	// variables for colors
var character;	// variable for the creature class
var charSpeed = 3;	// creature speed

function setup() { 
  createCanvas(600, 600);
  background(255);
  
  // assign colors to array
  bodyOne = color('#712b75');
  pupilColorOne = color(150, 0, 0);
  mouthColorOne = color(200, 0, 0);
  
  palOne [0] = bodyOne;
  palOne [1] = pupilColorOne;
  palOne [2] = mouthColorOne;
  
  bodyTwo = color('#eda8e8');
  pupilColorTwo = color(0, 190, 220);
  mouthColorTwo = color(0, 180, 220);
  
  palTwo [0] = bodyTwo;
  palTwo [1] = pupilColorTwo;
  palTwo [2] = mouthColorTwo;
  
  character = new creature(300, 300);
} 

function draw() { 
  background(255);
  character.keepDistance();	// stay away from the cursor
  character.display();	// display blue creature
}

function creature(x_, y_){	// class for the creature
  this.xPos = x_;	// the X position
  this.yPos = y_;	// the Y position
  this.shy = 0;		// determines color palette based on whether or not creature is running away
  this.palette = palOne;	// switches between normal and shy color palettes
  
  this.keepDistance = function(){	// keep distance from cursor
    this.shy = 0;
    if(((mouseX - this.xPos) < 100) && ((mouseX - this.xPos) > 0) && ((mouseY - this.yPos) < 100) && ((mouseY - this.yPos) > (-100))){	// move creature to the left when cursor approaches from right
      var dx = this.xPos - charSpeed;
      this.xPos = dx;
      this.shy = 1;
    }
    else if(((mouseX - this.xPos) > (-100)) && ((mouseX - this.xPos) < 0) && ((mouseY - this.yPos) < 100) && ((mouseY - this.yPos) > (-100))){	// move creature to the right when cursor approaches from left
      var dx2 = this.xPos + charSpeed;
      this.xPos = dx2;
      this.shy = 1;
    }
    
    if(((mouseY - this.yPos) < 100) && ((mouseY - this.yPos) > 0) && ((mouseX - this.xPos) < 100) && ((mouseX - this.xPos) > (-100))){	// move creature up when cursor approaches from below
      var dy = this.yPos - charSpeed;
      this.yPos = dy;
      this.shy = 1;
    }
    else if(((mouseY - this.yPos) > (-100)) && ((mouseY - this.yPos) < 0) && ((mouseX - this.xPos) < 100) && ((mouseX - this.xPos) > (-100))){	// move creature down when cursor approaches from above
      var dy2 = this.yPos + charSpeed;
      this.yPos = dy2;
      this.shy = 1;
    }
    
    
    if (this.xPos < 0){	// reposition when travels off left side of screen
      this.xPos = width - 40;
    }
    if (this.xPos > width){	// reposition when travels off right side of screen
      this.xPos = 40;
    }
    if (this.yPos < 0){	// reposition when travels off top of screen
      this.yPos = height - 40;
    }
    if (this.yPos > height){	// reposition when travels off bottom of screen
      this.yPos = 40;
    }
    
  }
  
  this.display = function(){	// display the creature
    if (this.shy == 1){
      this.palette = palTwo;
    }
    else {
      this.palette = palOne;
    }
    
    strokeWeight(1);
    fill(255);
    beginShape();	// left horn
    vertex(this.xPos - 20, this.yPos - 10);
    vertex(this.xPos - 30, this.yPos - 50);
    vertex(this.xPos, this.yPos - 20);
    endShape();
    
    beginShape();	// right horn
    vertex(this.xPos + 20, this.yPos - 10);
    vertex(this.xPos + 30, this.yPos - 50);
    vertex(this.xPos, this.yPos - 20);
    endShape();
    
    fill(this.palette[0]);
    if (this.shy == 1) {	// legs when NOT running away
      rect(this.xPos - 15, this.yPos + 60, 20, 30);	// left leg
      rect(this.xPos +15, this.yPos + 60, 20, 30);	// right leg
    }
    
    var lMovUp = 1;	
    var rMovUp = 0;
    var lMovDown = 0;	
    var rMovDown = 0;
    rect(this.xPos - 15, this.yPos + 60 - lMovUp - lMovDown, 20, 30);	// left leg
    rect(this.xPos + 15, this.yPos + 60 - rMovUp - rMovDown, 20, 30);	// right leg
    
    if (this.shy == 0){	// arms when NOT running away
    	beginShape();	// left arm
    	vertex(this.xPos - 25, this.yPos + 15);
    	vertex(this.xPos - 55, this.yPos - 20);
    	vertex(this.xPos - 45, this.yPos - 30);
    	vertex(this.xPos - 15, this.yPos + 5);
    	endShape(CLOSE);
    
    	beginShape();	// right arm
    	vertex(this.xPos + 25, this.yPos + 15);
    	vertex(this.xPos + 55, this.yPos - 20);
    	vertex(this.xPos + 45, this.yPos - 30);
    	vertex(this.xPos + 15, this.yPos + 5);
    	endShape(CLOSE);
    }
    
    fill(this.palette[0]);	// purple; body and head color
    rectMode(CENTER);
    rect(this.xPos, this.yPos + 25, 50, 50);	// create body
    ellipse(this.xPos, this.yPos, 50, 50);	// create head
    
    fill(255);
    ellipse(this.xPos, this.yPos - 5, 30, 20);	// create eye
    fill(this.palette[1]);
    ellipse(this.xPos, this.yPos - 5, 15, 15);	// create pupil
    
    if (this.shy == 0) {	// eyebrow when NOT running away
      fill(0);
      beginShape();	// brow
      vertex(this.xPos - 15, this.yPos - 22);
      vertex(this.xPos, this.yPos - 17);
      vertex(this.xPos + 15, this.yPos - 22);
      vertex(this.xPos + 15, this.yPos - 17);
      vertex(this.xPos, this.yPos - 12);
      vertex(this.xPos - 15, this.yPos - 17);
      endShape();
    }
    
    if (this.shy == 1) {	// eyebrow when running away
      fill(0);
      beginShape();	// brow
      vertex(this.xPos - 15, this.yPos - 12);
      vertex(this.xPos, this.yPos - 17);
      vertex(this.xPos + 15, this.yPos - 12);
      vertex(this.xPos + 15, this.yPos - 17);
      vertex(this.xPos, this.yPos - 22);
      vertex(this.xPos - 15, this.yPos - 17);
      endShape();
    }
    
    fill(this.palette[2]);
    if (this.shy == 0) {	// mouth when NOT running away
      beginShape();	// create mouth
      vertex(this.xPos - 20, this.yPos + 5);
      vertex(this.xPos, this.yPos + 10);
      vertex(this.xPos + 20, this.yPos + 5);
      vertex(this.xPos + 15, this.yPos + 12);
      vertex(this.xPos, this.yPos + 20);
      vertex(this.xPos - 15, this.yPos + 12);
      endShape(CLOSE);
    }
    
    if (this.shy == 1) {	// mouth when running away
      beginShape();	// create mouth
      vertex(this.xPos - 20, this.yPos + 20);
      vertex(this.xPos, this.yPos + 12);
      vertex(this.xPos + 20, this.yPos + 20);
      vertex(this.xPos + 15, this.yPos + 10);
      vertex(this.xPos, this.yPos + 5);
      vertex(this.xPos - 15, this.yPos + 10);
      endShape(CLOSE);
    }
    
    if (this.shy == 1) {	// arms when running away
      fill(this.palette[0]);
      beginShape();	// left arm
      vertex(this.xPos - 25, this.yPos + 20);
      vertex(this.xPos, this.yPos + 60);
      vertex(this.xPos, this.yPos + 40);
      vertex(this.xPos - 25, this.yPos);
      endShape(CLOSE);
    
      beginShape();	// right arm
      vertex(this.xPos + 25, this.yPos + 20);
      vertex(this.xPos, this.yPos + 60);
      vertex(this.xPos, this.yPos + 40);
      vertex(this.xPos + 25, this.yPos);
      endShape(CLOSE);
    }
  }
}