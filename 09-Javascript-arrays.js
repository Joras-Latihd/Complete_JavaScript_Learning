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


/*
3. shift / unshift
shift() removes the FIRST item from an array and returns it.
unshift() adds a new item to the BEGINNING of an array and returns
the new length. Both are slower than push/pop on large arrays,
since every other item has to shift position.
*/
const queue = ["b", "c", "d"];

queue.unshift("a");
console.log("After unshift:", queue);

const firstRemoved = queue.shift();
console.log("After shift:", queue);
console.log("Removed item:", firstRemoved);


/*
4. slice / splice
slice(start, end) returns a NEW array containing a portion of the
original, WITHOUT modifying it. The "end" index is not included.

splice(start, deleteCount, ...items) MODIFIES the original array
directly - it can remove items, insert items, or both at once.
*/
const letters = ["a", "b", "c", "d", "e"];

const sliced = letters.slice(1, 3);
console.log("slice result:", sliced);
console.log("Original after slice (unchanged):", letters);

const spliceRemoved = letters.splice(1, 2, "x", "y");
console.log("Original after splice:", letters);
console.log("Removed by splice:", spliceRemoved);


/*
5. indexOf / includes
indexOf() returns the FIRST index where a value is found, or -1
if it doesn't exist. includes() returns a simple true/false instead
- use includes() when you only need to know IF something exists,
not WHERE.
*/
const animals = ["cat", "dog", "rabbit", "dog"];

console.log("indexOf 'dog':", animals.indexOf("dog"));
console.log("indexOf 'fox' (not found):", animals.indexOf("fox"));
console.log("includes 'rabbit':", animals.includes("rabbit"));
console.log("includes 'fox':", animals.includes("fox"));