const user = {
    username: "Raghav",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        console.log(this);
    } 

}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);




function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`welcome ${usename}`);

    }

    return this
}

const userOne = new User("Raghav", 12, true)
const userTwo = new User("Chai aur code", 12, false)
console.log(userOne);
console.log(userOne.constructor);
// console.log(userTwo);
