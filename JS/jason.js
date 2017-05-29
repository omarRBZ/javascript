//javascript object model

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

diccionario.nombre="aguz";
console.log(diccionario.nombre);
console.log(diccionario.datos);
