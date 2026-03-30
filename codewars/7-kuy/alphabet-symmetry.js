// Alphabet symmetry
// https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0

function solve(arr){  
  return arr.map(str => {
    return str.toLowerCase().split('').reduce((sum, char, id) => {
        return (id + 1 === char.charCodeAt(0) - 96)? ++sum: sum;
    }, 0);
  });
};
console.log(solve(["abode","ABc","xyzD"]));