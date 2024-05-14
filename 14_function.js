function sayMyName() {
    console.log("S")    
    console.log("a")    
    console.log("n")    
    console.log("t")    
    console.log("a")    
    console.log("n")    
    console.log("u")    
}

// sayMyName()

function addTwoNumbers(number1, number2) {

    // console.log(number1 + number2);
    let result = number1 + number2;
    return result
}

const result = addTwoNumbers(3, 4);

// console.log("Result: ",result);

function loginUserMessage(username = "sam"){
    if(username === undefined){
        console.log("please enter the username");
        return
    }
    return `${username} just log in`
}

console.log(loginUserMessage("santanu"));
// console.log(loginUserMessage());

// ... is a rest operator and spraied
function calculateCartPrice(...num1) {
    return num1
}

console.log(calculateCartPrice(2200, 400 ,500))

const obj = {
    username: "santanu",
    price: 200
}

function handleObject(anyobject) {
    console.log(`user is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(obj)
handleObject({
    username: "santanu",
    price:899
})


const myArray = [200, 100, 300]

function arrayPrint(getArray) {
    return getArray[2]
}

// console.log(arrayPrint(myArray))
console.log(arrayPrint([20,30,10]))