// Find the vowels
// https://www.codewars.com/kata/5680781b6b7c2be860000036

function vowelIndices(word){
  let vowels = 'aeiouy'.split('');
  return word.toLowerCase().split('').map((el, id) => {
    return (vowels.indexOf(el) !== -1)? id+1: el;
  }).filter(el => typeof el === 'number');
}

console.log(vowelIndices('super'));