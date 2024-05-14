//array

//array decliaration two way
// const myArr = [0, 1, 2, 3, 4, true, "santanu"] //it is also a array
/*01*/const myArr = [0, 1, 2, 33, 4]
// console.log(myArr[0]);

/*02*/const myArr2 = new Array(0, 1, 2, 3, 4)
// console.log(myArr2);

//array method

// myArr.push(6)
// console.log(myArr);

// myArr.pop()
// console.log(myArr);


// myArr.unshift(9) //assging in front of the array
// console.log(myArr);
// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(3)); //3 in array or not

// console.log(myArr.indexOf(33)); // return 33 in 3rd index


const newArr = myArr.join()

console.log(myArr);
console.log(typeof newArr);


//slice, splice


console.log("A", myArr);
const myn1 = myArr.slice(1,3);
console.log("D", myArr);
console.log(myn1);


console.log("B", myArr);
const myn2 = myArr.splice(1,3);
console.log("c", myArr);
console.log(myn2);



