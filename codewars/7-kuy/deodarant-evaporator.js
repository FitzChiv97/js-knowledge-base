// Deodorant Evaporator
// https://www.codewars.com/kata/5506b230a11c0aeab3000c1f

function evaporator(content, evapPerDay, threshold) {
  threshold = content / 100 * threshold;
  let days = 0;

  while (content > threshold) {
    content -= (content / 100 * evapPerDay);
    days++;
  };

  return days;
}

console.log(evaporator(10, 10, 5));