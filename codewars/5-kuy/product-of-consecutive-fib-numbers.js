// Product of consecutive Fib numbers
// https://www.codewars.com/kata/5541f58a944b85ce6d00006a

function productFib(prod){
  let a = 0;
  let b = 1;

  while(a * b < prod) {
    let c = a + b;
    a = b;
    b = c;
  }

  return [a, b, (a * b) === prod];
}

console.log(productFib(714));