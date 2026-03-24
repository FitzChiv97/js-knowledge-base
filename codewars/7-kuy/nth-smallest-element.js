// Nth Smallest Element (Array Series #4)
function nthSmallest(arr, pos) {
  return arr
    .sort((a,b) => a - b)
    .find((_, id) => pos === id+1);
}