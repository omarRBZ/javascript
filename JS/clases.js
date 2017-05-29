class tutor {
  constructor(nombre,apellido) {
    this.nombre=nombre;
    this.apellido=apellido;

  }
  nombre_completo () {
    var mensaje =this.nombre+this.apellido+"hola ";
    return console.log(mensaje);

  }
}
var nombre= new tutor("omar","Rojas");

console.log(nombre.nombre_completo());

class poligono  {
  constructor(a, b) {
    this.a = a;
    this.b = b;

  }
get imprimirArea(){
  return this.calcularArea();
}

calcularArea(){
  return this.a*this.b;
}

}
var area= new poligono(10,5);
console.log(area.imprimirArea);

class triangulo {
  constructor(base,altura,lado) {
    this.altura=altura;
    this.base=base;
    this.lado=lado;

  }
  get area(){
    return this.Area;
  }
  set(base,lado,altura){
    this.altura=altura;
    this.base=base;
    this.lado=lado;

  }
   Area() {
    return console.log("el area es : "+(this.base*this.altura)/2);
  }
}
var x= new triangulo(10,20,10);
console.log(x.area());
