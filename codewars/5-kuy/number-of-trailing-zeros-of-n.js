// Number of trailing zeros of N!
// https://www.codewars.com/kata/52f787eb172a8b4ae1000a34

function zeros(n) {
  let degree = 2;
  let divisor = 5;
  let trailingZeroes = 0;

  while (divisor <= n) {
    trailingZeroes += Math.floor(n / divisor);
    divisor = (Math.pow(5, degree++));
  }

  return trailingZeroes;
}
console.log((zeros(1000)));