const accountId = 144553
let accountEmail = "raj@google.com"
var accountPassword = "629484"
accountCity = "Kolkata"
let accountState

// accountId = 2 //not allowed

accountEmail = "anupam@raj.com"
accountPassword = "54230"
accountCity = "Mumbai"


console.log(accountId)

/*
Prefer not to use Var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])