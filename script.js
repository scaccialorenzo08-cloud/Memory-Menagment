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
  
  //colonna1/2/3
  stroke("black");
  strokeWeight(2);
  fill("lightgray");

  // 3 colonne
  rect(0, topHeight, colWidth, bottomHeight);
  rect(colWidth, topHeight, colWidth, bottomHeight);
  rect(colWidth * 2, topHeight, colWidth, bottomHeight);
}
  

}
