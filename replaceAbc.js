function alphabetPosition(text) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  return text.toLowerCase()
             .replace(/[^a-z]/g,'')
             .split('')
             .map(character => alphabet.indexOf(character) + 1)
             .join(' ');
}

console.log(alphabetPosition("The narwhal bacons at .midnight.")) // "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11";
