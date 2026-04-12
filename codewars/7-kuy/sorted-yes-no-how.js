// Sorted? yes? no? how? (2 solutions)
// https://www.codewars.com/kata/580a4734d6df748060000045

function isSortedAndHow(array) {
  let ascending = 0;
  let descending = 0;
  
  for(let i = 0; i < array.length; i++) {
    if (array[i] >= array[i + 1]) descending++;
    if (array[i] <= array[i + 1]) ascending++;
  }

  return (ascending === array.length - 1)? 'yes, ascending':
  (descending === array.length - 1)? 'yes, descending':'no';
}

/*
function isSortedAndHow(array) {
  return array.every((e, i, a) => i == 0 || e < a[i-1])? 'yes, descending':
  array.every((e, i, a) => i == 0 || e > a[i-1])? 'yes, ascending':'no';
}
*/

console.log(isSortedAndHow([15, 7, 3, -8]));