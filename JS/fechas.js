var mes=document.getElementById('diaSiguiente');
var contadorDia=1;
var contadorMes=1;
var myDate = new Date();
var fecha = document.getElementById('fecha');
var dias=["Domingo","Lunes","Martes","Miercoles","Juevez","Viernes","Sabado"];
var meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
var totalesDeDias=[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

mes.addEventListener("click",function functionName() {
  console.log(contadorDia+"contador de inicio");
  myDate.setDate(myDate.getMonth()+contadorMes);
 myDate.setDate(myDate.getDate()+contadorDia);
 console.log(contadorDia+"contador intermedio");
  console.log(meses[myDate.getMonth()]+" / "+dias[myDate.getDay()]+" / "+myDate.getDate());
  console.log(contadorDia+"contador antes del if");
  if(myDate.getDate()==1){
    contadorDia=1;
    console.log(contadorDia+"contador del if"+myDate.setDate(1));
  }else {
    contadorDia++;
  }

});
