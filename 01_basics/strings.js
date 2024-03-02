const name = "yash"
const repCount = 28

// console.log(name + repCount +  " Value");

// console.log(`Hello my name is ${name} and the repo count is ${repCount}`);

const newName = new String('yash')
// console.log(newName); 

// console.log(newName.length);
// console.log(newName[0]);
// console.log(newName.__proto__);

// console.log(newName.toUpperCase());
// console.log(newName.toLowerCase()); 
// console.log(newName.charAt(2));
// console.log(newName.indexOf('s'));

const gameName = new String('yash-dot-com')

const newString = gameName.substring(0,3)
console.log(newString);

const anotherString = gameName.slice(-1, 3);
console.log(anotherString);

const newStringOne = "    yash    "
console.log(newStringOne); 
console.log(newStringOne.trim());

const url = "https://yash.module%20tyagi-com"
console.log(url.replace('%20', '-'));

console.log(url.includes('yash'));
console.log(url.includes('ram'));

console.log(gameName.split('-'));