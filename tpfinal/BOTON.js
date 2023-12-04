class Botones {
  constructor(ancho, alto) {
    this.ancho = ancho;
    this.alto = alto;
    textAlign(CENTER, CENTER);
    textSize(this.alto / 2);
  }
  
  dibujobt(x, y, bot) {  //dibujo del boton
    fill (230, 140, 70);   
    rect (x, y, this.ancho, this.alto, 10); // boton
    fill (0);
    textSize (15);
    text (bot, x+50, y+25);
  }

  pressbot(x, y) { //area de press
    return mouseX > x && mouseX < x + this.ancho && mouseY > y && mouseY < y + this.alto;
  }
}
