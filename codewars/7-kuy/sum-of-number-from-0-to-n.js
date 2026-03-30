// Sum of numbers from 0 to N
// https://www.codewars.com/kata/56e9e4f516bcaa8d4f001763

let SequenceSum = function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    if(!count) return '0=0';
    else if (count < 0) return `${count}<0`;
    else {
      let arr = Array.from(Array(++count), el => null);
      arr = arr.map((el, i) => {
        return el = i;
      })
      let sum = arr.reduce((sum, el) => sum += el, 0);
      return arr.join('+') + ` = ${sum}`;
    }
  };

  return SequenceSum;
}();

console.log(SequenceSum.showSequence(6));
console.log(SequenceSum.toString());