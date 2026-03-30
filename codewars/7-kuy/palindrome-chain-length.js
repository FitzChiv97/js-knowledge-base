// Palindrome chain length (recursion)
// https://www.codewars.com/kata/525f039017c7cd0e1a000a26

function palindromeChainLength(n) {
  let reversedNum = +n.toString().split('').reverse().join('');
  return (n == reversedNum)? 0: 1 + palindromeChainLength(n += reversedNum);
}
console.log(palindromeChainLength(87));