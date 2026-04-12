// Alphabet war(2 solutions)
// https://www.codewars.com/kata/59377c53e66267c8f6000027

function alphabetWar(fight){
  let leftSide = {
    w: 4,
    p: 3,
    b: 2,
    s: 1
  }

  let rightSide = {
    m: 4,
    q: 3,
    d: 2,
    z: 1
  }

  let arr = fight.split('');

  let leftPower = 0;
  let rightPower = 0;
  
  for(let [key,value] of Object.entries(leftSide)) {
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === key) leftPower += value;
    }
  }

  for(let [key,value] of Object.entries(rightSide)) {
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === key) rightPower += value;
    }
  }

  return (leftPower > rightPower)? "Left side wins!":
  (leftPower < rightPower)? "Right side wins!": "Let's fight again!";
}

/*
function alphabetWar(fight) {
  let rules = {w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1};
  let score = fight.split('').reduce((sum, el) => sum + (rules[el] || 0), 0);
  return (score > 0)? "Right side wins!":
  (score < 0)? "Left side wins!": "Let's fight again!";
}
*/

console.log(alphabetWar('zdqamwwpbs'));