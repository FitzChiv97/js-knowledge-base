// Power of two (2 solutions)
// https://www.codewars.com/kata/534d0a229345375d520006a0
// tag: recursion

// function isPowerOfTwo(n){
//   let pow = 0;
//   let result = 1;
//   while (result < n) {
//     result = Math.pow(2, pow);
//     pow++;
//     console.log(result);
//   }
//   return result === n;
// }

// recursion solution
function isPowerOfTwo(n){   
  if(n === 1) return true;
  if(n < 1) return false;
  console.log(n);
  return isPowerOfTwo(n / 2);
}

console.log(isPowerOfTwo(8));