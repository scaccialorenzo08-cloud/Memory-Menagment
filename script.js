let topHeight=120;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(220);

  //bianco sopra
  fill(255);
  noStroke();
  rect(0,0,width,topHeight);
  
  //sotto 3 colonne
  let colWidth=width/3;
  let bottomHeight=height-topHeight;
  //colonna1
  fill("lightgray");
  rect(0,topHeight,colWidth,bottomHeight);
  stroke("black");
  strokeWeight(4);
  
  //colonna 2
  fill("lightgray");
  rect(colWidth,topHeight,colWidth,bottomHeight);
  stroke("black");
  strokeWeight(4);
  //colonna3
  fill("lightgray");
  rect(colWidth*2,topHeight,colWidth,bottomHeight);
  stroke("black");
  strokeWeight(4);
}
