// Bumps in the Road
// https://www.codewars.com/kata/57ed30dde7728215300005fa

function bump(x){
  let bumps = x.replaceAll('_', '').length;
  return (bumps <= 15)? "Woohoo!": "Car Dead";
}

console.log(bump("__nn_nnnn__n_n___n____nn__nnn"));