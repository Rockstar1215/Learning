// (Goal: deep understanding + React readiness mindset)

// H1. Identify the mistake

// Why does this return undefined?

// const getUser = name => {
//     name: name
// };

const getUser = name => {
    name: name;
}

console.log(getUser("Vikram"))
// it resturns undefined because in the function body we are not using parenthesis to return the object so JS thinks it is a function body due to curly braces {} and there is no return statement so it returns undefined

// Fix:
const getUserFixed = name => ({
    name: name
})
console.log(getUserFixed("Vikram"))
// Output: { name: 'Vikram' }

const getUserFixed1 = name => {
    return {name: name }
    
}
console.log(getUserFixed1("Viks"))
// Output : { name: 'Viks' }


// H2. Predict output
// const a = () => 5;
// const b = () => { 5 };

// console.log(a());
// console.log(b());

const a = () => 5;
console.log(a())
// Output: 5

const b = () => { 5 };
console.log(b())
// Output: undefined because we are not returing anything from funtion b so its returned underfined either we can use parenthesis to return object or use return statement

//Fix:
const b1 = () => ({ value: 5 });
console.log(b1())
// Output: { value: 5 }

const b2 = () => {
    return 5;
}
console.log(b2())
// Output: 5    

// H3. Object + arrow function

// Write an arrow function that:

// takes title

// returns { title, completed: false }

// uses shortest syntax

const createTask = (title, completed = false) => {
    return { title, completed: completed };
}
console.log(createTask("Learn React"))
// Output: { title: 'Learn React', completed: false }

// Shortest syntax
const createTask1 = title => ({ title, completed: false });
console.log(createTask1("Learn JavaScript"))
// Output: { title: 'Learn JavaScript', completed: false }

const createTask2 = (title, completed = false) => ({ title, completed});
console.log(createTask2("Test"))
// Output: { title: 'Test', completed: false }

const createTask3 = (title, completed) => ({ title: title, completed: completed})
console.log(createTask3("Demo", true))
// Output: { title: 'Demo', completed: true }

const createTask4 = (title, completed = false ) => ({ title: title, completed: completed});
console.log(createTask4("Sample"))
// Output: { title: 'Sample', completed: false }
console.log(createTask4("Testing",true))
// Output: { title: 'Testing', completed: true }



// H4. Method reference trap

// What happens here?

// const user = {
//     name: "Viks",
//     greet() {
//         console.log(this.name);
//     }
// };

// const greetFn = user.greet;
// greetFn();

const user = {
    name: "Viks",
    greet() {
        console.log(this.name);
    }
};

const greetFn = user.greet;
// greetFn();
// Output: undefined because when we are calling greetFn() the this keyword is not bound to user object so it returns undefined

// Fix using bind
const greetFnFixed = user.greet.bind(user);
greetFnFixed();
// Output: Viks

// Fix using arrow function
const greetFnFixed1 = () => user.greet();
greetFnFixed1();

const greetFnFixed2 = function() {
    return user.greet();
}
greetFnFixed2();
// Output: Viks

// Fix using call
const greetFnFixed3 = user.greet.call(user);
// Output: Viks

const greetFnFixed4 =  user.greet.apply(user);
// Output: Viks

// greetFnFixed4();
// when using .bind() then only call function ex: greetFnFixed4(); otherwise no need to call function when using .call() or .apply()


// H5. Class enhancement

// Extend this class:

// class Product {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }
// }


// Add:

// method getDetails()
// Output format:

// Product: Laptop - ₹50000

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
}
getDetails(){
    return ` Product: ${this.name} - Rs${this.price}`;
}
}

const product= new Product("Laptop", 50000);
console.log(product)
console.log(product.name)
console.log(product.price)
console.log(product.getDetails())
// Output: Product: Laptop - Rs50000