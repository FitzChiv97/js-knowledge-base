//Sum of Odd Cubed Numbers
function cubeOdd(arr) {
  return (arr.some(el => typeof el !== 'number'))? undefined:
  arr.map(el => el ** 3).filter(el => el % 2).reduce((acc, el) => acc+=el,0);
}
console.log(cubeOdd([1, 2, 3, 4]));