// Sum of array singles
// https://www.codewars.com/kata/59f11118a5e129e591000134

function repeats(arr){
  return arr
    .filter((el, _, array) => array.lastIndexOf(el) == array.indexOf(el))
    .reduce((sum, el) => sum + el, 0);
};

console.log(repeats([4,5,7,5,4,8]));