// Sum of a sequence
// https://www.codewars.com/kata/586f6741c66d18c22800010a

function sequenceSum (begin, end, step) {
  if(end < begin) return 0;

  let sum = begin;
  let nextStep = begin + step;

  while(nextStep <= end){
    sum += nextStep;
    nextStep += step;
  }

  return sum;
}