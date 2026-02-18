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
  fill(255,0,0);
  rect(0,topHeight,colWidth,bottomHeight);
  
  //colonna 2
  fill(0,255,0);
  rect(colWidth,topHeight,colWidth,bottomHeight);
  
  //colonna3
  fill(0,0,255);
  rect(colWidth*2,topHeight,colWidth,bottomHeight);
}
