// Next bigger number with the same digits
// https://www.codewars.com/kata/55983863da40caa2c900004e

function nextBigger(n) {
  let leftPart = [...String(n)];

  //find the first num that is smaller than the num after it
  let breakPointId = leftPart.findLastIndex((el,id,arr) => {
    return el > arr[id - 1];
  });

  if (breakPointId === -1) return breakPointId;

  //splice array at breakPoint 
  let rightPart = leftPart.splice(breakPointId);
  let breakPoint = leftPart.pop();

  //find the number that is biggerThanBreakPoint
  let biggerThanBreakPoint = rightPart
    .sort()
    .splice(rightPart.findIndex(el => el > breakPoint), 1);

  //add breakPoint to the rightPart and sort it in ascending order
  rightPart.push(breakPoint);
  rightPart.sort();

  return +[...leftPart, ...biggerThanBreakPoint, ...rightPart].join('');
}

console.log(nextBigger(1234567890));
// inputs: 1897, 281, 5349761, 2890
// 1897(expected 1987 => 1978) or 2890(expected 2980 => 2908)

/*
1 - Scan from right to left, look for the first digit that is smaller than the digit after it.
2 - Among the digits to the right, what is the smallest digit that is bigger than this digit?
*/