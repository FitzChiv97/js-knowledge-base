// Sum of Cubes
// https://www.codewars.com/kata/59a8570b570190d313000037
function sumCubes(n) {
  return (n === 1)? n: ((n ** 3) + sumCubes(n - 1));
}