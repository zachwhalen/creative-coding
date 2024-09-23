function setup() {
  // create a canvas
  createCanvas(400, 400);
  //https://emojipedia.org/microsoft/windows-11-23h2-june-2024-update/face-without-mouth <---- this is the emoji I attempted to print out
  // disable animation
  noLoop();
}

function draw() {
  background(220);

  rectMode(CENTER);
  //Headtop
  stroke('gold');
  fill('gold');
  circle(200,200,250);
  //Eyes.1
  stroke('white');
  fill('white');
  circle (155,155,60);
  //Eyes.2
  stroke('white');
  fill('white');
  circle(245,155,60);
  //Pupils.1
  stroke('black');
  fill('black');
  circle(240,155,20);
  //Pupils.2
  stroke('black');
  fill('black');
  circle(160,155,20);
  
}