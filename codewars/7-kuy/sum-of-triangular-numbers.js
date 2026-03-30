// Sum of Triangular Numbers(2 solutions)
// https://www.codewars.com/kata/580878d5d27b84b64c000b51
// tag: recursion

function sumTriangularNumbers(n) {
  let sumTriangular = 0;
  let triangular = 0;

  for(let i = 1; i <= n; i++) {
    triangular += i;
    sumTriangular += triangular;
    console.log(triangular);
  }

  return sumTriangular;
}

// recursion solution
// function sumTriangularNumbers(n) {
//   return (n > 0)? (n*(n+1)/2) + sumTriangularNumbers(--n): 0;
// }

console.log(sumTriangularNumbers(6));