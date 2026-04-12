// Write Number in Expanded Form
// https://www.codewars.com/kata/5842df8ccbd22792a4000245

function expandedForm(num) {
  let arr = Array.from(String(num)).reverse();

  return arr.map((el, id) => el.padEnd(id + 1, "0"))
  .filter(el => el != 0)
  .reverse()
  .join(' + ');
}

console.log(expandedForm(70304));