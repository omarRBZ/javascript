var numeros=[1,2,3,4,5];

var elemento=numeros.map(function (n) {
  return n*n;

});

console.log(elemento);


var elemento2=numeros.map((n)=>{return n*n;});
console.log(elemento2);

var elemto3=numeros.map(n =>{return n*n;});

console.log(elemto3);

var elemto4= numeros.map(n =>n*n);
console.log(elemto4);

function tutor() {
  this.nombre="omar rojas";
var self =this;
  setTimeout(function () {
    self.nombre="aguz flores";

  },500);


}
var tutor=new tutor();
console.log(tutor.nombre);
setTimeout(function () {console.log(tutor.nombre);},1000);
