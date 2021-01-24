function queueTime(customers, n) {
  //TODO
  if (customers.length === 0) return 0;

  let tills = customers.splice(0,n).sort((a,b) => a - b);

  while (customers.length > 0) {
    tills[0] += customers.shift();
    tills.sort((a,b) => a - b);
  }
  return tills.reverse()[0];
}

console.log(queueTime([], 1)) // 0
console.log(queueTime([1,2,3,4], 1)) // 10
console.log(queueTime([2,2,3,3,4,4], 2)) // 9
console.log(queueTime([1,2,3,4,5], 100)) // 5
