var fecha = new Date();
var dia = fecha.getDay();
var mes=fecha.getMonth();
var year=fecha.getFullYear();
var meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
var parrafo=document.createElement("p");
      parrafo.setAttribute("id","fecha");
var div=document.getElementById('omar');
console.log(div);
div.appendChild(parrafo);
div.setAttribute('name','div');

console.log(div.getAttribute("id"));

switch (dia) {
  case 0 :
      console.log("Domingo"+"/"+meses[mes]+"/"+year);

      break;
  case 1:
      console.log("lunes"+"/"+meses[mes]+"/"+year);
      break;
case 2:
      console.log("martes"+"/"+meses[mes]+"/"+year);
      break;
  case 3:
        console.log("miercoles"+"/"+meses[mes]+"/"+year);
        break;
  case 4:
        console.log("juevez"+"/"+meses[mes]+"/"+year);
        break;
  case 5:
        console.log("Viernes"+"/"+meses[mes]+"/"+year);
        break;
  case 6:
        console.log("sabado"+"/"+meses[mes]+"/"+year);
        break;
  default:
  console.log("no se encontro el dia deseado");

}
