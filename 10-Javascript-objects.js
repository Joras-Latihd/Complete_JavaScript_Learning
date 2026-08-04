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




/*
3. Object Methods & this
A method is a function stored as an object's property. Inside a
regular (non-arrow) method, "this" refers to the object the method
was called on - letting the method access that object's own data.
*/
const student = {
    name: "Alex",
    marks: 85,
    getSummary: function(){
        return this.name + " scored " + this.marks;
    }
};

console.log("Method result:", student.getSummary());

/*
Arrow Functions and this
Arrow functions do NOT have their own "this" - they inherit it from
the surrounding scope. This means arrow functions usually don't
work as expected when used as object methods.
*/
const brokenExample = {
    name: "Sam",
    getName: () => {
        return this.name;
    }
};
console.log("Arrow method (this is undefined here):", brokenExample.getName());




/*
4. Object.keys
Returns an array containing only the PROPERTY NAMES (keys) of an
object. Useful since objects themselves can't be looped over
directly with array methods.
*/
const book = {
    title: "1984",
    author: "George Orwell",
    year: 1949
};

console.log("Object.keys:", Object.keys(book));

/*
Object.values
Returns an array containing only the VALUES of an object's
properties, in the same order as Object.keys.
*/
console.log("Object.values:", Object.values(book));

/*
Object.entries
Returns an array of [key, value] pairs - combining what keys()
and values() give separately. Commonly paired with for...of and
array destructuring to loop through both at once.
*/
console.log("Object.entries:", Object.entries(book));

for (const [key, value] of Object.entries(book)) {
    console.log(key + ":", value);
}




/*
5. Nested Objects
Objects can contain other objects as property values, letting you
model more complex, real-world data. Access nested values by
chaining dot notation deeper, level by level.
*/
const company = {
    name: "TechCorp",
    address: {
        city: "Kathmandu",
        country: "Nepal"
    },
    employee: {
        name: "Saroj",
        role: "Frontend Developer"
    }
};

console.log("Nested access:",)




/*
6. Object Destructuring
A shorthand way to pull specific properties out of an object into
their own variables, instead of accessing them one by one with
dot notation.
*/
const profile = {
    username: "saroj_dev",
    followers: 120,
    verified: false
};

const { username, followers } = profile;
console.log("Destructured username:", username);
console.log("Destructured followers:", followers);

/*
Renaming while Destructuring
A property can be extracted into a variable with a DIFFERENT name
using the colon syntax - useful to avoid naming conflicts.
*/
const { username: handle } = profile;
console.log("Renamed destructure:", handle);

/*
Default Values while Destructuring
If a property doesn't exist on the object, a default value can be
provided instead of getting undefined.
*/
const { location = "Unknown" } = profile;
console.log("Default value destructure:", location);




/*
7. Spread Operator with Objects
The ...spread syntax copies all properties from one object into
a new one. Commonly used to clone an object, or to merge/override
properties without mutating the original.
*/
const baseSettings = {
    theme: "dark",
    notifications: true
};

// Cloning an object
const clonedSettings = { ...baseSettings };
console.log("Cloned object:", clonedSettings);