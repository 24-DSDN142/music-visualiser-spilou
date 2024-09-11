// vocal, drum, bass, and other are volumes ranging from 0 to 100

let img1;
let img2;
let img3;
let cloud1;
let cloud2;
let cloud3;
let cloud4;
let firstRun = true;
var cloud1Move = 1;
var cloud2Move = 1;
var cloud3Move = 1;
var cloud4Move = 1;

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  if(firstRun) {
    img1 = loadImage('drawing1.png');
    img2 = loadImage('drawing2.png');
    img3 = loadImage('drawing3.png');
    cloud1 = loadImage('cloud1.png');
    cloud2 = loadImage('cloud2.png');
    cloud3 = loadImage('cloud3.png');
    cloud4 = loadImage('cloud4.png');
    firstRun = false
  }

  colorMode(RGB);
  background(146, 141, 180)
  rectMode(CORNER)
  strokeWeight(0);
  console.log(counter);

//clouds
image(cloud3, -350+cloud3Move, 785, 325, 225);
cloud3Move = cloud3Move + 0.4;
if(cloud3Move > 1400){
  cloud3Move = 0;
}

image(cloud4, -1000+cloud4Move, 675, 300, 200);
cloud4Move = cloud4Move + 0.5;
if(cloud4Move > 2000){
  cloud4Move = 0;
}

image(cloud1, -250+cloud1Move, 750, 200, 150);
cloud1Move = cloud1Move + 0.65;
if(cloud1Move > 1300){
  cloud1Move = 0;
}

image(cloud2, -800+cloud2Move, 625, 200, 150);
cloud2Move = cloud2Move + 0.6;
if(cloud2Move > 1800){
  cloud2Move = 0;
}

//bassMap 
var bassMap = map(bass, 0, 100, 700, 900); 

fill(232, 224, 238);

rect(0, 0, 155, bassMap/1.09);
rect(155, 0, 190, bassMap/1.19);
rect(345, 0, 170, bassMap/0.99);
rect(515, 0, 160, bassMap/1.11);
rect(675, 0, 175, bassMap/1.29);
rect(850, 0, 155, bassMap/1.21);

fill(135, 112, 159);

rect(0, 0, 55, bassMap/1.09);
rect(155, 0, 90, bassMap/1.19);
rect(345, 0, 70, bassMap/0.99);
rect(515, 0, 60, bassMap/1.11);
rect(675, 0, 75, bassMap/1.29);
rect(850, 0, 55, bassMap/1.21);

rect(0, 0, 150, bassMap/1.1);
rect(155, 0, 185, bassMap/1.2);
rect(345, 0, 165, bassMap);
rect(515, 0, 155, bassMap/1.12);
rect(675, 0, 170, bassMap/1.3);
rect(850, 0, 150, bassMap/1.22);

fill(129,92,132);

rect(0, 0, 50, bassMap/1.09);
rect(155, 0, 50, bassMap/1.19);
rect(345, 0, 50, bassMap/0.99);
rect(515, 0, 50, bassMap/1.11);
rect(675, 0, 50, bassMap/1.29);
rect(850, 0, 50, bassMap/1.21);

//drumMap
var drumMap = map(drum, 0, 100, 500, 750);

fill(232, 224, 238);

rect(0, 0, 195, drumMap/0.99);
rect(195, 0, 205, drumMap/1.19);
rect(400, 0, 220, drumMap/1.09);
rect(620, 0, 215, drumMap/1.29);
rect(835, 0, 175, drumMap/1.11);

fill(94, 66, 110);

rect(0, 0, 95, drumMap/0.99);
rect(195, 0, 105, drumMap/1.19);
rect(400, 0, 120, drumMap/1.09);
rect(620, 0, 115, drumMap/1.29);
rect(835, 0, 75, drumMap/1.11);

rect(0, 0, 190, drumMap);
rect(195, 0, 200, drumMap/1.2);
rect(400, 0, 215, drumMap/1.1);
rect(620, 0, 210, drumMap/1.3);
rect(835, 0, 170, drumMap/1.12);

fill(87,61,88);

rect(0, 0, 75, drumMap/0.99);
rect(195, 0, 75, drumMap/1.19);
rect(400, 0, 75, drumMap/1.09);
rect(620, 0, 75, drumMap/1.29);
rect(835, 0, 75, drumMap/1.11);

//vocalMap
var vocalMap = map(vocal, 0, 100, 200, 450);

fill(232, 224, 238);

rect(0, 0, 245, vocalMap/1.185);
rect(245, 0, 260, vocalMap/1.09);
rect(505, 0, 235, vocalMap/0.99);
rect(740, 0, 265, vocalMap/1.285);

fill(84, 51, 77);

rect(0, 0, 145, vocalMap/1.185);
rect(245, 0, 160, vocalMap/1.09);
rect(505, 0, 135, vocalMap/0.99);
rect(740, 0, 165, vocalMap/1.285);

rect(0, 0, 240, vocalMap/1.2);
rect(245, 0, 255, vocalMap/1.1);
rect(505, 0, 230, vocalMap);
rect(740, 0, 260, vocalMap/1.3);

fill(60,40,68);

rect(0, 0, 100, vocalMap/1.185);
rect(245, 0, 100, vocalMap/1.09);
rect(505, 0, 100, vocalMap/0.99);
rect(740, 0, 100, vocalMap/1.285);

//gwen!!
image(img1, 0, 700);

fill(232, 224, 238);
rect(850, 931, 150, 7);

fill(66,24,54);
rect(0, 961, 250, 39);

//music note 1
var otherMap1 = map(other, 0, 100, 60, 40);
var spinAmount1 = map(other, 0, 100, -45, 45);

push()

translate(825, 775)
rotate(spinAmount1);
image(img2, 0, 0, otherMap1, otherMap1);

pop()

//music note 2
var otherMap2 = map(other, 0, 100, 30, 55);
var spinAmount2 = map(other, 0, 100, 20, -45);

push()

translate(840, 730)
rotate(spinAmount2);
image(img3, 0, 0, otherMap2, otherMap2);

pop()

}
