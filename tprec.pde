//https://youtu.be/u5rAWU7Tb1s
int posY;
int velocidad;
float y;
int estado = 0;
int c = 15;
int l = 12;
PImage[] ricitos = new PImage[c];
String[] historia = new String[c];
boolean datos=false;
void setup(){
  size(600,600);
  //carga imagenes 
  for(int i = 0 ; i < c ; i++ ){
    ricitos[i] = loadImage("ricitos" + i + ".jpg"); 
  }
  historia = loadStrings("historia.txt");
  for ( int i = 0; i < l ; i++ ) {
  }
   y=0;
  posY = height;
  velocidad = 1;
}

void draw() {
   println("X:");
  println(mouseX);
   println("Y:");
    println(mouseY);
  println(estado);
  textSize(20);
  textAlign(CENTER, CENTER);

  switch(estado) {
  case 0:
    image(ricitos[0], 0, 0);
    boton(540, 570, 200, "EMPEZAR");
    boton(70, 570, 200, "CREDITOS");
    break;
  case 1:
    pantalla(0, 5, 5, 580,200);
    boton(540, 570, 200, "SIGUIENTE");
    break;
  case 2:
    pantalla(1, 10, 10, 580,200);
    boton(540, 570, 200, "SIGUIENTE");
    break;
  case 3:
    pantalla(2, 10, 5, 580, 170);
    boton(540, 570, 200, "SIGUIENTE");
    break;
  case 4:
    pantalla(3, 10, 5, 580, 200);
    boton(540, 570, 200, "SIGUIENTE");
    break;
  case 5:
    pantalla(4, 10, 2, 580, 200);
    boton(300, 225, 200, "OSITO LLORA");
    boton(100, 225, 200, "OSITO LA \n DESPIERTA");
    boton(500, 225, 200, "OSITO LA \n ASUSTA");
    break;
  case 6:
    pantalla(5, 10, 5, 580, 110);
    boton(540, 570, 200, "FIN");
    break;
  case 7:
    pantalla(6, 10, 10, 590, 100);
    boton(540, 570, 200, "SIGUIENTE");
    break;
  case 8:
    pantalla(7, 10, 10, 580, 110);
    boton(540, 570, 200, "FIN");
    break;
  case 9:
    pantalla(8, 10, 10, 580, 100);
    boton(540, 570, 200, "SIGUIENTE");
    break;
  case 10:
    pantalla(9, 10, 10, 580, 110);
    fill(255);
    text(historia[9],300,63);
    boton(160, 200, 200, "PAPA OSO \n LA A BUSCA");
    boton(470, 200, 200, "LOGRA HUIR");
    break;
  case 11:
    pantalla(10, 10, 10, 580, 120);
    boton(540, 570, 200, "FIN");
    break;
  case 12:
    pantalla(11, 10, 10, 580, 120);
    fill(255);
    text(historia[11],300,68);
    boton(540, 570, 200, "SIGUIENTE");
    break;
  case 13:
   pantalla(12, 150, 100, 300, 400);
   boton(540, 570, 200, "FIN");
   break;
   case 14:
    pantalla(13,10,10, 300, 120);
    boton(540, 570, 200, "VOLVER");
    fill(255);
    textAlign(CENTER);
    text("RICITOS DE ORO", width/2, posY-250);
    text("Robert Southey", width/2, posY-200);
    text("ABRIL CARRERE", width/2, posY-150);
    text("CUENTO AVENTURA", width/2, posY-100);
    text("PROFE MATIAS", width/2, posY-50);
    text("GRACIAS", width/2, posY);

      posY -= velocidad;

      if (posY < -50) {
      posY = height;
      }
      break;     
}
}
void mousePressed() {
   if (estado == 0  && botonrect(540, 570)){
    estado = 1;
  } else if (estado == 0  && botonrect(70, 570)){
    estado =14;
  } else if (estado == 6 && botonrect(540, 570)) {
    estado = 0;
  } else if (estado == 1  && botonrect(540, 570)){
    estado = 2;
  } else if (estado == 2  && botonrect(540, 570)){
    estado = 3;
  } else if (estado == 3  && botonrect(540, 570)){
    estado = 4;
  } else if (estado == 4  && botonrect(540, 570)){
    estado = 5;
  } else if (estado == 5  && botonrect (300, 200)){
    estado = 6;
  } else if (estado == 5  && botonrect (100, 200)){
    estado = 7;
  } else if (estado == 7  && botonrect (540, 570)){
    estado = 8;
  } else if (estado == 5  && botonrect (500, 200)){
    estado = 9;
  } else if (estado == 8 && botonrect(540, 570)) {
    estado = 0;
  } else if (estado == 9  && botonrect (540, 570)){
    estado = 10; 
  } else if (estado == 10  && botonrect (470, 200)){
    estado = 11; 
  } else if (estado == 10  && botonrect (160, 200)){
    estado = 12; 
  } else if (estado == 11 && botonrect(540, 570)) {
    estado = 0;
  } else if (estado == 12  && botonrect (540, 570)){
    estado = 13; 
  } else if (estado == 13 && botonrect(540, 570)) {
    estado = 0;
  } else if (estado == 14 && botonrect(540, 570)) {
    estado = 0;
 }
 }
