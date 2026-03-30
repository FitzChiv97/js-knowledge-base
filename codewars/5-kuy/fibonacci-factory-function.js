// Fibonacci Factory Function (2 solutions)
// https://www.codewars.com/kata/522498c9906b0cfcb40001fc

// function genfib() {
//   let [a, b] = [-1, 1];

//   return function fib() {
//     [a, b] = [b, a + b];
//     return b;
//   };
// }

function genfib() {
  let a = 0;
  let b = 1;
  let c = 0;

  return function fib() {
    if (a === 0) {
      a = 1;
      return 0;
    };
    
    if (c === 0) {
      c = a;
      return c;
    };

    c = a + b;
    a = b;
    b = c;

    return a;
  };
}

let nextFib = genfib();
console.log(nextFib);
