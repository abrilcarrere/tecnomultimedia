class Obstaculo {
  constructor() {
    this.x = width;
    this.y = 440;
    this.img(); 
  }

  img() {
    this.img = loadImage("data/Arbol.png"); 
     //console.log("Imágenes de obst:", this.img);
  }

  mover() { //reubica el obst
    this.x -= velXP + 5;
    if (this.x < -50) {
      this.x = width + 50;
      this.y = 440;
    }
  }

  mostrar() {
    push();
    fill(200, 0, 0);
    image(this.img, this.x, this.y, 100, 100); 
    pop();
  }
}

function configurarJuego() {
  piso = 480;
  rP = 50;
  velXP = 0;
}
