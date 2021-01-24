// 999 x 999 = es palindrome ?

function esPalindrome (num) {
  return num.toString() == num.toString().split('').reverse().join('');
}

let producto;
let palindromes = [];

function mayorPalindrome () {
  for (let i = 999; i >= 100; i--) {
    for (let j = 999; j >= 100; j--) {
      producto = i * j;
      //console.log(producto);
      if (esPalindrome(producto)) {
        palindromes.push(producto)
      }
    }
  }

  palindromes.sort((a, b) => b - a);
  console.log(palindromes[0]);
}



mayorPalindrome();
