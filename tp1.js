let tam = 92;
let cant = 4;
let rombo;
let referencia;

function setup() {
  createCanvas(800, 400);
  rombo = color(220, 20, 60);
  background(36, 222, 211);

}

function draw() {
  background(36, 222, 211);

  if (referencia) {
    image(referencia, 0, 0, 400, 400);
  }
  
  dibujarCuadradosFondo();
  dibujarRombos(10, 0); 
}

function dibujarCuadradosFondo() {
  noStroke();
  fill(116, 178, 253);
  rect(410, 10, 380, 380); 

  fill(100, 149, 237);
  rect(460, 60, 280, 280); 

  fill(97, 129, 118);
  rect(500, 97, 200, 200); 
}

function dibujarRombos(maximo, lineCount) {
  stroke(6);
  strokeWeight(1.9);

  for (let i = 0; i < width; i += 4) {
    if (lineCount >= maximo) {
      break;
    }
    line(i + 465, 340, i + 465, 68);
    lineCount++;
  }

  noStroke();
  fill(rombo);
  for (let fila = 0; fila < cant; fila++) {
    for (let col = 0; col < cant; col++) {
      let posX = 418 + col * tam;
      let posY = 56 + fila * tam;

      triangle(posX, posY + 10, posX + tam, posY + 10, posX + tam / 2, posY + 52 - tam);
    }
  }

  for (let fila = 0; fila < cant; fila++) {
    for (let col = 0; col < cant; col++) {
      let posX = 418 + col * tam;
      let posY = 56 + fila * tam;

      triangle(posX, posY + 10, posX + tam, posY + 10, posX + tam / 2, posY - 35 + tam);
    }
  }
}

function mousePressed() {
  if (estoyDentroDelBoton(410, 800, 2, 400)) { 
    tam--;
    cant++;
    rombo = color(random(255), random(255), random(255));
  }
}

function keyPressed() {
  cant = 4;
  tam = 92;
  rombo = color(220, 20, 60);
  background(36, 222, 211);

}

function estoyDentroDelBoton(x1, x2, y1, y2) {
  return (mouseX > x1) && (mouseX < x2) && (mouseY > y1) && (mouseY < y2);
}
