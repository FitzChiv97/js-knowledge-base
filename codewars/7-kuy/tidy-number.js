//Tidy Number (Special Numbers Series #9)
function tidyNumber(n){
  return !Array.from(String(n), num => Number(num))
  .some((el,id,arr) => el > arr[id+1]);
}

// Find the nth Digit of a Number
// function findDigit(num,nth) {
//   if(nth < 1) return -1;
//   return Array.from(String(Math.abs(num)), el => Number(el)).reverse()[nth-1] || 0;
// }