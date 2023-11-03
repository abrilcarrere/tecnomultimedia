class Juego {
  constructor() {
    this.estado = "menu";
    this.puntos = 0;
    this.corredor = new Corredor();
    this.obstaculo = new Obstaculo();
    this.colisiones = 0;
    this.corredorPasaObstaculo = false;
    this.fondo = [];
    this.i = 0;
    this.mipreload();
  }

  background() {
    image(this.fondo[0], 0, 0);
  }

  mipreload() {
    for (this.i = 0; this.i < 4; this.i++) {
      this.fondo.push(loadImage("data/fondo" + this.i + ".png"));
    }
  }
  

  apretarTeclado(keyCode) {
    if (keyCode === 32) {
      if (this.estado === "jugar") {
        this.corredor.saltar();
      }
    } else if (keyCode === LEFT_ARROW) {
      if (this.estado === "jugar" || this.estado === "ganaste" || this.estado === "perdiste") {
        this.reiniciarJuego(); // Restablece el juego
        this.estado = "menu";
      }
    } else if (keyCode === RIGHT_ARROW) {
      if (this.estado === "menu") {
        this.reiniciarJuego(); // Restablece el juego
        this.estado = "jugar";
      } else if (this.estado === "perdiste" || this.estado === "ganaste") {
        this.reiniciarJuego(); // Restablece el juego
        this.estado = "jugar";
      }
    }
  }

  actualizar() {
    this.corredor.actualizar();

    if (this.estado === "jugar") {
      this.obstaculo.mover();

      // Verificar colisión
      if (
        this.corredor.y + this.corredor.r > piso - 30 && // Colisión en la parte inferior del corredor
        this.corredor.x + this.corredor.r > this.obstaculo.x && // Colisión en el lado derecho del corredor
        this.corredor.x - this.corredor.r < this.obstaculo.x + 100 // Colisión en el lado izquierdo del corredor
      ) {
        this.colisiones++; // Incrementar contador de colisiones
        this.corredor.vidas--; // Restar una vida
        this.obstaculo.x = width + 50; // Reposicionar el obstáculo
        this.obstaculo.y = 440;
      }

      if (this.corredor.y < piso - this.corredor.r && this.corredor.x > this.obstaculo.x && this.corredor.x < this.obstaculo.x + 100) {
        this.corredorPasaObstaculo = true;
      } else {
        this.corredorPasaObstaculo = false;
      }

      if (this.colisiones >= 3) {
        this.estado = "perdiste";
        this.colisiones = 0;
      }

      if (this.corredorPasaObstaculo) {
        this.puntos += 50;
        this.obstaculo.x = width + 50;
        this.obstaculo.y = 440;
      }

      if (this.corredor.x >= width - this.corredor.r) {
        this.estado = "ganaste";
      }

      if (this.corredor.y === piso - this.corredor.r && this.corredor.velY > 0) {
        this.puntos += 50;
      }

      if (this.puntos >= 200) {
        this.estado = "ganaste";
      }
    }
  }

 mostrar() {
    this.background(); // 
    console.log(this.estado);

    if (this.estado === "menu") {
      image(this.fondo[0], 0, 0);
      this.pantallaMenu();
    } else if (this.estado === "jugar") {
      image(this.fondo[1], 0, 0);
      this.pantallaJuego();
      this.corredor.mostrar();
      this.obstaculo.mostrar();
      stroke(197, 199, 211);
      line(0, piso, width, piso);
    } else if (this.estado === "ganaste") {
      image(this.fondo[2], 0, 0);
      this.pantallaGanaste();
    } else if (this.estado === "perdiste") {
      image(this.fondo[3], 0, 0);
      this.pantallaPerdiste();
    }
  }
  
  pantallaMenu() {
    stroke(0);
    fill(255);
    noStroke();
    fill(255);
    textSize(20);
    text("Ayuda a Ricitos a huir de la casa de los osos \n saltando los arboles del bosque y a papa oso \n usando la tecla espaciadora \n PRESIONA --> PARA JUGAR", 100, 100);
  }

  pantallaJuego() {
    fill(255);
    text("JUEGO", 100, 100);
    text("Puntos: " + this.puntos, 10, 30);
    text("Vidas: " + this.corredor.vidas, 10, 60);
  }

  pantallaPerdiste() {
    fill(255);
    text("PERDISTE", 300, 150);
    text("presiona <- para reiniciar", 190, 500);
  }

  pantallaGanaste() {
    fill(255);
    text("GANASTE", 300, 150);
    text("presiona <- para reiniciar", 190, 500);
  }

  reiniciarJuego() {
    configurarJuego();
    this.puntos = 0;
    this.corredor = new Corredor();
    this.obstaculo = new Obstaculo();
    this.estado = "menu";
  }

  getVidas() {
    return this.corredor.vidas;
  }
}
