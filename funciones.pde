boolean botonrect( int x, int y){
  return (mouseX > x-20 && mouseX < x + 70 && mouseY > y-15 && mouseY < y + 30);
  
}
void boton(int x, int y, int a, String texto){
  if (mouseX > x - a/4 && mouseX < (x + a/4 - 10) && mouseY > y - a/8 && mouseY < y + a/8) {
    fill(random(200, 255), random(0, 255), random(0, 255));
  } else {
    fill(255,140,0);
  }
  rect(x - a/4, y - a/8, a/2 - 10, a/4,10);
  fill(0);
  textSize(15);
  text(texto,x-5,y);
  datos=true;
}
void pantalla(int i, int x, int y, int lon, int alto){
      image(ricitos[1+i],0 ,0 );
      fill(0);
      text(historia[i], x,y,lon,alto);
}
