// Calculating with Functions
// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

function zero(calc) {
  if (calc) {
    let [key, value] = calc;
    if (key === 'plus') {return 0 + value};
    if (key === 'minus') {return 0 - value};
    if (key === 'times') {return 0 * value};
    if (key === 'dividedBy') {return Math.floor(0 / value)};
  }
  else return 0;
}

function one(calc) {
  if (calc) {
    let [key, value] = calc;
    if (key === 'plus') {return 1 + value};
    if (key === 'minus') {return 1 - value};
    if (key === 'times') {return 1 * value};
    if (key === 'dividedBy') {return Math.floor(1 / value)};
  }
  else return 1;
}

function two(calc) {
  if (calc) {
    let [key, value] = calc;
    if (key === 'plus') {return 2 + value};
    if (key === 'minus') {return 2 - value};
    if (key === 'times') {return 2 * value};
    if (key === 'dividedBy') {return Math.floor(2 / value)};
  }
  else return 2;
}

function three(calc) {
  if (calc) {
    let [key, value] = calc;
    if (key === 'plus') {return 3 + value};
    if (key === 'minus') {return 3 - value};
    if (key === 'times') {return 3 * value};
    if (key === 'dividedBy') {return Math.floor(3 / value)};
  }
  else return 3;
}

function four(calc) {
  if (calc) {
    let [key, value] = calc;
    if (key === 'plus') {return 4 + value};
    if (key === 'minus') {return 4 - value};
    if (key === 'times') {return 4 * value};
    if (key === 'dividedBy') {return Math.floor(4 / value)};
  }
  else return 4;
}

function five(calc) {
  if (calc) {
    let [key, value] = calc;
    if (key === 'plus') {return 5 + value};
    if (key === 'minus') {return 5 - value};
    if (key === 'times') {return 5 * value};
    if (key === 'dividedBy') {return Math.floor(5 / value)};
  }
  else return 5;
}

function six(calc) {
  if (calc) {
    let [key, value] = calc;
    if (key === 'plus') {return 6 + value};
    if (key === 'minus') {return 6 - value};
    if (key === 'times') {return 6 * value};
    if (key === 'dividedBy') {return Math.floor(6 / value)};
  }
  else return 6;
}

function seven(calc) {
  if (calc) {
    let [key, value] = calc;
    if (key === 'plus') {return 7 + value};
    if (key === 'minus') {return 7 - value};
    if (key === 'times') {return 7 * value};
    if (key === 'dividedBy') {return Math.floor(7 / value)};
  }
  else return 7;
}

function eight(calc) {
  if (calc) {
    let [key, value] = calc;
    if (key === 'plus') {return 8 + value};
    if (key === 'minus') {return 8 - value};
    if (key === 'times') {return 8 * value};
    if (key === 'dividedBy') {return Math.floor(8 / value)};
  }
  else return 8;
}

function nine(calc) {
  if (calc) {
    let [key, value] = calc;
    if (key === 'plus') {return 9 + value};
    if (key === 'minus') {return 9 - value};
    if (key === 'times') {return 9 * value};
    if (key === 'dividedBy') {return Math.floor(9 / value)};
  }
  else return 9;
}

function plus(num) {
  return ['plus', num];
}

function minus (num) {
  return ['minus', num];
}

function times(num) {
  return ['times', num];
}

function dividedBy(num) {
  return ['dividedBy', num];
}