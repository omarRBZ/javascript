function datosPersonales() {
  var nombre= document.getElementById("nombre").value;
  var apellido= document.getElementById("apellido").value;
  localStorage.setItem("Nombre", nombre);
  localStorage.setItem("Apellido", apellido);
  alert("los datos han sido guardados");

}

function mostrar() {
var nom= localStorage.getItem("Nombre");
var apel = localStorage.getItem("Apellido");
document.getElementById('nombre').innerHTML=nom;
document.getElementById('apellido').innerHTML=apel;


}

$.ajax({
  url: 'JS/formulario.js',
  type:"POST",
  async: true,
  data:{nombre:"omar", edad: 25},
  success:listo,
  error: error
});

function listo() {
  console.log("inicio listo");
  console.log(data);
  console.log("listo");

}
