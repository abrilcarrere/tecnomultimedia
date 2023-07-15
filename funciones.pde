boolean botonrect( int x, int y, int r){
  return dist(mouseX,mouseY, x, y) <= r;
  
}

void boton(float x, float y, float tam) {
  stroke(255, 0, 0);
  strokeWeight(3);
  fill(255, 220, 0);
  rect(480, 550, 100, 30);
  fill(0);
  text("Siguiente", 530, 565, 30);
  
if (mouseX > x + 5 && mouseX < (x + tam + 10) && mouseY > y && mouseY < (y + tam / 2)) {
    fill(230, 255, 0);
    rect(480, 550, 100, 30);
    fill(0);
    text("Siguiente", 530, 565, 30);   
    datos=true;
  }
  
}



void boton1(float x, float y, float tam){
  noStroke();
  fill(255,220,0);
  rect( 70, 225, 60,30);
  fill(0);
  text("elegir",100, 240);

  if(mouseX>x+5 && mouseX<(x+tam+10) && mouseY>y && mouseY<(y+tam/2)){
    fill(230,255,0);
    rect( 70, 225, 60,30);
    fill(0);
    text("elegir",100, 240);
  }
}
void boton2(float x, float y, float tam){
    noStroke();
    fill(255,220,0);
    rect(280,225,60,30);
    fill(0);
    text("elegir",310,240);

  if(mouseX>x+5 && mouseX<(x+tam+10) && mouseY>y && mouseY<(y+tam/2)){
    fill(230,255,0);
    rect(280,225,60,30);
    fill(0);
    text("elegir",310,240);
  }
}

void boton3(float x, float y, float tam){
    noStroke();
    fill(255,220,0);
    rect(480,225,60,30);
    fill(0);
    text("elegir",510,240);
  if(mouseX>x+5 && mouseX<(x+tam+10) && mouseY>y && mouseY<(y+tam/2)){
    fill(230,255,0);
    rect(480,225,60,30);
    fill(0);
    text("elegir",510,240);
  }
}

void boton4(float x, float y, float tam){
    stroke(3,255,60);
    fill(150,255,200);
    rect(470,10,120,30);
    fill(0);
    text("reiniciar",530,25);
  if(mouseX>x+5 && mouseX<(x+tam+10) && mouseY>y && mouseY<(y+tam/2)){
    fill(0,200,255);
    rect(470,10,120,30);
    fill(0);
    text("reiniciar",530,25);
  }
}

void boton5(float x, float y, float tam){
  stroke(255,0,0);
  strokeWeight(3);
  fill(random(242), random(200,236), random(219,250));
  rect( 15, 550, 100,30);
  fill(0);
  text("Creditos", 65,565,30);

  if(mouseX>x+5 && mouseX<(x+tam+10) && mouseY>y && mouseY<(y+tam/2)){
    fill(230,255,0);
    rect(15,550,100,30);
    fill(0);
    text("Creditos", 65,565,30);
  }
}
  

void pantalla(int i, int x, int y, int lon, int alto){
      image(ricitos[1+i],0 ,0 );
      fill(0);
      text(historia[i], x,y,lon,alto);
}
