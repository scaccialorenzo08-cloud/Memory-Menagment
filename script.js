let topHeight = 120;

// array processi
let processi = [];

let tabellaBody;
let numeroMassimo = 0;

// setup p5
function setup() {
  createCanvas(windowWidth, windowHeight);

  // creazione tabella quando parte il programma
  creaTabella();
}

function draw() {
  background(220);

  //bianco sopra
  fill(255);
  noStroke();
  rect(0, 0, width, topHeight);

  // 3 colonne
  let colWidth = width / 3;
  let bottomHeight = height - topHeight;

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

  // linea sopra colonne
  line(0, topHeight, width, topHeight);
}


// 
// funzione creaTabella (DOM)
// 

function creaTabella() {

  let container = document.getElementById("tabellaProcessi");

  let table = document.createElement("table");

  let thead = document.createElement("thead");
  let tr = document.createElement("tr");

  let intestazioni = ["Nome", "Dimensione", "Colore"];

  for (let i = 0; i < intestazioni.length; i++) {

    let th = document.createElement("th");
    th.textContent = intestazioni[i];
    tr.appendChild(th);

  }

  thead.appendChild(tr);
  table.appendChild(thead);

  tabellaBody = document.createElement("tbody");

  table.appendChild(tabellaBody);

  container.appendChild(table);

}



// funzione aggiungiProcesso


function aggiungiProcesso() {

  if (numeroMassimo == 0) {
    alert("Inserisci prima il numero di processi");
    return;
  }

  if (processi.length >= numeroMassimo) {
    alert("Hai già inserito il numero massimo di processi");
    return;
  }

  let nome = document.getElementById("nome").value;
  let colore = document.getElementById("colore").value;
  let dimensione = document.getElementById("dimensione").value;

  let processo = {
    nome: nome,
    colore: colore,
    dimensione: dimensione
  };

  processi.push(processo);

  aggiungiRigaTabella(processo);

}



// funzione aggiungiRigaTabella


function aggiungiRigaTabella(p) {

  let tr = document.createElement("tr");

  let tdNome = document.createElement("td");
  tdNome.textContent = p.nome;

  let tdDim = document.createElement("td");
  tdDim.textContent = p.dimensione;

  let tdCol = document.createElement("td");
  tdCol.style.backgroundColor = p.colore;

  tr.appendChild(tdNome);
  tr.appendChild(tdDim);
  tr.appendChild(tdCol);

  tabellaBody.appendChild(tr);

}


// funzione numeroProcessi
function numeroProcessi() {
  numeroMassimo = document.getElementById("numProcessi").value;
}