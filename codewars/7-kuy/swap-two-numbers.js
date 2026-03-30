// Swap two numbers (2 solutions)
// https://www.codewars.com/kata/586ed14c35396d912100049a
// tag: destructuring

// let swap = ary => ary.reverse();
let swap = ary => [ary[0], ary[1]] = [ary[1], ary[0]];