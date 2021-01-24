
// 1. at least six characters long
// 2. contains a lowercase letter
// 3. contains an uppercase letter
// 4. contains a number

const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]{6,}$/;
const password = '123';

function validate(password) {
  return console.log(regExp.test(password));
}

validate(password);
