var number = 9119;

function squareDigits(num) {
  const numStr = num.toString();
  let result = [...numStr].map( n => n * n);
  result = parseInt(result.join(''));

  return result;
}

squareDigits(number);
