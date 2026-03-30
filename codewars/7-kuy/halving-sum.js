// Halving Sum(2 solutions)

const halvingSum = n => n += (!Math.floor(n/2))? 0: halvingSum(Math.floor(n/2));
// let halvingSum = n => n += (n > 1)? halvingSum(parseInt(n/2)): 0;

console.log(halvingSum(25));