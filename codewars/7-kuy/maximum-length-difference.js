// Maximum Length Difference (2 solutions)
// https://www.codewars.com/kata/5663f5305102699bad000056

function mxdiflg(a1, a2) {
  let length = -1;

  let arr1 = [...a1].map(el => el.length).sort((a, b) => b - a);
  let arr2 = [...a2].map(el => el.length).sort((a, b) => b - a);

  for(let i = 0; i < arr1.length; i++) {
    for(let j = 0; j < arr2.length; j++) {
      if(arr1[i] - arr2[j] > length) length = arr1[i] - arr2[j];
      if(arr2[j] - arr1[i] > length) length = arr2[j] - arr1[i];
    }
  }

  return length;
}

/*
function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) return -1

  let arr1 = [...a1].map(el => el.length);
  let arr2 = [...a2].map(el => el.length);

  return Math.max(Math.max(...arr1) - Math.min(...arr2), Math.max(...arr2) - Math.min(...arr1));
}
*/

console.log(mxdiflg(['ttnnccccooaamm','fzzuujttgb', 'xxx'], ['dddzzzkkkkhhhhhhhgggiiikkp','sllllxxzzzl','xxx','vvvllvvzz']));