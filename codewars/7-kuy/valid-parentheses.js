// Valid Parentheses
// https://www.codewars.com/kata/6411b91a5e71b915d237332d

function validParentheses(parenStr) {
  let arr = parenStr.split('');

  let left = arr.indexOf('(');
  let right = arr.indexOf(')');

  while(arr.length !== 0) {
    if (arr[0] === '(' &&
        left !== -1 &&
        right !== -1) {
    arr.splice(arr.indexOf(')'),1);
    arr.shift();
      
    left = arr.indexOf('(');
    right = arr.indexOf(')');
    } else return false;
  }
  return true;
}

console.log(validParentheses('()()()(())'))