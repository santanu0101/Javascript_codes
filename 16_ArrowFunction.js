// ++++++++++++++++++++++++++++++++++ this keyword using +++++++++++++++++++++++++++++++++++++

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    },
    welcomeMessage2: () => {
        // console.log(`${this.username} , welcome to website`); // not to use arrow function
    }
}
user.welcomeMessage()

console.log(this);

// const user1 = "hello"
// const chai = () => {
    // console.log(this.user1); // not to use this in arrow function
// }

// ++++++++++++++++++++++++++++++++++++++++ Arrow Function ++++++++++++++++++++++++++++++++++++++++++++++++

const addTwo = (num1, num2)=> {
    return num1 + num2
}

// const addOne = (num1, num2) => num1 + num2
const addOne = (num1, num2) => (num1 + num2)
// const add = (num1, num2) => {username: "santanu"} // not to return object without parenthisis
const add = (num1, num2) => ({username: "santanu"})

console.log(addTwo(3, 4))
console.log(add(3, 4))

