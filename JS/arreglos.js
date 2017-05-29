var arreglo=[2,3,4,10,12];
console.log(arreglo.sort(ordenamiento));
console.log(  arreglo.reverse());

function ordenamiento(a,b)
{
  if (a>b) {
    return 1;

  }else if (b>a) {
    return -1;

  } else if (a==b) {
    return 0;

  }
}
