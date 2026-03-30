// Maximum subarray sum
// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c

function maxSequence(arr){
  if(arr.every(el => el < 0) || !arr.length) return 0;

  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    for(let j = arr.length; j > i+1; j--) {
      let subArrSum = arr.slice(i, j).reduce((sum, el) => sum + el, 0);
      if (subArrSum > sum) sum = subArrSum;
    }
  }
  return sum;
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));