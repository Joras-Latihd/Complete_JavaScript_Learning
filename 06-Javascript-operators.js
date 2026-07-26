/*
1. Arithmetic Operators
Used to perform mathematical calculations between two operands.
*/
let a = 10;
let b = 3;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder (Modulus):", a % b);
console.log("Exponent:", a ** b);

/*
Increment / Decrement
++ increases a value by 1, -- decreases it by 1.
Prefix (++a) updates first then returns the value.
Postfix (a++) returns the value first, then updates it.
*/
let count = 5;
console.log("Postfix++:", count++);
console.log("After Postfix++:", count);

let count2 = 5;
console.log("Prefix++:", ++count2);
console.log("After Prefix++:", count2);

/*
2. Assignment Operators
Used to assign values to variables. Compound assignment operators
combine an arithmetic operation with assignment in one step.
*/
let x = 10;

x += 5;
console.log("Add and Assign (+=):", x);

x -= 3;
console.log("Subtract and Assign (-=):", x);

x *= 2;
console.log("Multiply and Assign (*=):", x);

x /= 4;
console.log("Divide and Assign (/=):", x);

x %= 3;
console.log("Remainder and Assign (%=):", x);

x **= 2;
console.log("Exponent and Assign (**=):", x);


