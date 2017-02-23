function setup() { 
  createCanvas(800, 800);
  background(255);
} 

function draw() { 
  makeMonster(50, 100, 160, 200, 200);
  makeMonster(135, 72, 190, 250, 600);
  makeMonster(82, 194, 130, 550, 400);
}

function makeMonster(r, g, b, xPos, yPos){
  makeWings(r, g, b, xPos, yPos);
  makeBody(r, g, b, xPos, yPos);
  makeEye(r, g, b, xPos, yPos);
  makeMouth(xPos, yPos);
}

function makeEye(r, g, b, xPos, yPos){
  fill(r+50, g+50, b+50);
  ellipse(xPos, yPos, 90, 120);
  fill(r+60, g, b);
  ellipse(xPos, yPos, 20, 100);
}

function makeBody(r, g, b, xPos, yPos){
	fill(r, g, b);
  ellipse(xPos, yPos+50, 250, 250);
}

function makeMouth(xPos, yPos){
  fill(0);
  beginShape();
  vertex(xPos-80, yPos+40);
  vertex(xPos-55, yPos+150);
  vertex(xPos, yPos +160);
  vertex(xPos+55, yPos+150);
  vertex(xPos+80, yPos+40);
  vertex(xPos+40, yPos+90);
  vertex(xPos, yPos+100);
  vertex(xPos-40, yPos+90);
  endShape();
}

function makeWings(r, g, b, xPos, yPos){
  fill(r-30, g-30, b-30);
  beginShape();
  vertex(xPos, yPos-50);
  vertex(xPos-150, yPos-150);
  vertex(xPos-230, yPos-120);
  vertex(xPos-270, yPos-50);
  vertex(xPos-200, yPos-60);
  vertex(xPos-150, yPos-40);
  vertex(xPos-100, yPos-50);
  vertex(xPos-50, yPos);
  endShape();
  
  beginShape();
  vertex(xPos, yPos-50);
  vertex(xPos+150, yPos-150);
  vertex(xPos+230, yPos-120);
  vertex(xPos+270, yPos-50);
  vertex(xPos+200, yPos-60);
  vertex(xPos+150, yPos-40);
  vertex(xPos+100, yPos-50);
  vertex(xPos+50, yPos);
  endShape();
}