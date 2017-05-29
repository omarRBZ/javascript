var numeroMaximo= 10;
var numeroMinimo=1;
var numeroAleatorio=Math.random()*(numeroMaximo-numeroMinimo)+1;
var numeroRandom=parseInt(numeroAleatorio);

console.log(numeroRandom);
while (true) {
  var numeroIngresado=  prompt("ingresa un numero","");

  if (numeroIngresado === 0)
  {
    alert("has salido del juego");
    break;
  }
  else if (numeroIngresado>numeroRandom)
  {
    alert("el numero que ingresaste es mayor al numero magico");
  }
  else if (numeroIngresado==numeroRandom)
  {
    alert("felizidades has ganado el juego");
    break;
  }
  else if (numeroIngresado<numeroRandom)
  {
    alert("el numero que has ingresado es menor al numero magico");
  }
}
