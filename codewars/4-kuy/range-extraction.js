// Range Extraction
// https://www.codewars.com/kata/51ba717bb08c1cd60f00002f

function solution(list){
  let range = [];

  outer: for(let i = 0; i < list.length; i++) {
    console.log(`start: ${list[i]}`);
    console.log(`list: ${list}`);
    console.log(`i: ${i}`);
    if (list[i+1] - list[i] === 1) {
      console.log(list[i]);
      continue outer;
    } else if (i > 1) {
      console.log(`range end: ${list[i]}`);

      range.push(`${list[0]}-${list[i]}`);
      console.log(range);

      console.log('splicing');
      console.log(list.splice(0, i+1));

      i = -1;
    } else {
      range.push(list.splice(0, i+1).join(','));
      console.log(range);
      i = -1;
    }; 
  };

  return range.join(',');
};

console.log(solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20, 24, 27]));