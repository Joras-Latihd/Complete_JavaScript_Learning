/*
1. if / else if / else
Runs different blocks of code depending on which condition is true.
Conditions are checked top to bottom - the first true one runs,
and the rest are skipped.
*/
let marks = 72;

if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 75) {
    console.log("Grade: B");
} else if (marks >= 50) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}


/*
Simple if (no else)
Runs the block only if the condition is true - nothing happens
if it's false, since there's no fallback.
*/
let isRaining = true;

if (isRaining) {
    console.log("Take an umbrella");
}