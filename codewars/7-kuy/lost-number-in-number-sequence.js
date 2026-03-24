// Lost number in number sequence
function findDeletedNumber(arr,mixArr) {
  return arr.find((el, id) => mixArr.indexOf(el) === -1) || 0;
}