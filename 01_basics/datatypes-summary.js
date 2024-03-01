/* ------ Primitive ------- */

// 7 types - String, Number, Boolean, null, undefined, Symbol, BigInt 

const score = 100
const scoreValue = 100.5
const name = "yash"

const isLoggedIn = false
const temp = null
const userEmail = undefined
let userName;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

// const bigNumber = 245793702797397n

/* ------- Reference type (Non-Primitive) -------- */

// Array, Objects, Functions

const names = ["yash", "rahul", "vipin"];

let myDetails = {
    name : "yash", 
    age : 21, 
    email : "xyz@gmail.com", 
}

const myFuction = function(){
    console.log("Hello World");
}

console.log(typeof myFuction);


// https://262.ecma-international.org/5.1/#sec-11.4.3
