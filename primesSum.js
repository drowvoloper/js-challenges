const eratosthenes = limit => {
  let numsArr = [];
  let primesArr = [];
  //let limit = Math.sqrt(num);

  // array from 0 to (num - 1)
  for (let i = 0; i < limit; i++) {
    numsArr.push(true);
  }

  //remove multiples of primes starting from 2, 3, 5..
  for (let i = 2; i <= limit; i++) {
    if (numsArr[i]) {
      for (let j = i * i; j < limit; j += i) {
        numsArr[j] = false;
      }
    }
  }

  // All numsArr[i] set to true are primes
  for (let i = 2; i < limit; i++) {
    if(numsArr[i]) {
      primesArr.push(i);
    }
  }

  return primesArr;
}

let primes = eratosthenes(2000000);
let result = primes.reduce((a, b) => a + b);
console.log(result);
