void setup() {
  size(700, 700);
  background(255);
}

void draw() {
}

void keyTyped() {
  stroke(0);
  pushMatrix();

  if (key == 'a') {
    //translate(50, 50);
    translate(mouseX-50,mouseY-50);
    for (int x = 0; x <= 100; x += 50) {
      for (int y = 0; y <= 100; y += 50) {
        fill(random(255), 0, random(255));
        ellipse(x, y, 50, 50);
      }
    }
  }

  if (key == 's') {
    int place = 0;
    //translate(250, 50);
    translate(mouseX-105, mouseY-50);
    for (int x = 0; x <= 210; x += 20) {
      if (place == 0) {
        fill(0, 0, random(150, 255));
        ellipse(x, 0, 30, 50);
        place = 1;
      } else if (place == 1) {
        fill(0, random(150, 255), 0);
        ellipse(x, 50, 30, 50);
        place = 2;
      } else {
        fill(random(150, 255), 0, 0);
        ellipse(x, 100, 30, 50);
        place = 0;
      }
    }
  }

  if (key == 'd') {
    int value;
    //translate(560, 100);
    translate(mouseX, mouseY);
    for (int x = 150; x >= 0; x -= 10) {
      value = int(random(3));
      if (value == 0) {
        fill(0, random(150, 255), 0);
        ellipse(0, 0, x, x);
      } else if (value == 1) {
        fill(random(150, 255), 0, 0);
        ellipse(0, 0, x, x);
      } else {
        fill(0, 0, random(150, 255));
        ellipse(0, 0, x, x);
      }
    }
  }

  if (key == 'z') {
    //translate(0, 150);
    translate(mouseX-50, mouseY-50);
    for (int x = 50; x <= 200; x += 30) {
      for (int y = 50; y <= 200; y += 30) {
        fill(0, x, y);
        ellipse(x, y, x/2, y/2);
      }
    }
  }
  
  if (key == 'x'){
    //translate(300, 200);
    translate(mouseX-90, mouseY-90);
    for (int x = 0; x <= 180; x += 30){
      fill(random(255));
      ellipse(x, 90, 20, 180);
    }
    for (int y = 0; y <= 180; y += 30){
      fill(random(255));
      ellipse(90, y, 180, 20);
    }
  }
  
  if (key == 'c'){
    //translate(300, 500);
    translate(mouseX, mouseY);
    fill(0);
    ellipse(0, 0, 200, 200);
    for(int x = 0; x <= 15; x++){
      noStroke();
      fill(255);
      ellipse(random(-60, 60), random(-60, 60), 30, 30);
    }
  }

  popMatrix();
}