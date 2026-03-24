// Sums of Parts(2 solutions)
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