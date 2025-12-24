// Hard 5 Practice Questions
// (Goal: React mindset + real-world logic)

// H1. Mutation bug (React-style)
const hobbies = ["Sports", "Cooking"];
const updateHobbies = hobbies.push("Reading");

console.log(hobbies); // ["Sports", "Cooking", "Reading"]
console.log(updateHobbies); // 3

// In React, we should avoid mutating state directly. 
// Here, push() mutates the original array and returns the new length.
// Instead, we should use non-mutating methods like concat() or spread operator.

const newHobbies = [...hobbies, "Traveling"];
console.log(newHobbies); // ["Sports", "Cooking", "Reading", "Traveling"]
console.log(hobbies); // ["Sports", "Cooking", "Reading"]
console.log(" ")
console.log(" ")

const concatHobbies = hobbies.concat("Gaming");
console.log(concatHobbies); // ["Sports", "Cooking", "Reading", "Gaming"]
console.log(hobbies); // ["Sports", "Cooking", "Reading"]
console.log(" ")
console.log(" ")
// mutating is dangerous in react because react render the ui based on reference of the state
// if we mutate the state directly react may not detect the change and may not re-render the component
// hence always use non-mutating methods to update state in react

// H2. map + filter combo

// Given:
// const numbers = [1, 2, 3, 4, 5, 6];

// Create a new array that:

// keeps only even numbers

// multiplies them by 10

// Expected output:

// [20, 40, 60]

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0).map(num => num * 10);
console.log(evenNumbers); // [20, 40, 60]
console.log(" ")
console.log(" ")

// H3. reduce() understanding
// const values = [2, 4, 6];
// const total = values.reduce((acc, val) => acc + val, 0);


// What is total?

// What does acc represent?

// What happens if 0 is removed?

const values = [1, 2, 3];
const total = values.reduce((acc, val) => acc +  val, 0);
console.log(total); // 6
// acc represents the accumulator which accumulates the result of the reduction
// if 0 is removed the first element of the array will be used as the initial value of acc
// so the result will be same in this case but it may lead to unexpected results in other cases
console.log(" ")
console.log(" ")


// H4. forEach() vs map()
// Why is this wrong?

// const nums = [1, 2, 3];
// const result = nums.forEach(n => n * 2);
// console.log(result);


// What is result?

// What should be used instead?

const nums = [1, 2, 3];
const result = nums.forEach(n => n * 2);
console.log(result);


const correctResult = nums.map( num => num * 2);
console.log(correctResult); // [2, 4, 6]
// result is undefined because forEach does not return anything
// map should be used instead as it returns a new array with the results of calling a provided function on every element in the calling array
console.log(" ")
console.log(" ")


// H5. Real React-style task

// You receive this array from an API:
// const tasks = ["Learn JS", "Learn React", "Build Project"];
// Convert it into:

// js
// Copy code
// [
//   { title: "Learn JS", completed: false },
//   { title: "Learn React", completed: false },
//   { title: "Build Project", completed: false }
// ]
// ➡️ Use map()
// ➡️ Do not mutate the original array

const tasks = ["Learn Js", "Learn React", "Build Project"];
const taskObject =  tasks.map(task => ({ title: task, completed: false}));
console.log(taskObject);
// original array unchanged
console.log(tasks); // ["Learn JS", "Learn React", "Build Project"]
console.log(" ")
console.log(" ")