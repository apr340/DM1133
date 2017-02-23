size(800, 650);
background(40);

noStroke();
fill(255, 0, 0, 5);
ellipse(400, 670, 650, 450);
ellipse(400, 400, 300, 450);

fill(255, 0, 0, 15);
ellipse(400, 670, 700, 500);
ellipse(400, 400, 350, 500);

stroke(0);
fill(120);

beginShape();
vertex(280, 470);
vertex(220, 470);
vertex(190, 510);
vertex(210, 455);
vertex(280, 450);
endShape(CLOSE);

beginShape();
vertex(520, 470);
vertex(580, 470);
vertex(610, 510);
vertex(590, 455);
vertex(520, 450);
endShape(CLOSE);

beginShape();
vertex(250, 430);
vertex(190, 450);
vertex(130, 520);
vertex(160, 420);
vertex(220, 400);
endShape(CLOSE);

beginShape();
vertex(550, 430);
vertex(610, 450);
vertex(670, 520);
vertex(640, 420);
vertex(580, 400);
endShape(CLOSE);

beginShape();
vertex(400, 600);
vertex(180, 380);
vertex(20, 500);
vertex(150, 280);
vertex(220, 300);
endShape(CLOSE);

beginShape();
vertex(400, 600);
vertex(620, 380);
vertex(780, 500);
vertex(650, 280);
vertex(580, 300);
endShape(CLOSE);


fill(90, 55, 51);  // body, head
ellipse(400, 670, 600, 400);
fill(103, 68, 64);
ellipse(400, 400, 250, 400);

fill(40);
beginShape();
vertex(220, 660);
vertex(230, 640);
vertex(240, 620);
vertex(260, 610);
vertex(280, 620);
vertex(290, 640);
vertex(300, 660);
endShape(CLOSE);

beginShape();
vertex(580, 660);
vertex(570, 640);
vertex(560, 620);
vertex(540, 610);
vertex(520, 620);
vertex(510, 640);
vertex(500, 660);
endShape(CLOSE);

/*fill(40);
ellipse(260, 690, 125, 200);
ellipse(540, 690, 125, 200);

fill(255, 0, 0, 20);
ellipse(260, 690, 125, 200);
ellipse(540, 690, 125, 200);*/

fill(193, 66, 66);  // mouth
beginShape();
curveVertex(200, 700);
curveVertex(300, 380);
curveVertex(400, 350);
curveVertex(490, 380);
curveVertex(450, 550);
curveVertex(340, 560);
curveVertex(300, 600);
endShape(CLOSE);

fill(184, 227, 124);    //eyes
ellipse(340, 245, 12, 23);
ellipse(345, 305, 15, 24);
ellipse(346, 275, 25, 12);
ellipse(372, 240, 30, 14);
ellipse(400, 260, 15, 30);
ellipse(375, 310, 27, 14);
ellipse(375, 275, 19, 29);
ellipse(430, 240, 19, 16);
ellipse(405, 230, 14, 16);
ellipse(426, 280, 14, 24);
ellipse(455, 270, 22, 14);
ellipse(448, 297, 17, 23);
ellipse(402, 290, 29, 15);
ellipse(418, 312, 19, 24);

fill(230);
beginShape(TRIANGLES);  // upper teeth
vertex(482, 328);
vertex(490, 490);
vertex(496, 325);

vertex(298, 320);
vertex(305, 500);
vertex(320, 337);

vertex(318, 337);
vertex(329, 520);
vertex(336, 342);

vertex(350, 342);
vertex(359, 570);
vertex(370, 345);

vertex(333, 343);
vertex(342, 540);
vertex(353, 339);

vertex(390, 345);
vertex(400, 510);
vertex(409, 342);

vertex(368, 344);
vertex(378, 570);
vertex(391, 343);

vertex(425, 342);
vertex(434, 550);
vertex(443, 335);

vertex(407, 340);
vertex(416, 490);
vertex(427, 338);

vertex(467, 335);
vertex(480, 500);
vertex(489, 320);

vertex(443, 336);
vertex(452, 560);
vertex(463, 330);

vertex(460, 330);
vertex(466, 470);
vertex(473, 332);
endShape();

beginShape(TRIANGLES);  // lower teeth
vertex(315, 515);  // second
vertex(321, 398);
vertex(332, 530);

vertex(304, 490);  // first
vertex(315, 360);
vertex(320, 527);

vertex(337, 560);  // fourth
vertex(344, 450);
vertex(352, 574);

vertex(320, 527);  // third
vertex(330, 410);
vertex(345, 576);

vertex(362, 574);  // sixth
vertex(368, 424);
vertex(380, 573);

vertex(345, 576);  // fifth
vertex(355, 400);
vertex(369, 577);

vertex(383, 579);  // eight
vertex(390, 435);
vertex(402, 580);

vertex(369, 577);  // seventh
vertex(380, 460);
vertex(392, 582);

vertex(400, 575);  // tenth
vertex(409, 450);
vertex(421, 570);

vertex(392, 582);  // ninth
vertex(400, 420);
vertex(412, 578);

vertex(420, 576);  // twelfth
vertex(427, 440);
vertex(438, 566);

vertex(412, 578);  // eleventh
vertex(421, 390);
vertex(429, 580);

vertex(438, 560);  // fourteenth
vertex(446, 430);
vertex(453, 555);

vertex(429, 578);  // thirteenth
vertex(435, 378);
vertex(446, 560);

vertex(456, 550);  // sixteenth
vertex(462, 440);
vertex(472, 530);

vertex(446, 560);  // fifteenth
vertex(454, 407);
vertex(463, 552);

vertex(472, 533);  // eighteenth
vertex(480, 380);
vertex(489, 480);

vertex(463, 552);  // seventeenth
vertex(471, 423);
vertex(481, 515);

vertex(481, 515);  // ninteenth
vertex(490, 394);
vertex(497, 465);
endShape();