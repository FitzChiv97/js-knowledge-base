// Take a Num And Sum Its Digits Raised To The Consec Powers (2 solutions)
// https://www.codewars.com/kata/5626b561280a42ecc50000d1

function sumDigPow(a, b) {
  let arr = [];

  for(let i = a; i <= b; i++) {
    let num = Array.from(String(i), el => Number(el));
    let pow = num.reduce((sum, el, id) => sum + (el ** (id+1)), 0);

    if(pow === i) arr.push(i);
  }

  return arr;
}

/*
function sumDigPow(a, b) {
  let arr = [];

  for(let i = a; i <= b; i++) {
    arr.push(i);
  }

  return arr.filter((num) => {
    let array = Array.from(String(num), el => Number(el));
    let pow = array.reduce((sum, el, id) => sum + (el ** (id+1)), 0);
    return num === pow;
  })
}
*/
console.log(sumDigPow(85, 136));