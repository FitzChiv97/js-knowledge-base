// Predict your age!
// https://www.codewars.com/kata/5aff237c578a14752d0035ae

function predictAge(...ages){
  return Math.floor(Math.sqrt(ages.reduce((sum, el) => sum + el*el, 0)) / 2);
}

console.log(predictAge(65,60,75,55,60,63,64,45));