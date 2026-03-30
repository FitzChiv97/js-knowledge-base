// Minimize Sum Of Array (Array Series #1)
// https://www.codewars.com/kata/5a523566b3bfa84c2e00010b

function minSum(arr) {
  arr.sort((a,b) => a - b);
  let sum = 0;

  for(let i = 0; i < arr.length / 2; i++) {
    sum += arr[i] * arr[arr.length - (i + 1)];
    console.log(arr[arr.length - (i + 1)]);
  }
  return sum;
}

console.log(minSum([12,6,10,26,3,24]));