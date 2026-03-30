// Odd-Even String Sort
// https://www.codewars.com/kata/580755730b5a77650500010c

function sortMyString(S) {
  return [...S].filter((_,i) => !(i % 2)).join('') + ' ' +
    [...S].filter((_,i) => i % 2).join('');
}
console.log(sortMyString("CodeWars"));