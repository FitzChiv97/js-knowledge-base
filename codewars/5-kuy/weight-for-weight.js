// Weight for weight
// https://www.codewars.com/kata/55c6126177c9441a570000cc

function orderWeight(str) {
  return str.trim().split(/\s+/).sort((a,b) => {
    let sumA = a.split('').reduce((sum, el) => sum += Number(el), 0);
    let sumB = b.split('').reduce((sum, el) => sum += Number(el), 0);

    return (sumA - sumB == 0)? a.localeCompare(b): sumA - sumB;
  }).join(' ');
}
console.log(orderWeight("  103 123  4444 99   2000   "));