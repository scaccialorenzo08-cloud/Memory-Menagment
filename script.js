let sunHeight;
let horizon = 220;

// nuvole
let clouds = [];

function setup() {
  createCanvas(400, 400);

  // creazione nuvole casuali:chatgpt con spiegazione
  for (let i = 0; i < 4; i++) {
    clouds.push({
      x: random(width),
      y: random(50, 180),
      speed: random(0.3, 1)
    });
  }
}

function draw() {
  sunHeight = mouseY;

  // cielo
  if (sunHeight < horizon) {
    background('lightblue'); // giorno
  } else {
    background(0); // notte
  }

  // per movimento nuvole spiegazione chatgpt
  for (let c of clouds) {
    drawCloud(c.x, c.y);

    c.x += c.speed;

    // quando esce dallo schermo, rientra da sinistra
    if (c.x > width + 60) {
      c.x = -60;
    }
  }

  // sole
  fill('yellow');
  circle(200, sunHeight, 130);

  //terra
  fill('green');
  rect(0, horizon, 400, horizon);
}

// funzione disegno nuvola
function drawCloud(x, y) {
  noStroke();

  // colore nuvole
  if (sunHeight < horizon) {
    fill(255); // bianche giorno
  } else {
    fill(150); // grigie notte
  }

  ellipse(x, y, 50, 30);
  ellipse(x + 20, y - 10, 40, 30);
  ellipse(x + 40, y, 50, 30);
}


