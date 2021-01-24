function prefill(n, v = undefined) {

  if(parseInt(n) === 0) {
    return [];
  }
  else if (parseInt(n) > 0 && n % 1 === 0) {
    var ar = new Array(parseInt(n));
    return ar.fill(v);
  }
  else {
    throw new TypeError(`${n} is invalid`);
  }

}

console.log(prefill(0,1));
console.log(prefill(2.3,'abc'));
console.log(prefill(1,1));
console.log(prefill(3,prefill(2,'2d')));
