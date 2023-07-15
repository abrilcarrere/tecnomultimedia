//https://youtu.be/GeTnWiXlrQI
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

void draw(){
  textSize(20);
  textAlign(CENTER, CENTER);
  switch(estado){
    case 0:
      image(ricitos[0],0,0);
      boton(530,530,100);
      boton5(15, 550, 100);
      break;
    case 1:  
      pantalla(0,10,10,580,200);
      boton(530,530,100);
      break;
    case 2:
      pantalla(1,10,10,580,200);
      boton(530,530,100);
      break;
    case 3: 
      pantalla(2,10,10,580,200);
      boton(530,530,100);
      break;
    case 4:
      pantalla(3,10,10,580,200);
      textSize(20);
      boton(530,530,100);
      break;
    case 5: 
      pantalla(4,10,0,580,200);
      fill(230,100,10);
      text("Osito llora",100,210);
      text("Osito la despierta",300,210);
      text("Osito la asusta",510,210);
      boton1(15,220,180);
      boton2(220,220,180);
      boton3(430,220,160);
      break;
    case 6:
      pantalla(5,10,505,580,120);
      boton4(470,10,120);
      break;
    case 7:
      pantalla(6,10,230,580,120);
      boton(530,530,100);
      break;
     case 8:
      pantalla(7,10,10,580,120);
      boton4(470,10,120);
      break;
    case 9: 
      pantalla(8,10,230,580,120);
      boton(530,530,100);
      break;
    case 10:
      pantalla(9,10,10,580,120);
      fill(255);
      text(historia[9],300,68);
      text("Logra huir",100,210);
      text("Papá oso la busca",510,210);
      boton1( 15, 225, 180);
      boton3 (430,225,160);
      break;
    case 11:
      pantalla(10,10,10,580,120);
       boton4(470,10,120);
      break;
    case 12:
       pantalla(11,10,10,580,120);
       fill(255);
       text(historia[11],300,68);
       boton(530, 530, 100);
      break;
    case 13: 
      pantalla(12,10,10, 580, 120);
       boton4(470,10,120);
      break;
    case 14:
      pantalla(13,10,10, 300, 120);
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
      boton4(470,10,120);
      break;
}
println("Resultado:" + datos);
}

void mousePressed(){
    if (estado == 0  && botonrect(530,530,100)){
    estado = 1;
  } else if (estado == 0  && botonrect(15, 550, 100)){
    estado =14;
  } else if (estado == 6 && botonrect(470,10,120)) {
    estado = 0;
  } else if (estado == 1  && botonrect(530,530,100)){
    estado = 2;
  } else if (estado == 2  && botonrect(530,530,100)){
    estado = 3;
  } else if (estado == 3  && botonrect(530,530,100)){
    estado = 4;
  } else if (estado == 4  && botonrect (530,530,100)){
    estado = 5;
  } else if (estado == 5  && botonrect (15, 225,180)){
    estado = 6;
  } else if (estado == 5  && botonrect (220,225,180)){
    estado = 7;
  } else if (estado == 7  && botonrect (530,530,100)){
    estado = 8;
  } else if (estado == 5  && botonrect (430,225,160)){
    estado = 9;
  } else if (estado == 8 && botonrect(470,10,120)) {
    estado = 0;
  } else if (estado == 9  && botonrect (530,530,100)){
    estado = 10; 
  } else if (estado == 10  && botonrect (15, 225, 180)){
    estado = 11; 
  } else if (estado == 10  && botonrect (430,225,160)){
    estado = 12; 
  } else if (estado == 11 && botonrect(470,10,120)) {
    estado = 0;
  } else if (estado == 12  && botonrect (530,530,100)){
    estado = 13; 
  } else if (estado == 13 && botonrect(470,10,120)) {
    estado = 0;
  } else if (estado == 14 && botonrect(470,10,120)) {
    estado = 0;

  }
  }
 
