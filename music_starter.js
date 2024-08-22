
// vocal, drum, bass, and other are volumes ranging from 0 to 100

let img;
let firstRun = true
let y = 100

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  colorMode(HSB, 100);
  background(25)
  textFont('Verdana'); // please use CSS safe fonts
  textSize(24);
  rectMode(CENTER)
  strokeWeight(9);
  stroke(vocal, 80, 80);
  console.log(counter);
 
var vocalMap = map(vocal, 0, 100, 5, 70);
var lengthOfRect = 300;
var rectStart = 100;
var rectEnd = rectStart + lengthOfRect;

for(var i = 1; i <= vocalMap; i ++){
  var rectStep = i*10;
  rect(rectStart, rectStep, rectEnd, rectStep);
}



}

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