// Find the nth Digit of a Number
function findDigit(num,nth) {
  if(nth < 1) return -1;
  return Array.from(String(Math.abs(num)), el => Number(el)).reverse()[nth-1] || 0;
}