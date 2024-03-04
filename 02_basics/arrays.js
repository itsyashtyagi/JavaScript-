//array

const myArr = [0,1,3,4,5,]; 
const heros = ["shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4);

// console.log(myArr); 
// console.log(heros); 
// console.log(myArr2);

//Array methods

// myArr2.push(7)
// myArr2.push(8)
// myArr2.pop()

// myArr2.unshift(9)
// myArr2.shift()

// console.log(myArr2.includes(3)); 
// console.log(myArr2.indexOf(2));

const newArr = myArr2.join()

// console.log(myArr2);
// console.log(newArr);

//slice, splice 

console.log("A " , myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1); 
console.log("B ", myArr); 

const myn2 = myArr2.splice(1, 3) 
console.log("C ", myArr); 
console.log(myn2);

