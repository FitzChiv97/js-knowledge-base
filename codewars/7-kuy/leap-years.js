// Leap Years
// https://www.codewars.com/kata/526c7363236867513f0005ca

function isLeapYear(year) {
  return new Date(year, 1, 29).getDate() === 29;
}

console.log(isLeapYear(2020));