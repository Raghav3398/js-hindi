const accountId = 144553
let accountEmail = "raghav@gmail.com"
var accountPassword = "12345"
accountCity = "Surat"
let accountState;

// accountId = 2           not allowed as it is constant

accountEmail = "Rj@googlemail.com"
accountPassword = "321321"
accountCity = "Jaipur"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountEmail, accountId, accountPassword, accountCity, accountState]);