// Fizz Buzz
// https://www.codewars.com/kata/5300901726d12b80e8000498
function fizzbuzz(n) {
  return Array.from(Array(n), (el, id) => el = id + 1).map(num => !(num % 3) && !(num % 5)? 'FizzBuzz': !(num % 3)? 'Fizz': !(num % 5)? 'Buzz': num);
}
console.log(fizzbuzz(30));