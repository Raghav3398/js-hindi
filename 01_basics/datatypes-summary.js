// Primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 123456654321n



// Refrence (Non primitive)

// Array, Objects, Fuctions

const heros = ["Shaktiman", "naagraj", "doga"]
let myObj = {
    name:"Raghav",
    age:17,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);