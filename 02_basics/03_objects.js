// singleton
// Object.create

// Object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Raghav",
    "full name": "Raghav Jhunjhunwala",
    [mySym]: "mykey1",
    age: 17,
    location: "Surat",
    email: "raghav@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "raghav@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "raghav@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());