var template=`hola mundo

puts :p
mundo
`;
console.log(template);

var nombre ="codigo facilito ";
var saludo = "hola "+nombre+" buen dia ";

console.log(saludo);

var saludo2=`hola ${nombre} buen dia `;
var saludo3=`hola ${" codigo "+" facilito "} buen dia `

console.log(saludo2);
console.log(saludo3);

function suma() {
  return 2+3;

}

var saludo4=`hola ${suma()} buen dia `;

console.log(saludo4);

function tagged(cadena,valores) {
  console.log(cadena);
  console.log(valores);

}
