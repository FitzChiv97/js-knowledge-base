// Playing with digits (2 solutions in one function)
// https://www.codewars.com/kata/5552101f47fc5178b1000050

function digPow(n, p){
  let arr = String(n).split('');
  // let arr = Array.from(String(n), n => Number(n));

  const sum = arr.reduce((sum, num, i) => {
    return sum += Math.pow(num, p + i);
  }, 0);

  // for(let i = 1; i * n <= sum; i++) {
  //   if (i * n === sum) return i;
  // }

  return (sum % n)? -1: sum / n;
}

console.log(digPow(46288, 3));