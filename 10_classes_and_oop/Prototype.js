// let myName = "Raghav     "
// let myChannel = "chai     "

// console.log(myName.length);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.Raghav = function(){
    console.log(`Raghav is present in all objects`);
}

Array.prototype.heyRaghav = function(){
    console.log(`Raghav says hello`);
}

// heroPower.Raghav()
// myHeros.Raghav()
// myHeros.heyRaghav()
// heroPower.heyRaghav()

// inheritance

const User = {
    name: "Chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax 
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Raghav".trueLength()
"iceTea".trueLength()