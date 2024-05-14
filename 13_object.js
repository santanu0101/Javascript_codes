//singleton
//object.create

//object literals

const mySym = Symbol("key1")



const myJs = {
    name : "Santanu raj",
    "full name": "Santanuu raj",
    [mySym] : "mykey1",
    age : 18,
    email : "santanuraj@gmail.com",
    isLoggedIn : false,
    LastLoginDays: ["Monday", "Saturday"],
    func: function() {
        console.log("hello kaku");        
    }
}

// console.log(myJs);

// console.log(myJs.func());

// myJs.func = "hello"

// console.log(myJs);

// console.log(myJs.email);
// console.log(myJs["email"]);
// console.log(myJs["full name"]);
// console.log(typeof mySym);
// console.log(myJs[mySym]);

// myJs.email = "san@gmail.com"
// console.log(myJs["email"]);

// Object.freeze(myJs)
// myJs.age = 19
// console.log(myJs)

// myJs.getting = function() {
//     console.log("hello world");    
// }

// console.log(myJs.getting);
// console.log(myJs.getting());

// myJs.gettingTwo = function() {
//     console.log(`hello world, my name is ${myJs.name}`);    
// }
// console.log(myJs.gettingTwo());


// myJs = {
//     name: "hello kaku",
//     age: 16
// } //that create an error because myJs is constant
// console.log(myJs);

// **************************objects part 2*******************************

// const tinderUser = new Object()
const tinderUser ={}

tinderUser.id = "123abd"
tinderUser.name = "Priya"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    userName:{
        fullName: {
            firstName: "Santanu",
            lastName: "Raj"
        }
    }
}

// console.log(regularUser.userName.fullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {2: "a", 3: "b"}
const obj3 = {4: "a", 5: "b"}

// const obj4 = {obj1, obj2, obj3}

// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2, ...obj3} //spread

// console.log(obj4);


const users = [
    {
        id: 1,
        email: "san@gmail.com"
    }
]

// console.log(users[0].email)

// console.log(tinderUser);

const arr1 = Object.keys(tinderUser) // that return array now you can use object keys using loop
const arr2 = Object.values(tinderUser) // that return array now you can use object values using loop
const arr3 = Object.entries(tinderUser)  // every key values are seperating in array

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

// console.log(Object.hasOwnProperty("age"));
// console.log(Object.hasOwnProperty("name")); // this property are exist or not that return boolan values

// ************************************object part 3****************************************************

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor : "santanu"
}


// course.courseInstructor

const {courseInstructor: instractor} = course

// console.log(courseInstructor);
console.log(instractor);


// const navbar = ({company}) =>{

// }
 
// navbar(company  = "santanu")



