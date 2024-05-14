// +++++++++++++++++++++++ Stack (Primitive) ++++++++++++++++++++++

let myName = "Santanu"

let anotherName = myName
anotherName = "Suvam"

console.log(myName);
console.log(anotherName);


// ++++++++++++++++++++++ Heap (Non-primitive) ++++++++++++++++++++++

let userOne = {
    email : "santanu@google.com",
    upi : "sana@ybl"
}

console.log(typeof userOne);
let userTwo = userOne

userTwo.email = "san@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);