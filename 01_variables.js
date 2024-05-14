const accountId = 1223345
let accountEmail = "santanu@google.com"
var accountPassword = "12345"
accountCity = "Subhasgram"
let  accountState

// accountId = 2 //not allowed

accountEmail = "ha@gmmail.com"
accountPassword = "123"
accountCity = "jaipur"



console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]) //print as a table wise
