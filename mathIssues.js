Math.round = function(number) {
  if (parseInt(number) === parseFloat(number)) {
    return number;
  }

  let numAr = number.toString().split('.');
  let decimal = numAr[1].split('')[0];


  return parseInt(decimal) >= 5 ?
         parseInt(numAr[0]) + 1 :
         parseInt(numAr[0]); // TODO: fix this
};

Math.ceil = function(number) {
  if (parseInt(number) === parseFloat(number)) {
    return number;
  }
  let numAr = number.toString()
                    .split('.')
                    .map(number => parseInt(number));
  return numAr.length > 0 ? numAr[0] + 1 : numAr[0]; // TODO: fix this
};

Math.floor = function(number) {
  if (parseInt(number) === parseFloat(number)) {
    return number;
  }
  let numAr = number.toString()
                    .split('.')
                    .map(number => parseInt(number));
  return numAr[0]; // TODO: fix this
};

//console.log(Math.round(5.461));
//console.log(Math.ceil(5.451));
