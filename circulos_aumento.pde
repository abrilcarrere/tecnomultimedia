void circulosaumento (int fila,int col){
  int xPos = col * 25 + 415;
      int yPos = fila * 25 + 15;
      int diametro = diametroInicial + col * incremento;
      if (dist(mouseX, mouseY, xPos, yPos) < 80) { //circulo amarillo
      fill(235, 215, 5);
    }else {
      fill(random(242), random(200,236), random(219,250)); //si no se mueve el mouse se pinte de "celeste"
    }
      ellipse(xPos, yPos, diametro, diametro);
      
}
 
void mousePressed() { //si apreto el boton derecho del mouse auemnta el diametro, y el izquierdo disminuye el tamaño del diametro
  if (mousePressed&&(mouseButton==RIGHT)) {
    diametroInicial++;
  } else {
    diametroInicial--;
  }
}
void keyPressed() {
  if(key == 'f') {
    background(255); // pinta el fondo de blanco
  }
   if(key=='o'){ //devuelve la funcion a su estado inicial
     background(0);
     diametroInicial=12;
     
  }
}
String texto(){
  return("Tecno1Tp2");
}
