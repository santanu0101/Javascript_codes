// +++++++++++++++++++++ forof loop ++++++++++++++++++++++

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {

    // console.log(num);
}

const greetings = "hello world"

for (const iterator of greetings) {
    // console.log(`each elemnets are ${iterator}`);
}

//++++++++++++++++ map ++++++++++++++++++

const map = new Map()
map.set("IN", "India")
map.set("USA", "United State")
map.set("ER", "France")
map.set("IN", "India")

// console.log(map);


// for (const key of map) {
for (const [key, value] of map) {
    // console.log(key);
    // console.log(key, ":", value);
}


const myObject = {
    "game0" : "NFS",
    "game1" : "Spiderman"
}

// this is not use for objects 

// for (const [key, values] of myObject) {
//     console.log(key, values);
// }

// ++++++++++++++++ Forin loops +++++++++++++++++++++++++

for (const key in myObject) {
    // for object
    console.log(`${key} is value is ${myObject[key]}`);
}


const arr1 = [3, 4, 5, 6, 7, 8, 80]

for (const key in arr1) {
    // for array
    console.log(`${key} is value is ${arr1[key]}`);
}


// for map not use forin loop 
for (const key in map) {
    // for map
    console.log(`${key} is value is ${arr1[key]}`);
}


// +++++++++++++++++++ foreach loop +++++++++++++++++++++++++

const arr2 = [3, 4, 5, 6, 7, 8, 80]

// +++++++++ function ++++++++++++++
arr2.forEach( function (items) {
    console.log(items, "\n");
})

// ++++++++++ arrow function ++++++++++++++
arr2.forEach((items) => {
    console.log(items, "\n");
})

function printMe(items) {
    console.log(items, "\n");
}
arr2.forEach(printMe)


arr2.forEach( (items, index, arr)=>{
    console.log(items, index, arr);
})

const myCoding = [

    {
        language : "java",
        languageFileName : "java"
    },
    {
        language : "python",
        languageFileName : "py"
    },
    {
        language : "javaScript",
        languageFileName : "js"
    },
    {
        language : "C",
        languageFileName : "gcc"
    }

]


myCoding.forEach( (item)=>{
    console.log(item.language);
})
