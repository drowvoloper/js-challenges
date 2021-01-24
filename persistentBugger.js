function persistence(num) {
   let i = 0;
   while (num.toString().length > 1) {
     num = num.toString()
          .split('')
          .map(number => parseInt(number))
          .reduce((total, num) => total * num);
     i++;
   }
   return i;

}

let num = 9;
console.log(persistence(num));
