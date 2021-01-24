function highestRank(arr){
//Your Code logic should written here
  let counter = 0, total = 0;
  let value;
  const sorted = arr.sort((a, b) => a - b);
  const len = sorted.length;
  console.log(sorted)

  for (let i = 0; i < len; i++) {
  
    if (sorted[i] > sorted[i-1]) {
      counter = 0;
    }

    counter++;

    if (counter >= total) {
      value = sorted[i];
      total = counter;
    }
  }

  return value;
}

var arr = [12, 10, 8, 12, 7, 6, 4, 10, 12,10,10];
console.log(highestRank(arr));
