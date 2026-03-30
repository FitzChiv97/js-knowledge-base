// Can you get the loop?
// https://www.codewars.com/kata/52a89c2ea8ddc5547a000863
// tag: Set
// tag: linked lists

function loop_size(node) {
  let loopedObjects = new Set();

  while(!loopedObjects.has(node)) {
    loopedObjects.add(node);
    node = node.next;
  }

  let loopStart = node;
  let count = 1;
  let current = loopStart.next

  while(current !== loopStart) {
    count++;
    current = current.next;
  }
  
  return count;
}