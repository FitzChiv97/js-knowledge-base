// Human Readable Time (2 solutions)
// https://www.codewars.com/kata/52685f7382004e774f0001f7

function humanReadable (seconds) {
  let minutes = 0;
  let hours = 0;

  while(seconds >= 60) {
    seconds -= 60;
    minutes += 1;
  }
  
  while(minutes >= 60) {
    minutes -= 60;
    hours +=1;
  }

  return String(hours).padStart(2, '0') + ':' +
  String(minutes).padStart(2, '0') + ':' +
  String(seconds).padStart(2, '0');
}

/*
function humanReadable (seconds) {
  const pad = (x) => (x < 10)? '0' + x: x;
  
  return pad((seconds / 3600).toFixed(0)) + ':' +
  pad(((seconds / 60) % 60).toFixed(0)) + ':' + pad(seconds % 60);
}
*/

console.log(humanReadable(268022));