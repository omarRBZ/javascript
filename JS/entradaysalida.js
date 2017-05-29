alert("esto es un mensaje ");

document.write("esto es un documento html");
var contador=0 ;

$("#botton").addEventListener("click",function () {
contador++;

bind_close();
  var label=document.createElement("label");
  var input=document.createElement("input");

  label.setAttribute("name","nombre");
  input.setAttribute("type","text");
  input.setAttribute("name","nombre");
  input.classList.add("react.js","materialize");
  input.setAttribute("id",contador);
  $("#form").appendChild(input);
  $("#form").appendChild(label);

  console.log(input);
  console.log(label);
  console.log(contador);
  alerta("se agrego nuevo campo");
});
function alerta(msg) {
  var div=document.createElement("div");
  div.setAttribute("class","alerta");
  div.innerHTML=msg;
var close= document.createElement("span");
close.style.float="rigth";
close.innerHTML="X";
close.setAttribute("class","close");
div.appendChild(close);
$("body").insertBefore(div,$("body").firstChild);
bind_close();

}
function bind_close() {
  var elements=document.querySelectorAll(".close");
  for (var i = 0; i <elements.length; i++) {
  var el= elements[i];
  el .addEventListener("click",function(){
    this.parentNode.style.display="none";
  });
  }

}


function $(selector)
{
  return document.querySelector(selector);
}
