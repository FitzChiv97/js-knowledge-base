// First non-repeating character
// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e

function firstNonRepeatingLetter(s) {
  let arr = s.toLowerCase().split('');
  let id = arr.findIndex((el, _, arr) => arr.indexOf(el) === arr.lastIndexOf(el));

  return (id < 0)? '': s[id];
}

console.log(firstNonRepeatingLetter('sTreSS'));