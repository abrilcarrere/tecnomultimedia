//https://youtu.be/UhPL1qPVAxM
let juego;

function setup() {
  createCanvas(600, 600);
  configurarJuego();
  juego = new Juego();
}


function draw() {
  juego.actualizar();
  juego.mostrar();
}

function keyPressed() {
  juego.apretarTeclado(keyCode);
}

function reiniciarJuego() {
  juego.reiniciarJuego();
}
