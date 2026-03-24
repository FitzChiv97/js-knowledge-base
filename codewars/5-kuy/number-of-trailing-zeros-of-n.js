// Number of trailing zeros of N!
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