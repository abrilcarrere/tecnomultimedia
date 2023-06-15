void circulosdisminuir(int fila,int col){
  int xPos = col * 25 + 615;
      int yPos = (fila + numFilas) * 25 - 385;
      int diametro = diametroInicial + (numCols - col - 1) * incremento;
     if (dist(mouseX, mouseY, xPos, yPos) < 80) {
      fill(235, 215, 5);
    } else {
      fill(random(242), random(200,236), random(219,250));
    }
      ellipse(xPos, yPos, diametro, diametro);
  }

  
