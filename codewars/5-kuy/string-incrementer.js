// String incrementer
// https://www.codewars.com/kata/54a91a4883a7de5d7800009c

function incrementString(string) {
  let array = string.split('');
  let nums = [];

  for(let i = array.length - 1; i >= 0; i--) {
    if (Number(array[i]) >= 0) nums.push(array.pop());
    else break;
  }

  nums = nums.reverse().join('');
  let increasedNums = String(Number(nums) + 1);

  if(increasedNums.length >= nums.length) {
    return array.join('') + increasedNums;

  } else {
    nums = nums.slice(0, nums.length - increasedNums.length) + increasedNums;
    return array.join('') + nums;
  }
}

console.log(incrementString('foobar00'));