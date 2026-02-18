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
  
  // colonne
noStroke();
fill("lightgray");

rect(0, topHeight, colWidth, bottomHeight);
rect(colWidth, topHeight, colWidth, bottomHeight);
rect(colWidth * 2, topHeight, colWidth, bottomHeight);

// linee bordi
stroke("black");
strokeWeight(2);

// bordo sinistro
line(0, topHeight, 0, height);

// separatori verticali
line(colWidth, topHeight, colWidth, height);
line(colWidth * 2, topHeight, colWidth * 2, height);

// bordo destro
line(width - 1, topHeight, width - 1, height);

// linea sopra le colonne
line(0, topHeight, width, topHeight);
}

