// Primes in numbers
// https://www.codewars.com/kata/54d512e62a5e54c96200019e

function primeFactors(n){
  let primes = [];

  for(let i = 2; n !== 1; i++) {
    if (n % i === 0) {
      n /= i;
      primes.push(i);
      i--;
    }
  }

  return primes.reduce((acc, el, id, arr) => {
    let lastGroup = acc[acc.length-1];

    if (lastGroup && lastGroup[0] === el){
      acc[acc.length-1].push(el);
    } else {
      acc.push([el]);
    }
    return acc;
    
  }, []).map((el) => {
    if (el.length > 1) return `(${el[0]}**${el.length})`;
    else return `(${el[0]})`;
  }).join('');
}

console.log(primeFactors(86240));