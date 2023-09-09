// https://youtu.be/PzVlfWBDqkw
let xP, yP, rP, velYP, velXP, piso;
let obstaculo;
let x1, y1; // Obstáculo
let estado = "menu";
let imagenes = [] 
let puntos = 0;
let obstaculos = [];
let corredorPasaObstaculo = false; 

function setup() {
  createCanvas(600, 600);
  cargarImagenes();
  configurarJuego();
  textSize(30);
}

function draw() {
  background(255);
  console.log(estado);
  image(imagenes["fondo"], 0, 0, width, height);

  if (estado == "menu") {
    pantallaMenu();
  } else if (estado == "jugar") {
    pantallaJuego();
    yP += velYP;
    if (yP + rP < piso) {
    
      velYP += 0.25;
    } else {
      velYP = -(velYP * 0.35);
      yP = piso - rP;
    }

    stroke(197, 199, 211);
    line(0, piso, width, piso);
    fill(0);
    image(imagenes["corredor"], xP, yP, rP * 2, rP * 2);
    x1 -= velXP + 5;
    if (x1 < -50) {
      x1 = width + 50;
      y1 = 440;
    }

    push();
    fill(200, 0, 0);
    image(imagenes["obstaculo"], x1, y1, 100, 100);
    pop();

 if (dist(x1, y1, xP, yP) < 50 && yP == piso - rP) {
      estado = "perdiste";
      puntos = 0; 
    }
   
    if (yP < piso - rP && xP > x1 && xP < x1 + 100) {
      corredorPasaObstaculo = true;
    } else {
      corredorPasaObstaculo = false;
    }

  
    if (corredorPasaObstaculo) {
      puntos += 50;
      x1 = width + 50;
      y1 = 440;
    }

    if (xP >= width - rP) {
      estado = "ganaste";
      puntos = 0;
    }

    if (yP === piso - rP && velYP > 0) {
      puntos += 50;
    }

  } else if (estado == "perdiste") {
    pantallaPerdiste();
  } else if (estado == "ganaste") {
    pantallaGanaste();
  } else if (estado == "instrucciones") {
    pantallaInstrucciones();
  } else if (estado == "creditos") {
    pantallaCreditos();
  }
}

function keyPressed() {
  if (keyCode === 32 && estado == "jugar") {
    //puntos += 50;
    if (puntos >= 200) {
      estado = "ganaste";
      puntos = 0;
    }
    saltar();
  }

  if (keyCode === LEFT_ARROW && (estado == "perdiste" || estado == "ganaste")) {
    configurarJuego();
    estado = "menu"; 
  }

  if (estado == "instrucciones" || estado == "creditos") {
    estado = "jugar";
    loop();
    configurarJuego();
  }
}



function mousePressed() {
  if (boton(500, 450, 100, 40) && estado == "menu") {
    estado = "jugar";
  }
  if (boton(475, 500, 125, 40) && estado == "menu") {
    estado = "instrucciones";
  }
  if (boton(470, 550, 135, 40) && estado == "menu") {
    estado = "creditos";
  }
}
