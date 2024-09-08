// vocal, drum, bass, and other are volumes ranging from 0 to 100

let img1;
let img2;
let img3;
let firstRun = true

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  if(firstRun) {
    img1 = loadImage('drawing1.png');
    img2 = loadImage('drawing2.png');
    img3 = loadImage('drawing3.png');
    firstRun = false
  }

  colorMode(RGB);
  background(146, 141, 180)
  // textFont('Verdana'); // please use CSS safe fonts
  // textSize(24);
  rectMode(CORNER)
  strokeWeight(0);

  console.log(counter);

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

//gwen!!
image(img1, 0, 700);

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


// let img;
// let firstRun = true
// let y = 100


// let mouthSize = map(vocal, 0, 100, 60, 250);
// rect(500, mouthSize*3, mouthSize, mouthSize);
// rect(500, mouthSize, 400, mouthSize);

  //  let bar_spacing = height / 10;
  //  let bar_height = width / 12;
  //  let bar_pos_x = width / 2;
 

  //  // vocal bar is red
  //  fill(200, 0, 0);
  //  rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
  //  fill(0);
  //  text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
  //  // drum bar is green
  //  fill(0, 200, 0);
  //  rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
  //  fill(0);
  //  text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
  //  // bass bar is blue
  //  fill(50, 50, 240);
  //  rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
  //  fill(0);
  //  text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
  //  // other bar is white
  //  fill(200, 200, 200);
  //  rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
  //  fill(0);
  //  text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
  //  fill(255, 255, 0);
 
  //  // display "words"
  //  textAlign(CENTER);
  //  textSize(vocal);
  //  text(words, width/2, height/3);


  // if(counter > 300 && counter < 500){
//   fill(0);
// }else{
//   fill(0, 255, 255);
// }

// for(let i = 1; i < 6; i ++){
//   ellipse(400, y * i, 100)
// }


// for(var i = 1; i <= vocalMap; i ++){
//   var lineStep = i*10;
//   line(lineStart, lineStep, lineEnd, lineStep);
// }


// fill(vocal, 80, 80);
// for(var i = 1; i <= vocalMap; i ++){
//   var rectStep = i*10;
//   rect(rectStart, rectStep, rectEnd, rectStep);
// }

// vocalMap = map(vocal, 0, 100, 25, 80); 
// var lengthOfRect2 = 100;
// var rectStart2 = 500;
// var rectEnd2 = rectStart2 + lengthOfRect2;

// for(var i = 1; i <= vocalMap; i ++){
//   var rectStep2 = i*10;
//   rect(rectStart2, rectStep2, rectEnd2, rectStep2);
// }