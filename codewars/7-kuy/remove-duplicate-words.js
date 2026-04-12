// Remove duplicate words(3 solutions)
// https://www.codewars.com/kata/5b39e3772ae7545f650000fc

function removeDuplicateWords (s) {
  return s.split(' ').filter((el, id, arr) => id === arr.indexOf(el)).join(' ');
}

/*
function removeDuplicateWords (s) {
  let set = new Set(s.split(' '));
  return Array.from(set).join(' ');
}

function removeDuplicateWords (s) {
  return [...new Set(s.split(' '))].join(' ');
}
*/

console.log(removeDuplicateWords('alpha beta beta gamma gamma delta'));