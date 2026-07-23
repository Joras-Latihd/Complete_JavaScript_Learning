/*
1. Function Declaration
The standard way to define a named, reusable block of code.
Declarations are hoisted, meaning they can be called even before
their definition appears in the file.
*/
function addNumbers(num1, num2){
    let sum = num1 + num2;
    console.log("Declaration:", sum);
}
addNumbers(10, 20);


/*
2. Function Expression
A function stored in a variable instead of given a name directly.
Unlike declarations, expressions are NOT hoisted — they only exist
after this line runs.
*/
const multiplyNumbers = function(num1, num2){
    let product = num1 * num2;
    console.log("Expression:", product);
};
multiplyNumbers(4, 5);


/*
3. Arrow Function
A shorter syntax for writing function expressions.
Best suited for short, simple functions.
Shorthand version: if the body is a single line that returns a value,
the braces and "return" keyword can be dropped.
*/
const subtractNumbers = (num1, num2) => {
    let difference = num1 - num2;
    console.log("Arrow:", difference);
};
subtractNumbers(20, 8);

const square = num => num * num;
console.log("Arrow shorthand:", square(6));


/*
4. Return Statement
"return" sends a value back out of the function so it can be stored,
logged, or reused elsewhere — unlike console.log, which only prints
and gives nothing back to use.
*/
function divideNumbers(num1, num2){
    return num1 / num2;
}
let result = divideNumbers(50, 5);
console.log("Return:", result);


/*
5. Default Parameters
Assigns a fallback value to a parameter if no argument is passed
when the function is called.
*/
function greetUser(name = "Guest"){
    console.log("Default Parameter:", "Hello, " + name);
}
greetUser();
greetUser("Alex");


/*
6. Rest Parameters
Collects any number of arguments into a single array using "...".
Useful when the number of values being passed in isn't fixed.
*/
function sumAll(...numbers){
    let total = numbers.reduce((acc, n) => acc + n, 0);
    console.log("Rest Parameter:", total);
}
sumAll(1, 2, 3, 4, 5);


/*
7. Anonymous Function
A function with no name, usually passed directly into another
function or assigned on the spot rather than declared separately.
*/
setTimeout(function(){
    console.log("Anonymous Function: ran after 1 second");
}, 1000);


/*
8. Callback Function
A function passed as an argument to another function, to be run
later by that function. Common in event handling and async work.
*/
function processUserInput(callback){
    let name = "Sam";
    callback(name);
}
processUserInput(function(name){
    console.log("Callback:", "Processed name - " + name);
});


/*
9. Function Returning a Function (Closure)
A function can return another function. The inner function "remembers"
the outer function's variables even after the outer function has
finished running — this behavior is called a closure.
*/
function multiplierFactory(multiplier){
    return function(num){
        return num * multiplier;
    };
}
const double = multiplierFactory(2);
console.log("Function Returning Function:", double(9));


/*
10. IIFE (Immediately Invoked Function Expression)
A function that runs immediately after it's defined, without needing
to be called separately. Useful for running setup code once, without
leaving variables in the global scope.
*/
(function(){
    console.log("IIFE: runs immediately on page load");
})();