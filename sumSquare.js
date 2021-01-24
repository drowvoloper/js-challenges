let sumSquare = squareSum = result = 0;

for (let x = 1; x <= 100; x++) {
  squareSum = squareSum + x * x;
}

for (let i = 1; i <= 100; i++) {
  sumSquare += i;
}
console.log(sumSquare, squareSum);

sumSquare = sumSquare * sumSquare;
result = sumSquare - squareSum;

console.log(result);
