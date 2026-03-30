// Sum even numbers
// https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3

function sumEvenNumbers(input) {
  return input.reduce((sum, num) => {
    return sum + (num % 2 ? 0: num);
  }, 0);
}

console.log(sumEvenNumbers([4, 3, 1, 2, 5, 10, 6, 7, 9, 8]));