class Corredor {
  constructor() {
    this.x = width * 0.25;
    this.r = 50; 
    this.y = piso - this.r;
    this.velY = 0;
    this.vidas = 3;
    this.img();
  }
  
 img(){
   this.ric=loadImage("data/Ricitos.png");
 }
 
  saltar() {
    if (this.y > piso - this.r - 5) {
      this.velY = -8;
    }
  }

  actualizar() {
    this.y += this.velY;
    if (this.y + this.r < piso) {
      this.velY += 0.25;
    } else {
      this.velY = -(this.velY * 0.35);
      this.y = piso - this.r;
    }
  }
  
  

  mostrar() {
    fill(0);
   image(this.ric, this.x, this.y, this.r * 2, this.r * 2);

  }
}
