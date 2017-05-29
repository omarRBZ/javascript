(function ()
{
  document.getElementById('mensaje').addEventListener("click",function ()
  {
    console.log("hizo click");
  }
);

  setTimeout(
  function () {
  console.log(holaMundo("hola  "));
   },2000);
})  ();

function holaMundo(nombre) {
  function construc()
  {
    nombre="omar";
    return "hola"+nombre;
  }
return construc();
}
