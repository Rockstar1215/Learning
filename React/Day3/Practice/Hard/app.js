// Hard 5 Practice Questions
// H1
const user = {
    name: "A",
    address: {
        city: "Delhi",
        pin: 110001
    }
};

// create a deep copy without using JSON methods
const deepCopyUser = {
    ...user,
    address: {
        ...user.address
    }
}
deepCopyUser.address.city = "Mumbai";

console.log(`user.address.city: ${user.address.city}`); // Delhi
console.log(`deepCopyUser.address.city: ${deepCopyUser.address.city}`); // Mumbai

console.log(" ")
console.log(" ")

// H2
// Implement your own map function
function myMap(arr, callback) {
    let result = [];
    for (let i = 0; i< arr.length; i++) {
        result.push(callback(arr[i], i, arr));
    }
    return result;
}
const output = myMap([1,2,3], n => n * 2);
console.log(output); // [2,4,6]

// Explanation: The myMap function takes an array and a callback function as arguments. It iterates over each element of the array, applies the callback to it, and stores the result in a new array which is returned at the end.

console.log(" ")
console.log(" ")

// H3
const person = {
    name: "Raj",
    greet() {
        console.log(this.name);
    }
};

const greetFn = person.greet;
// greetFn(); // Output: undefined

// Fixing the this context issue using bind
const boundGreetFn = person.greet.bind(person);
boundGreetFn(); // Output: Raj

console.log(" ")
console.log(" ")


// H4
function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Data loaded"), 1000);
    });
}

console.log(fetchData()); // Output: Promise { <pending> }

// Print result using .then()
fetchData().then(data => console.log(data)); // Output: Data loaded
// here if we directly called fetchdata() inside clg, it would print the promise { <pending> } because the promise is not yet resolved at that time.
// so we use .then() to wait for the promise to resolve and then log the data.

console.log(" ")
console.log(" ")

// H5
const users = [
    { id: 1, name: "A", active: true },
    { id: 2, name: "B", active: false },
    { id: 3, name: "C", active: true }
];

function getActiveUserNames(users) {
    return users.filter(user => user.active === true).map(user => user.name);
}
console.log(getActiveUserNames(users));
// Output: [ 'A', 'C' ]

// Explanation: The getActiveUserNames function first filters the users array to include only active users, and then maps over the filtered array to extract their names.
console.log(" ")
console.log(" ")
