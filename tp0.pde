PImage photo;
void setup() {
  size(800, 400);
  background(255);
  photo = loadImage("panda1.jpg");
  
//fondo
fill(210,230,240);
rect(400,0,400,212);
fill(124,183,116);
stroke(124,183,116);
triangle(800,0,470,200,800,200);
fill(0,120,20);
stroke(0,120,20);
triangle(800,21,800,212,600,212);

//troncos
fill(60,40,0);
stroke(60,40,0);
rect(708,212,100,150);
rect(400,212,100,135);

//plantas de abajo
fill(10,155,30);
rect(400,300,73,115);
rect(710,322,100,100);
stroke(255,243,8);
line(464,304,460,400);
line(463,303,460,400);
noStroke();
fill(82,55,1);
triangle(400,232,400,400,424,400);
fill(15,130,5);
rect(400,50,50,162);
triangle(450,50,550,215,450,212);


//orejas
fill(0);
stroke(0);
ellipse(501,125,75,70);
ellipse(670,125,75,70);

//cuerpo
fill(20);
rect(472,262,237,250);
fill(10,155,30);
circle(590,398,20);

//cara
fill(245);
stroke(245);
ellipse(590,228,240,260);

//detalles negros de los ojos
noStroke();
fill(0);
circle(548,210,40);
ellipse(535,230,50,50);
circle(630,210,40);
ellipse(640,230,50,50);

//ojos
fill(30);
stroke(130);
circle(548,215,15);
circle(625,215,15);
fill(70);
circle(545,212,8);
circle(624,212,8);

//nariz
fill(10);
noStroke();
circle(590,310,20);
circle(567,295,20);
circle(610,295,20);
triangle(565,286,587,317,612,286);
triangle(618,300,594,294,593,318);
triangle(560,300,585,300,585,319);

circle(578,301,20);
circle(600,300,20);
}

void draw() {
  image(photo, 0, 0);
 println("X:");
 println(mouseX);
 println("Y:");
 println(mouseY);
 }
