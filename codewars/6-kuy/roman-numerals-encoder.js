// Roman Numerals Encoder
// https://www.codewars.com/kata/51b62bf6a9c58071c600001b

function solution(number){
  let arr = Array.from(String(number)).reverse();

  let romanNums = [
    ['','I','II','III','IV','V','VI','VII','VIII','IX'],
    ['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC'],
    ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM'],
    ['','M','MM','MMM'],
  ];

  return arr.map((num,id) => {
    return romanNums[id].find((_, idx) => num == idx);
  }).reverse().join('');
}

console.log(solution(3907));