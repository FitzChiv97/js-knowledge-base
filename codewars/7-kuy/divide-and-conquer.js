// Divide and Conquer
// https://www.codewars.com/kata/57eaec5608fed543d6000021

function divCon(x){
  return x.reduce(function (sum, acc) {
   return typeof acc === 'string' ? sum -= acc: sum += acc;
  }, 0);
}