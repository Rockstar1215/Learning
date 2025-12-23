// (Goal: logic + understanding return, objects, this)

// M1. What is the output and WHY?
const makeUser = name => {
    name: name;
}

console.log(makeUser("Sam"));
// Output: Undefined
// because the function doesnt not return statement  plus it is object so after arrow function we need to use parenthesis () so that it will consider it returning the object otherwise it will consider it as a function body due to curly braces {}

// Fix:
const makeUserFixed = name => ({
    name: name
});

console.log(makeUserFixed("Sam"))
// Output: { name: 'Sam' }
// now ive used parenthesis so it will return the object

// M2. Correct object return
// Fix this function:
// const createUser = name => { name };
// Expected output:

// js
// Copy code
// { name: "Vikram" }

// Fix
const createUser = name => ({name: name});
console.log(createUser("Vikram"))

//Output: { name: 'Vikram' }


// M3. Method + this

// What will be logged?

// const person = {
//     name: "Ravi",
//     greet() {
//         console.log(this.name);
//     }
// };

// person.greet();

const person = {
    name: "Ravi",
    age: 28,
    greet() {
        console.log(this.name);
    }
};

person.greet();
// Output: Ravi
// because this refers to the current object which is person here so this.name will give Ravi

const result = person.greet.bind(person);
console.log(result)
// Output: ƒ greet() {
    //     console.log(this.name);
    // }

 const result1 = person.greet.bind(person)();
 // output: Ravi

 const result2 = person.greet.bind(person);
 result();
 // Output: Ravi

 const result3 = person.greet;
console.log(result3)
// Output: ƒ greet() {
//     console.log(this.name);
// }


// M4. Class understanding

// What does this print?

// class User {
//     constructor(name) {
//         this.name = name;
//     }
// }

// const u1 = new User("Emma");
// console.log(u1.name);
// Output: Emma

// Explanation: When we create an instance of the User class using new User("Emma"), the constructor is called with "Emma" as the argument. Inside the constructor, this.name is set to the value of the name parameter, which is "Emma". Therefore, when we log u1.name, it outputs "Emma".
class User {
    constructor(name) {
        this.name =name;
    }
}

const u1 = new User("Emma");
console.log(u1.name);
// Output: Emma

// M5. Default parameter

// What will be the output?

// const welcome = (name, msg = "Welcome!") => `${msg} ${name}`;
// console.log(welcome("Vikram"));
// console.log(welcome("Vikram", "Hi"));

const welcome = (name, msg= "Welcome!") => `${msg} ${name}`;
console.log(welcome("Vikram"))
// Output: Welcome! Vikram
console.log(welcome("Vikram", "Hi"))
// Output: Hi Vikram
