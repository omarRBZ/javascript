var nombre;
var alerta ;
var resultado;
var contador ;
alerta     =     document.getElementById('alerta').innerHTML;
nombre   =     document.getElementById('nombre').innerHTML;
nombre    =    "hola mundo";
resultado =    nombre.indexOf("h");
contador  =    0;
console.log(resultado);



while (contador<8)
{

 document.getElementById('nombre').innerHTML="hola mundo";
 document.getElementById(contador+1).innerHTML=contador;
contador++;
console.log(contador);
console.log(contador+1);


}
