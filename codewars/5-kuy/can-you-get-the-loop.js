//Can you get the loop?
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