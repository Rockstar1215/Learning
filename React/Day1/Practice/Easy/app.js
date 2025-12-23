// (Goal: syntax confidence + basics)

//E1 Output prediction
// What will be printed?

// const greet = name => `Hello ${name}`;
// console.log(greet("Vikram"));

// Answer
const greet = name => `Hello ${name}`;
console.log(greet("Vikram"));
// Output: Hello Vikram


//E2 Fix the bug
// This should return 10. Fix it.

// const add = (a, b) => {
//     a + b;
// };

// Answer
const add = (a,b) => {
    return a + b;
};

console.log(add(5,5));
// Output: 10

// E3 Arrow function shortcut
// Convert this into one-line arrow function:

// function square(num) {
//     return num * num;
// }

// Answer
const square = num => num * num;

console.log(square(2))


// E4. Object access

// Given:

// const user = { name: "Alex", age: 25 };


// How do you print:

// name

// age

const user =  { name: "Alex", age: 25 };
console.log(user);
console.log(user.name)
console.log(user.age)

const user1 = { name: "Alex", age: 25, greet() {
    console.log("Hello,"+ this.name)
} };

console.log(user1.greet)
//output: of function reference
// ƒ greet() {
//     console.log("Hello,"+ this.name)
// }


console.log(user1.greet())

// output of function call
//Hello,Alex


