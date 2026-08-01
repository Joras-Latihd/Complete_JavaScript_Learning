/*
1. Array Creation & Basic Access
An array is an ordered list of values, accessed by numeric index
starting at 0. Arrays can hold mixed data types, though it's best
practice to keep items the same type when possible.
*/
const colors = ["red", "green", "blue"];

console.log("First item:", colors[0]);
console.log("Last item:", colors[colors.length - 1]);
console.log("Array length:", colors.length);

/*
Modifying by Index
A specific element can be reassigned directly using its index.
*/
colors[1] = "yellow";
console.log("After modifying index 1:", colors);


/*
2. push / pop
push() adds a new item to the END of an array and returns the
new length. pop() removes the LAST item and returns that removed
item. Both modify the original array directly.
*/
const numbers = [1, 2, 3];

numbers.push(4);
console.log("After push:", numbers);

const removed = numbers.pop();
console.log("After pop:", numbers);
console.log("Removed item:", removed);