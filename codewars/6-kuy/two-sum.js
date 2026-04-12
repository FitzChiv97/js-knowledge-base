// Two Sum(2 solutions)
// https://www.codewars.com/kata/52c31f8e6605bcc646000082

function twoSum(numbers, target) {
  for(let i = 0; i < numbers.length; i++) {
    for(let j = i + 1; j < numbers.length; j++) {
      if(numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
}

/*
function twoSum(numbers, target) {
  let seen = new Map();

  for(let i = 0; i < numbers.length; i++) {
    let x = numbers[i];
    let y = target - x;

    if(seen.has(y)) {
      return [seen.get(y), i];
    } else {
      seen.set(x, i);
    }
  }
}
*/
console.log(twoSum([1,2,3], 4));