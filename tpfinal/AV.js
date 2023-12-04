class Aventura {
  constructor() {
    this.estado = 0;
    this.fondo = [];
    this.opcion = new Botones(100, 50);
    this.juego = new Juego(); //llamo al juego dentro de aventura haciendo la conex y arreglo para el texto
    this.textoEstados =  [
      ".",
      "Habia una familia de esos que vivian en el bosque. Papá oso era grande, Mamá oso mediana y Osito pequeño. Una mañana, decidieron desayunar avena, al estar caliente fueron a dar un paseo en el bosque. Al cabo de unos minutos, una niña llamada Ricitos de Oro llegó a casa de los osos y tocó la puerta. Al no recibir respuesta entró sin permiso.",
      "En la cocina habia 3 tazas de avena: una grande, una mediana y una pequeña. Ricitos tenia mucha hambre y la avena se veian deliciosa. Probó la de Papá oso y estaba caliente, la de Mamá oso muy fria, la del Osito se encontraba deliciosa para su gusto y se la comió sin dejar un poquito.",
      "Luego de comer, Ricitos fue a la sala. Allí habian 3 sillas, cada una acorde al tamaño de cada oso. Primero se sento en la grande, pero era muy alta, se sentó en la mediana y era muy ancha, probó la pequeña pero era tan frágil que se rompió bajo su peso. ",
      "Buscando un lugar para descansar, Ricitos subió las escaleras y encuentra un cuarto con 4 camas, al igual que las sillas, una acorde al tamaño de cada oso. Probó la grande pero era muy dura,probó la mediana pero era muy blanda. Entonces se acostó en la pequeña y estaba perfecta, quedandose profundamente dormida. ",
      "Al poco tiempo, los 3 osos regresaron del bosque. Papá oso notó que la puerta estaba abierta y que alguien habia probado sus platos, y la de Osito estaba vacio, alguien se sentó en sus sillas y la de Osito estaba rota. Al subir las escaleras se encuentran con una niña durmiendo en la cama de Osito. ",
      "El llanto de Osito despertó a Ricitos que muy asustada saltó de la cama y escapó por la ventana hacia el bosque para nunca más volver. ",
      "Osito despertó a Ricitos, le pregunta qué hace en su cama y la invita a ver una película para hacerse amigos.",
      "La familia oso decide adoptarla y viven felices por siempre.",
      "Osito la despierta gruñendo y la familia de osos decide devorarla en la cena.",
      "Al llegar la noche, Ricitos logra escapar hacia el bosque. \n  Ayúdala a huir de la casa de los osos saltando los árboles del bosque. \n Apreta la barra espaciadora para saltar, si logra 200 puntos huye ,\n  si pierde las 3 vidas sera deborada\n PRESIONA JUGAR",
         ];
    this.mipreload();
}

backg() {
  if (this.fondo[this.estado]) {
    image(this.fondo[this.estado], 0, 0);
 }
}

mipreload() {
  for (let i = 0; i < 15; i++) {
    this.fondo.push(loadImage('data/ricitos' + i + '.png'));
 }
}

//falta parametros 
estados() { //estados de la aventura y dibujo 1 boton en diferentes posiciones
if (this.estado == 0) {
    this.opcion.dibujobt(500, 550, "EMPEZAR");
    this.opcion.dibujobt(10, 550, "CREDITOS");
} else if (this.estado == 1) {
    this.opcion.dibujobt(500, 550, "SIGUIENTE");
} else if (this.estado == 2) {
    this.opcion.dibujobt(500, 550, "SIGUIENTE");
} else if (this.estado == 3) {
    this.opcion.dibujobt(500, 550, "SIGUIENTE");
} else if (this.estado == 4) {
    this.opcion.dibujobt(500, 550, "SIGUIENTE");
} else if (this.estado == 5) {
    this.opcion.dibujobt(300, 200, "OSITO LLORA");
    this.opcion.dibujobt(100, 200, "LA DESPIERTA")
    this.opcion.dibujobt(500, 200, "LA ASUSTA")
} else if (this.estado == 6) {
    this.opcion.dibujobt(500, 550, "VOLVER");
} else if (this.estado == 7) {
    this.opcion.dibujobt(500, 550, "SIGUIENTE");
} else if (this.estado == 8) {
    this.opcion.dibujobt(500, 550, "VOLVER");
} else if (this.estado == 9) {
    this.opcion.dibujobt(500, 550, "SIGUIENTE");
} else if (this.estado == 10) {
    this.opcion.dibujobt(500, 550, "JUGAR");
}
 this.pantalla(5, 5, 580, 110);  //llamo al metodo pantalla para que se vea el arreglo de los textos
   
if (this.estado == 11) {
    this.juego.actualizar();  //llamo al juego
    this.juego.mostrar();
}

 if (this.juego.estado === 12) {
      this.mostrarGanaste();
    } else if (this.juego.estado === 13) {
      this.mostrarPerdiste();
    }
  }
  
mostrarGanaste() { //metodo para mostrar la pantalla ganaste
  image(this.fondo[12], 0, 0);
  text("RICITOS LOGRO HUIR", 300, 50);
  this.opcion.dibujobt(500, 550, "REINICIAR");
}

mostrarPerdiste() {  //metodo para mostrar la pantalla perdiste
  text("RICITOS SE CONVIRTIO EN CENA PARA LOS OSITOS", 300, 50);
  image(this.fondo[13], 0, 0);
  this.opcion.dibujobt(500, 550, "REINICIAR");
}
   
pantalla(x, y, lon, alto) {
  noStroke();
  fill(0); 
  if (this.estado === 10) {
    fill(255);
    text(this.textoEstados[10], x, y, lon, alto);
  } else if (this.estado === 14) {
    fill(255);
    text("TRABAJO FINAL N6\nJUEGO+AVENTURA\nCARRERE ABRIL\nPROFE: MATIAS JL", x, y, lon, alto);
  } else {
    text(this.textoEstados[this.estado], x, y, lon, alto);
  }
}

boton() { //llamo al press del boton y le cambio la posicion 
  if (this.opcion.pressbot(540, 550) && this.estado == 0) {
   this.estado = 1;
  } else if (this.opcion.pressbot(10, 550) && this.estado == 0) {
   this.estado = 14;
  } else if (this.opcion.pressbot(540, 550) && this.estado == 1) {
   this.estado = 2;
  } else if (this.opcion.pressbot(540, 550) && this.estado == 2) {
   this.estado = 3;
  } else if (this.opcion.pressbot(540, 550) && this.estado == 3) {
   this.estado = 4;
  } else if (this.opcion.pressbot(540, 550) && this.estado == 4) {
   this.estado = 5;
  } else if (this.opcion.pressbot(300, 200) && this.estado == 5) {
   this.estado = 6;
  } else if (this.opcion.pressbot(540, 550) && this.estado == 6) {
   this.estado = 0;
  } else if (this.opcion.pressbot(100, 200) && this.estado == 5) {
   this.estado = 7;
  } else if (this.opcion.pressbot(540, 550) && this.estado == 7) {
   this.estado = 8;
  } else if (this.opcion.pressbot(500, 200) && this.estado == 5) {
   this.estado = 9;
  } else if (this.opcion.pressbot(540, 550) && this.estado == 8) {
   this.estado = 0;
  } else if (this.opcion.pressbot(540, 550) && this.estado == 9) {
   this.estado = 10;
  } else if (this.opcion.pressbot(540, 550) && this.estado == 10) {
   this.estado = 11;
  }else  if (this.opcion.pressbot(500, 550) && (this.juego.estado === 12 || this.juego.estado === 13)) {
   this.juego.reiniciarJuego();
   this.estado=0;
  }
 }
}
