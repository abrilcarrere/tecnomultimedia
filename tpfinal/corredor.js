class Corredor {
  constructor(piso) {
    this.x = width * 0.25;
    this.r = 50; //radio
    this.piso=480;
    this.y = piso - this.r; 
    this.velY = 0;
    this.vidas = 3;
    this.img();
  }

  img() {
    this.ric = loadImage("data/Ricitos.png");
     //console.log("Imágen corredor:", this.ric);
  }

  saltar() {
    if (this.y > this.piso - this.r - 5) {
      this.velY = -8;
    }
  }

 mostrar() {
    fill(0);
    image(this.ric, this.x, this.y, this.r * 2, this.r * 2);
  }

  actualizar() {
    this.y += this.velY;
    if (this.y + this.r < this.piso) {
      this.velY += 0.25;
    } else {
      this.velY = -(this.velY * 0.35);
      this.y = this.piso - this.r;
    }
  }
}
 
