class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}raghav`
    }

    set password(value){
        this._password = value
    }
}

const raghav = new User("r@raghav.ai", "abc")
console.log(raghav.email);