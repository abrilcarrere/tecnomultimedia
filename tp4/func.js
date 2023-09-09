function saltar() {
  if (yP > piso - rP - 5) {
    velYP = -8;
  }
}

function boton(x, y, ancho, alto) {
  if (mouseX > x && mouseX < x + ancho && mouseY > y && mouseY < y + alto) {
    return true;
  } else {
    return false;
  }
}

function cargarImagenes() {
  imagenes["fondo"] = loadImage("data/escenario.jpg");
  imagenes["obstaculo"] = loadImage("data/cono.png");
  imagenes["corredor"] = loadImage("data/corre.png");
  imagenes["creditos"] = loadImage("data/creditos.jpg");
}

function configurarJuego() {
  piso = 480;
  rP = 50;
  xP = width * 0.25;
  yP = piso - rP;
  velYP = 0;
  x1 = 600;
  y1 = 440;
  velXP = 0;
}

function pantallaMenu() {
  stroke(0);
  fill(255);
  rect(500, 450, 100, 40);
  rect(475, 500, 125, 40);
  rect(470, 550, 135, 40);
  noStroke();
  fill(0);
  textSize(20);
  text("Maraton city", 100, 100);
  text("Jugar", 525, 475);
  text("Instrucciones", 480, 525);
  text("Creditos", 500, 575);
}

function pantallaJuego() {
  text("JUEGO", 100, 100);
  text("Puntos: " + puntos, 10, 30);
}

function pantallaInstrucciones() {
  image(imagenes["creditos"], 0, 0, width, height);
  fill(255);
  textSize(20);
  text("-Instrucciones:", 100, 200);
  text("-Presiona la barra espaciadora para saltar", 100, 250);
  text("-Evita chocar con los obstáculos", 100, 300);
  text("-Gana puntos avanzando y llega a 200 puntos", 100, 350);
  text("-¡Presiona -> para jugar!", 100, 400);
}

function pantallaCreditos() {
  image(imagenes["creditos"], 0, 0, width, height);
  fill(255);
  textSize(20);
  text("Creditos:", 250, 100);
  text("Juego Arcade", 235, 250);
  text("Abril Carrere", 240, 300);
  text("Comisión 2", 250, 350);
  text("Matias JL", 250, 400);
  text("-¡Presiona -> para jugar!", 190, 440);
}

function pantallaPerdiste() {
  text("PERDISTE", 300, 150);
  text("presiona <- para reiniciar",190,500);
}

function pantallaGanaste() {
  text("GANASTE", 300, 150);
  text("presiona <- para reiniciar",190,500);
}
