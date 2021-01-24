// a < b < c
// a + b + c = 1000
// a * b * c = ???
// (1000 / 4) * (1000 / 4) * (1000 / 2) = ???

let triplet = 1000;

function getTriplet () {
  let r = 1;
  //let s, t, a, b, c;
  let result = 0;

while (result < 1000 && r < 200) {
    let factorPairs = [];
    let num = Math.pow(r,2) / 2;
    for (let i = 1; i < r; i++) {
      if (parseInt(num / i) == parseFloat(num / i)) {
        factorPairs.push([i,num/i]);
      }
    }

    factorPairs.forEach( pairs => {
      let s = pairs[0];
      let t = pairs[1];

      let a = r + s;
      let b = r + t;
      let c = r + s + t;

      //console.log(a,b,c);

      if (a+b+c == 1000) {
        console.log(a * b * c);
      }
    });

    r++;

  }
}

getTriplet();
