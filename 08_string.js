const Name = "Santanu"

const repoCount = 50

console.log(`my game name is ${Name} and repocount is ${repoCount}`);

const gameName = new String("Santanu-hello")

console.log(gameName.length)
console.log(gameName.anchor("hello")); //

console.log(gameName.toUpperCase())

console.log(gameName.charAt(6));
console.log(gameName.indexOf('t'));


console.log(gameName.substring(2,9));
console.log(gameName.slice());


const newString = "     santanu     "
console.log(newString);
console.log(newString.trim());


const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))
console.log(url.includes('hitesh'))

console.log(gameName.split('-'))
