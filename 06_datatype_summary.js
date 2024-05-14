// ************************************primitive****************************************************

//  7 types: String, Number, Boolean, null, undefined, Symbol, BigInt 

const score = 100
const scoreValue = 100.3


const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 32346063416036163463151161642n



// ************************************Reference (Non primitive)*******************************************************

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name : "Santanu",
    age : 22,
}

const myFuction = function(){
    console.log("Hello World");
}