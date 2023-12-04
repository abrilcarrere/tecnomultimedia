class Juego {
  constructor() {
    this.piso=480;
    this.puntos = 0; 
    this.corredor = new Corredor();
    this.obstaculo = new Obstaculo();
    this.colisiones = 0;
    this.corredorPasaObstaculo = false;
    this.back = [];
    this.i = 0;
    this.mipreload();
    this.estado = 11; 
    configurarJuego();
  }

backgrjuego() {
  image(this.back[0], 0, 0);
}

mipreload() {
 for (this.i = 0; this.i < 3; this.i++) {
   this.back.push(loadImage("data/fondo" + this.i + ".png"));
 }
}
  

apretarTeclado(keyCode) {  //teclas con las que juego
    if (this.estado === 11) { //si estoy en el estado 11, apretando la barra espaciadora el corredor salta
      if (keyCode === 32) {
        this.corredor.saltar();
  }
 }
}


actualizar() {    
 this.corredor.actualizar();
  if (this.estado === 11) { //solo se ejecuta en el estado 11
      this.obstaculo.mover(); //actualiza la posición del obstáculo
     // se verifica la colisión
  if (this.corredor.y + this.corredor.r > this.piso - 30 && // Colisión en la parte inferior del corredor
      this.corredor.x + this.corredor.r > this.obstaculo.x && // Colisión en el lado derecho del corredor
      this.corredor.x - this.corredor.r < this.obstaculo.x + 100 // Colisión en el lado izquierdo del corredor
  ) {
      this.colisiones++; // incrementar contador de colisiones
      this.corredor.vidas--; // restar una vida
      this.obstaculo.x = width + 50; // reubica el obstáculo
      this.obstaculo.y = 440;
}

   if (this.corredor.y < this.piso - this.corredor.r && this.corredor.x > this.obstaculo.x && this.corredor.x < this.obstaculo.x + 100) {
      this.corredorPasaObstaculo = true;
   } else {                             //// verifica si el corredor está por encima del obstáculo sin colisionar
      this.corredorPasaObstaculo = false;
  }
    if (
      this.colisiones >= 3) {  // si el contador de colisiones es mayor o igual a 3, cambia el estado del juego "perdiste"
      this.estado = 13;
      this.colisiones = 0; //reinicia el contador de colisiones
 }
    if (
      this.corredorPasaObstaculo) {   // Si ricitos pasa el obstáculo sin colisionar, suma puntos, y reubica el obstáculo
      this.puntos += 50;
      this.obstaculo.x = width + 50;
      this.obstaculo.y = 440;
 }
    if (
      this.corredor.y === this.piso - this.corredor.r && this.corredor.velY > 0) { // Si ricitos toca el suelo, aumenta los puntos
      this.puntos += 50;
 }

    if (this.puntos >= 200) {  // Si la puntuación alcanza 200, cambia el estado del juego "ganaste"
      this.estado = 12;
  }
 }
}
  
  
mostrar() {  //metodo que dibuja el juego
  if (this.estado === 11) {
    image(this.back[1], 0, 0); 
    stroke(197, 199, 211);
    this.corredor.mostrar();
    line(0, piso, width, this.piso);
    this.obstaculo.mostrar();
    this.pantallaJuego();
  }
}


pantallaJuego() { //metodo con los elementos de la pantalla juego
 fill(255);
 text("JUEGO", 100, 100);
 text("Puntos: " + this.puntos, 40, 30);
 text("Vidas: " + this.corredor.vidas, 30, 60);
}

  
reiniciarJuego() { //metodo con lo necesario para reiniciar el juego
 configurarJuego();
 this.puntos = 0;
 this.corredor = new Corredor();
 this.obstaculo = new Obstaculo();
 this.estado = 11; 
}


getVidas() {  //número actual de vidas del corredor.
 return this.corredor.vidas;
  } 
}
