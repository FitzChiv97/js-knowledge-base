// Bouncing Balls
// https://www.codewars.com/kata/5544c7a5cb454edb3c000047

function bouncingBall(h,  bounce,  window) {
  if (h <= 0 || bounce >= 1 || bounce <= 0 || window >= h) return -1;

  let percent = bounce * 100;
  h = Number((h * percent / 100).toFixed(2));

  return (h > window)? 2 + bouncingBall(h, bounce, window): 1;
}

console.log(bouncingBall(3, 0.66, 1.5));