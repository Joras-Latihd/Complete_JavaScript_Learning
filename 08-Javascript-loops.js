/*
1. for Loop
Repeats a block of code a set number of times. Made of three parts:
initialization (start), condition (when to stop), and increment
(what happens after each pass).
*/
for (let i = 1; i <= 5; i++) {
    console.log("for Loop:", i);
}


/*
2. while Loop
Repeats a block of code as long as a condition stays true.
Unlike for, there's no built-in initialization/increment - you
manage those manually, and must update the condition inside the
loop or it will run forever.
*/
let i = 1;

while (i <= 5) {
    console.log("while Loop:", i);
    i++;
}


/*
3. do-while Loop
Similar to while, but the code block runs once BEFORE the condition
is checked - so it always executes at least once, even if the
condition is false from the start.
*/
let j = 1;

do {
    console.log("do-while Loop:", j);
    j++;
} while (j <= 5);


/*
4. for...of Loop
Loops directly over the VALUES of an iterable - arrays, strings,
maps, sets, etc. Simpler than a regular for loop when you don't
need the index, just the items themselves.
*/
const fruits = ["apple", "banana", "mango"];

for (const fruit of fruits) {
    console.log("for...of Loop:", fruit);
}


/*
5. for...in Loop
Loops over the KEYS (property names) of an object - or the
INDEXES of an array. Mainly used for objects; for...of is
generally preferred for arrays since it gives values directly.
*/
const user = {
    name: "Saroj",
    age: 21,
    role: "Student"
};

for (const key in user) {
    console.log("for...in Loop:", key, "-", user[key]);
}