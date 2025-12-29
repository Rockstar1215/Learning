// Medium 5 Practice Questions
// M1
const users = [
    { name: "A", age: 20},
    {name: "B", age: 30}
];

console.log(users)
console.log(" ")

const userDescriptions = users.map(user => `${user.name} is ${user.age}`);
console.log(userDescriptions); // Output: [ 'A is 20', 'B is 30' ]
console.log(" ")

// M2
const numbers = [ 10, 15, 20, 25, 30];
const filteredNumbers = numbers.filter(num => num % 10 === 0);
console.log(filteredNumbers); // Output: [10, 20, 30]
console.log(" ")

// M3
const user = {
    id: 1,
    profile: {
         userName: "john",
         email: "john@test.com"
    }
};

const { userName, email } = user.profile;
console.log(userName); // Output: john
console.log(email); // Output:
console.log(" ");

// M4
function multiplier(x) {
    return function (y) {
        return x * y;
    }
}

const double = multiplier(2);
console.log(double(5)); // Output: 10
console.log(" ")


// M5
const user1 = {
    name: "Alex",
    skills: ["JavaScript", "React"]
};

const copy = {...user1 };
copy.skills.push("Node.js");

console.log(user1.skills); // Output: [ 'JavaScript', 'React', 'Node.js' ]
console.log(copy.skills); // Output: [ 'JavaScript', 'React', 'Node.js' ]
console.log(" ")

// why users.skills also changed because the skills array is still referenced in both user1 and copy.

// To fix this, we need to create a shallow copy of the skills array as well
const user2 = {
    name: "Alex",
    skills: ["JavaScript", "React"]
};

const copy2 = {...user2, skills: [...user2.skills] };
copy2.skills.push("Node.js");

console.log(user2.skills); // Output: [ 'JavaScript', 'React' ]
console.log(copy2.skills); // Output: [ 'JavaScript', 'React', 'Node.js' ]
console.log(" ")

// M6
const products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 20000 },
    { name: "Tablet", price: 30000 }
];

const mapFilterProducts = products.filter(p => p.price > 25000).map(p => p.name);
console.log(mapFilterProducts); // Output: [ 'Laptop', 'Tablet' ]
console.log(" ")

// M7
function outer() {
    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

const counter = outer();
counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3

console.log(" ")
console.log(" ")
// Explaination: the inner function is called within out function, it has access to the count variable defined in the outer function's scope. Each time inner is invoked, it increments count and logs the updated value. 


