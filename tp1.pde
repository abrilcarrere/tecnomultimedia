PImage arbol,comiendo,nieve,pasto;
String estado;
int c;
float abajo=100; 
boolean estoyDentroDelRect = true;
float x, y, ancho, alto;
PFont negro;

void setup() {
  size( 640, 480 );  
  textAlign( CENTER, CENTER );
  textSize( 30 );
  
  estado = "menu";
  arbol= loadImage("arbol.jpg");
  comiendo= loadImage("comiendo.jpg");
  nieve= loadImage("nieve.jpg");
  pasto= loadImage("pasto.jpg");
  x = 460;
  y = 400;
  ancho = 150;
  alto = 50;
  negro= loadFont("CopperplateGothic-Light-25.vlw");
  frameRate( 60 );
}

void draw() {
  abajo= frameCount;
  if ( estado.equals("menu") ) {
    image(arbol,0,0);
    fill(203,152,240);
    textFont(negro);
    text("Los pandas suelen trepar arboles",235, 450 );
    //boton
    strokeWeight(2);
    fill(110,7,222);
    circle( 50, 70, 80 );
    //
    //pantalla 1
  } else if (estado.equals("p1") ) {
    image(comiendo,0,0);
    fill(20,255,250);
    textSize(30);
    text( "comen bambú y plantas ", width/2.5, abajo );
   
    c++;  
    if( c >= 300 ){  
      estado = "p2";
      c = 0; 
    }
  } else if (estado.equals("p2") ) {
    image(nieve,0,0);
    fill(0,20,250);
    textSize(abajo/20);
    text( "ademas de la selva, viven en la nieve", width/2, height/2 );
 
    c++;  
    if( c >= 300 ){  
      estado = "p3";
      c = 0; 
    }
    //
    //pantalla 3
  } else if (estado.equals("p3") ) {
    image(pasto,0,0);
    fill(0);
     textSize(25);
    text( "Un panda vive un promedio de 12 a 20 años.", abajo/2, height/2 );
    estoyDentroDelRect = ( mouseX > x ) && ( mouseX < x+ancho ) && ( mouseY > y) && ( mouseY < y+alto);
    if ( estoyDentroDelRect ){
      fill(255,3,226);
    }else {
      fill(252,135,239);
      
  }
  //boton rectangular
  noStroke();
  rect( x, y, ancho, alto );
 } 
  
}

void mousePressed() {
  if( estado.equals("menu") ){
    if( dist(50, 70, mouseX, mouseY) < 50/2 ){
      estado = "p1";
    }
  }
  if( estado.equals("p3") ){
     if( estoyDentroDelRect ){
       if ( ( mouseX > x ) && ( mouseX < x+ancho ) && ( mouseY > y) && ( mouseY < y+alto) ) {
         estado = "menu" ;
         
       }
     }
  }
}
