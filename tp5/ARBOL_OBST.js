class Obstaculo {
  constructor() {
    this.x = width;
    this.y = 440;
    this.img();
  }
  
img(){
  this.obs=loadImage("data/Arbol.png");
}
  mover() {
    this.x -= velXP + 5;
    if (this.x < -50) {
      this.x = width + 50;
      this.y = 440;
    }
  }

  mostrar() {
    push();
    fill(200, 0, 0);
    image(this.obs, this.x, this.y, 100, 100);
    pop();
  }
}

function configurarJuego() {
  piso = 480;
  rP = 50;
  velXP = 0;
}
