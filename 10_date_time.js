let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
// console.log(mydate.toLocalString());

console.log(mydate.toLocaleString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toTimeString());
console.log(mydate.toUTCString());


console.log(typeof mydate);


// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());  

// console.log(Math.floor(Date.now()/1000));



let newdate = new Date()
console.log(newdate);
console.log(newdate.getTime());

