// Filter the number
// https://www.codewars.com/kata/55b051fac50a3292a9000025

function filterString(value) {
  return Number(value.split('').filter(el => el <= 9).join(''));
}