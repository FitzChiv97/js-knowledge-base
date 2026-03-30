// Lost number in number sequence
// https://www.codewars.com/kata/595aa94353e43a8746000120

function findDeletedNumber(arr,mixArr) {
  return arr.find((el, id) => mixArr.indexOf(el) === -1) || 0;
}