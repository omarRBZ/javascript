var nombreP;
var apellidoP;
var omar;

function Datos(nombre ,apellido)
{
  this.nombre=nombre;
  this.apellido=apellido;
  this.nombre_completo=function () {
    alert("tu nombre es "+this.nombre+" "+this.apellido);

};

}


omar= new Datos("omar","Rojas");
Datos.prototype.edad = 25;
omar.nombre_completo();
omar.edad= function () {
  return 25;
};
console.log(omar.edad());
document.getElementById('enviar').addEventListener("click",function ()
{
  nombreP=document.getElementById('nombreP').value;
  apellidoP=document.getElementById('apellidoP').value;
var click= new Datos(nombreP,apellidoP);
click.nombre_completo();
diccionario.nombre=nombreP;
console.log(diccionario.nombre);

});

var diccionario=
{
  NombreP: "nombre",
  Apellido : "Rojas",
  Carrera: "ingenieria en sistemas computacionales ",
  get nombre(){
    return this.NombreP;

  },
  set nombre(nombre){
    this.NombreP=nombre;
  },

  datos: function () {
    console.log("hola  "+ this.NombreP+" "+this.Apellido);
  }
};



console.log(diccionario.datos);

////////////////////////////
var o = {
  get latest () {
    if (this.log.length > 0) {
      return this.log[this.log.length - 1];
    }
    else {
      return null;
    }
  },
  log: [1,2]
};

console.log(o.latest);
