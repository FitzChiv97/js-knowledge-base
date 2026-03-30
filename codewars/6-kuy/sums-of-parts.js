// Sums of Parts(2 solutions)
// https://www.codewars.com/kata/5ce399e0047a45001c853c2b

function partsSums(ls) {
  let total = ls.reduce((sum,el) => sum += el, 0);
  let result = [total];

  ls.forEach((el) => {
    total -= el; 
    result.push(total);
  })

  return result;
}

// function partsSums(ls) {
//   ls.unshift(0);
//   let total = ls.reduce((sum,el) => sum += el, 0);
//   return ls.map(el => total -= el);
// }

console.log(partsSums([1,2,3,4,5,6]));