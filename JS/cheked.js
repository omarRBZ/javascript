var Si= document.getElementById('si');
var No=document.getElementById('no');
var hombre=docuement.getElementById("Hombre");
var Hombre=docuement.getElementById("Mujer");
var sexo;
Si.addEventListener("change",function (e) {
  if (e.target.checked) {
    No.disabled = true;
    sexo="Hombre";
    console.log(sexo);


  }else {
    No.disabled = false;
    sexo="";
    console.log(sexo);
  }
});

No.addEventListener("change",function (e) {
  if (e.target.checked) {
    Si.disabled = true;
    sexo="Mujer";
    console.log(sexo);

  }else {
    Si.disabled = false;
    sexo="";
    console.log(sexo);
  }


});

function generoHombre(e) {
  


}
