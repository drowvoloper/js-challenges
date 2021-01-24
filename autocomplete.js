function autocomplete(input, dictionary){
  input = input.replace(/\W\d/gi,'');
  let result = dictionary.filter(word => {
    return word.toUpperCase().slice(0,input.length) == input.toUpperCase();
  });

  return result.splice(0,5);
}

console.log(autocomplete('ai', ['airplane','airport','apple','ball']));
