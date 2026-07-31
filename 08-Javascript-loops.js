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