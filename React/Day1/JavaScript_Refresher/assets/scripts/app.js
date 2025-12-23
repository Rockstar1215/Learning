import  apiKey  from "./util.js ";
console.log("API Key", apiKey) 

let userMessage = "Welcome to React World!";
userMessage = "Have a great time learning React!";
userMessage = "React is awesome!";

const userMessage1 = "Enjoy your stay!";
 
console.log(userMessage)
console.log(userMessage1)
console.log(userMessage1)

console.log("hello" + "World");
console.log(10 + 5);

console.log(`Hello World!`);
console.log(`The sum of 10 and 5 is ${10 + 5}`);
console.log("The sum of 10 and 5 is", 10 + 5);
console.log(` The sum of 10 and 5 is ${10 +5}`); 

if(10 === 10) {
    console.log("Ten equals Ten");
}
else {
    console.log("Ten does not equal ");
}

function greet() {
    console.log("Hello");
}

greet();
greet();

function greetUser(userName, message) {
    console.log(userName);
    console.log(message);
}

greetUser("Alice", "Welcome to React!");
greetUser("Bob", "Have a great time learning React!");

function add(a, b) {
    return a + b;
}

let sum1 = add(10, 5);
let sum2 = add(20, 30);

console.log("Sum1:", sum1);
console.log("Sum2:", sum2);

function mutliply(a, b = "Hello!"){
    return "Hi I am" + a + ". " + b;
}

console.log(mutliply(" Alice "));
console.log(mutliply(" Alice1 ", "How are you?"))

const square = (num) => {
    return num * num;
}

const square1 = num => num* num;

console.log("Square of 4:", square(4));
console.log("Square of 5:", square1(5));    

const welcome = (name) => {
    return `Welcome, ${name}!`;
}
console.log(welcome("Charlie"));

const welcome1 = name => `Welcome, ${name}!`;
console.log(welcome1("David"));

const welcome3 = name =>
{
    console.log("Welcome "+ name);
}

const welcome4 = name => console.log("Welcome "+ name);


const double = num => num *2;

const double1 = num => {
    return num * 2;
}

const makeUser = name => ({
    name: name
});

const a = () => 5;


const title = title => ({
    title: title,
    completed: false
})

const user = {
    name: "Viks",
    age: 34
}

console.log(user)


const user1 = {
    name: "DJ",
    age: 20,
    greet() {
        console.log("Hello, " + this.name);
    }
};

console.log(user1)
console.log(user1.name);
user1.greet();
console.log(user1.age)
console.log(user1.greet)


class User{
constructor(name, age){
    this.name = name;
    this.age = age;
}

greet() {
    console.log("Hii");
}
}

const user2 = new User("Emma", 28);
console.log(user2);
console.log(user2.name);
console.log(user2.age);
user2.greet();




const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    getInfo(){

    }
}