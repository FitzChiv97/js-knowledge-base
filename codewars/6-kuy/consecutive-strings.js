// Consecutive strings (3 solutions)
// https://www.codewars.com/kata/56a5d994ac971f1ac500003e

function longestConsec(strarr, k) {
  if (k <= 0 || k > strarr.length) return '';

  let longest = '';

  for(let i = 0; i < strarr.length; i++) {
    let str = strarr.slice(i, i + k).join('');
    if(str.length > longest.length) longest = str;
  } 

  return longest;
}

/*
function longestConsec(strarr, k) {
  let longest = '';

  for(let i = 0; k > 0 && i < strarr.length - k; i++) {
    let str = strarr.slice(i, i + k).join('');
    if(str.length > longest.length) longest = str;
  } 

  return longest;
}

function longestConsec(strarr, k) {
  if (k <= 0 || k > strarr.length) return '';
  
  return strarr.reduce((base, el, id) => {
    let str = strarr.slice(id, id + k).join('');
    return (str.length > base.length)? str: base;
  }, '');
}
*/

let consec = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"];
console.log(longestConsec(consec, 4));