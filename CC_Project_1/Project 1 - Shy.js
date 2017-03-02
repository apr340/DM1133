// adjective: shy
var clrs = [];	// color array
var darkPurple_, green_, peach_, teal_, yellow_, purple_;	// different colors to put in array
var character;	// variable for the creature class

function setup() { 
  createCanvas(600, 600);
  background(255);
  
  // assign colors to array
  darkPurple_ = color('#5d5aba');
  green_ = color('#b5db89');
  peach_ = color('#e67864');
  teal_ = color('#8ee9eb');
  yellow_ = color('#f5ea56');
  purple_ = color('#e335e3');
  
  clrs [0] = darkPurple_;
  clrs [1] = green_;
  clrs [2] = peach_;
  clrs [3] = teal_;
  clrs [4] = yellow_;
  clrs [5] = purple_;
  
  character = new creature(300, 300);
} 

function draw() { 
  background(255);
  character.keepDistance();
  character.display(clrs[0]);	// display blue creature
  print("xPos: ");
  print(character.xPos);
  print("mouseX");
  print(mouseX);
}

function creature(x_, y_){	// class for the creature
  this.xPos = x_;	// the X position
  this.yPos = y_;	// the Y position
  
  this.keepDistance = function(){	// keep distance from cursor
    if(((mouseX - this.xPos) < 50) && ((mouseX - this.xPos) > 0) && ((mouseY - this.yPos) < 50) && ((mouseY - this.yPos) > (-50))){	// move creature to the left when cursor approaches from right
      	var dx = this.xPos - 4;
      	this.xPos = dx;
    }
    else if(((mouseX - this.xPos) > (-50)) && ((mouseX - this.xPos) < 0) && ((mouseY - this.yPos) < 50) && ((mouseY - this.yPos) > (-50))){	// move creature to the right when cursor approaches from left
        var dx2 = this.xPos + 4;
        this.xPos = dx2;
    }
    
    if(((mouseY - this.yPos) < 50) && ((mouseY - this.yPos) > 0) && ((mouseX - this.xPos) < 50) && ((mouseX - this.xPos) > (-50))){	// move creature up when cursor approaches from below
      	var dy = this.yPos - 4;
      	this.yPos = dy;
    }
    else if(((mouseY - this.yPos) > (-50)) && ((mouseY - this.yPos) < 0) && ((mouseX - this.xPos) < 50) && ((mouseX - this.xPos) > (-50))){	// move creature down when cursor approaches from above
        var dy2 = this.yPos + 4;
        this.yPos = dy2;
    }
    
    
    if (this.xPos < 0){	// reposition when travels off left side of screen
      this.xPos = 560;
    }
    if (this.xPos > 600){	// reposition when travels off right side of screen
      this.xPos = 40;
    }
    
  }
  
  this.display = function(clr_2){	// display the creature
    strokeWeight(2);
    stroke(0);
    fill(clr_2);
    ellipse(this.xPos, this.yPos, 20, 20);
  }
}