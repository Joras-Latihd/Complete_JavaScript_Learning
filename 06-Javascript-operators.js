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

/*
3. Comparison Operators
Compare two values and return a boolean (true or false).
== compares value only, after converting types if needed.
=== compares both value AND type, with no conversion — always
prefer === to avoid unexpected type-conversion bugs.
*/
let p = 5;
let q = "5";

console.log("Equal (==):", p == q);
console.log("Strict Equal (===):", p === q);
console.log("Not Equal (!=):", p != q);
console.log("Strict Not Equal (!==):", p !== q);
console.log("Greater Than (>):", p > 3);
console.log("Less Than (<):", p < 3);
console.log("Greater Than or Equal (>=):", p >= 5);
console.log("Less Than or Equal (<=):", p <= 4);

/*
4. Logical Operators
Combine or invert boolean expressions.
&& (AND) is true only if both sides are true.
|| (OR) is true if at least one side is true.
! (NOT) flips a boolean's value.
*/
let isLoggedIn = true;
let hasPermission = false;

console.log("AND (&&):", isLoggedIn && hasPermission);
console.log("OR (||):", isLoggedIn || hasPermission);
console.log("NOT (!):", !isLoggedIn);

/*
Short-Circuit Evaluation
&& returns the first falsy value, or the last value if all are truthy.
|| returns the first truthy value, or the last value if all are falsy.
This is often used to set fallback values or run conditional code.
*/
let username = "";
let displayName = username || "Guest";
console.log("Short-Circuit OR fallback:", displayName);

/*
5. Ternary Operator
A shorthand for a simple if-else statement, written in one line:
condition ? valueIfTrue : valueIfFalse
*/
let age = 18;
let canVote = age >= 18 ? "Yes, can vote" : "No, cannot vote";
console.log("Ternary:", canVote);

/*
Chained Ternary
Multiple conditions can be checked in sequence, though this should
be used sparingly - too many chained ternaries hurt readability.
*/
let score = 75;
let grade = score >= 90 ? "A" : score >= 75 ? "B" : score >= 50 ? "C" : "F";
console.log("Chained Ternary:", grade);