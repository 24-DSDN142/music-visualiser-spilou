// vocal, drum, bass, and other are volumes ranging from 0 to 100

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  colorMode(RGB);
  background(105, 74, 150)
  textFont('Verdana'); // please use CSS safe fonts
  textSize(24);
  rectMode(CORNER)
  strokeWeight(0);
  
  console.log(counter);
 
fill(48, 39, 115);
var vocalMap = map(vocal, 0, 100, 400, 1000); 
rect(0, 0, 150, vocalMap/1.1);
rect(155, 0, 185, vocalMap/1.2);
rect(345, 0, 165, vocalMap);
rect(515, 0, 155, vocalMap/1.12);
rect(675, 0, 170, vocalMap/1.3);
rect(850, 0, 150, vocalMap/1.22);

fill(82, 74, 143);
var otherMap = map(other, 0, 100, 300, 800);
rect(0, 0, 190, otherMap);
rect(195, 0, 200, otherMap/1.2);
rect(400, 0, 215, otherMap/1.1);
rect(620, 0, 210, otherMap/1.3);
rect(835, 0, 170, otherMap/1.12);

fill(116, 121, 171);
var bassMap = map(bass, 0, 100, 200, 600);
rect(0, 0, 240, bassMap/1.2);
rect(245, 0, 255, bassMap/1.1);
rect(505, 0, 230, bassMap);
rect(740, 0, 260, bassMap/1.3);















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