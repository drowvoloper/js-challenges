// num divisible por n? => num divisible por n+1?
// si num divisible por n = 20 return

// si num se puede dividir entre 1 ->
// si num se puede dividir entre 2 ->
// ...
// si num se puede dividir entre 20 --> return num

let x = 20;
let resultado = 0;

while (resultado == 0) {
  if (x % 1 == 0 &&
      x % 2 == 0 &&
      x % 3 == 0 &&
      x % 4 == 0 &&
      x % 5 == 0 &&
      x % 6 == 0 &&
      x % 7 == 0 &&
      x % 8 == 0 &&
      x % 9 == 0 &&
      x % 10 == 0 &&
      x % 11 == 0 &&
      x % 12 == 0 &&
      x % 13 == 0 &&
      x % 14 == 0 &&
      x % 15 == 0 &&
      x % 16 == 0 &&
      x % 17 == 0 &&
      x % 18 == 0 &&
      x % 19 == 0 &&
      x % 20 == 0) {
        resultado = x;
      }

      x += 20;
}

console.log(resultado);
