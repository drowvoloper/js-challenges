function esPrimo (num) {
  for (let i = 3; i < num; i+=2) {
    if (parseInt(num/i) == parseFloat(num/i)
        && i !== num)  {
      return false;
    }
  }

  return true;
}

let j = 1;

let contador = 1;

while (contador <= 10001) {
  //console.log(contador,j);

  if (esPrimo(j)) {
    contador++;
    console.log(j);
  }

  j+=2;

}

//console.log(i);
