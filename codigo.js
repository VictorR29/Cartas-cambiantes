// CARTAS IMG
const cartas = {
  as: cartaImg("As","as"),
  dos: cartaImg("Dos","dos"),
  tres: cartaImg("Tres","tres"),
  cuatro: cartaImg("Cuatro","cuatro"),
  cinco: cartaImg("Cinco","cinco"),
  seis: cartaImg("Seis","seis"),
  siete: cartaImg("Siete","siete"),
  ocho: cartaImg("Ocho","ocho"),
  nueve: cartaImg("Nueve","nueve"),
  diez: cartaImg("Diez","diez"),
  j: cartaImg("J","j"),
  q: cartaImg("Q","q"),
  k: cartaImg("K","k")
};

// DORSOS
const dorso = document.querySelectorAll(".dorso");

// EVENTOS
cambiarCarta(cartas.as,"as",0);
cambiarCarta(cartas.dos,"dos",1);
cambiarCarta(cartas.tres,"tres",2);
cambiarCarta(cartas.cuatro,"cuatro",3);
cambiarCarta(cartas.cinco,"cinco",4);
cambiarCarta(cartas.seis,"seis",5);
cambiarCarta(cartas.siete,"siete",6);
cambiarCarta(cartas.ocho,"ocho",7);
cambiarCarta(cartas.nueve,"nueve",8);
cambiarCarta(cartas.diez,"diez",9);
cambiarCarta(cartas.j,"j",10);
cambiarCarta(cartas.q,"q",11);
cambiarCarta(cartas.k,"k",12);

// FUNCIONES
function cambiarCarta(carta,grupo,num) {
  dorso[num].addEventListener("mouseover",()=>{
    const imagen = document.getElementById(grupo);
    let resultado = Math.floor(Math.random()*(carta.length));
    imagen.src = carta[resultado];
    return resultado;
  });
};

function cartaImg(carta,carta2) {
  let result = [`img/${carta}/${carta2}.jpg`,`img/${carta}/${carta2}D.jpg`,`img/${carta}/${carta2}T.jpg`,`img/${carta}/${carta2}C.jpg`];
  return result
};
