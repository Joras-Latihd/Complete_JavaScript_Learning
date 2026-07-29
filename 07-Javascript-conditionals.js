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


/*
2. switch Statement
Compares one value against multiple possible cases using strict
equality (===). Useful as an alternative to long if-else if chains
when checking a single variable against many fixed values.
*/
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Sunday";
        break;
    case 2:
        dayName = "Monday";
        break;
    case 3:
        dayName = "Tuesday";
        break;
    case 4:
        dayName = "Wednesday";
        break;
    default:
        dayName = "Invalid day";
}

console.log("Switch:", dayName);

/*
break Keyword
Stops the switch from checking further cases once a match is found.
Without break, execution "falls through" into the next case even
if it doesn't match - usually not what you want.
*/