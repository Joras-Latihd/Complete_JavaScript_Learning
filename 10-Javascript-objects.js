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




/*
2. Adding / Updating / Deleting Properties
Objects are mutable - properties can be added or changed anytime
just by assigning to them. The delete keyword removes a property
entirely from the object.
*/
const car = {
    brand: "Toyota",
    model: "Model1"
};

// Adding a new property
car.year = 2022;
console.log("After adding year:", car);

// Updating an existing property
car.model = "Model2";
console.log("After updating model:", car);

// Deleting a property
delete car.year;
console.log("After deleting year:", car);