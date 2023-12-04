let objAv; //variable global 

function setup() {
    createCanvas(600, 600);
    objAv = new Aventura();
    configurarJuego();
     
}

function draw() {
    objAv.backg(); //actualizo los fondos
    objAv.estados(); //gestiono los estados del juego
}


function mousePressed() {
  objAv.boton(); //manejo la logica con el mosue
}

function keyPressed() {
  objAv.juego.apretarTeclado(keyCode); //lo mismo pero con las teclas 
}
