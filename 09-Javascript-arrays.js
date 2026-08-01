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