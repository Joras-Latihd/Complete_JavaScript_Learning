/*
1. Object Creation & Property Access
An object stores data as key-value pairs. Values can be accessed
using DOT notation (obj.key) or BRACKET notation (obj["key"]).
Bracket notation is required when the key is stored in a variable,
or when the key has spaces/special characters.
*/
const person = {
    name: "Saroj",
    age: 21,
    isStudent: true
};

console.log("Dot notation:", person.name);
console.log("Bracket notation:", person["age"]);

const key = "isStudent";
console.log("Bracket notation with variable key:", person[key]);