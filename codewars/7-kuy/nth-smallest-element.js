// Nth Smallest Element (Array Series #4)
// https://www.codewars.com/kata/5a512f6a80eba857280000fc

function nthSmallest(arr, pos) {
  return arr
    .sort((a,b) => a - b)
    .find((_, id) => pos === id+1);
}