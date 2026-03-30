// Valid Braces
// https://www.codewars.com/kata/5277c8a221e209d3f6000b56

function validBraces(braces){
  let validBraces = ['()','[]','{}'];

  function removeBraces(braces, validBracesId) {
    braces = braces.split('');
    braces.splice(validBracesId, 2);
    return braces.join('');
  }

  while (braces.length > 0) {
    let validBracesId = -1;

    for(let el of validBraces) {
      if (braces.indexOf(el) > -1) {
        validBracesId = braces.indexOf(el);
        braces = removeBraces(braces, validBracesId);
      };
    }

    if (validBracesId < 0) return false;
  }

  return true;
}

console.log(validBraces('([{}])'));