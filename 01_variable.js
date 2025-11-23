const accountId = 1723
let accountEmail ="divyanshgoutam354@gmail.com"
var accountPassword = "Divyansh@354"
accountCity = "Bangalore"
 
accountEmail="hdfc@gmail.com"
accountPassword="Hdfc@354"
accountCity="Mumbai"

/*
Prefer not to use var,bcoz of issues in block scope and functional scope
*/

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity]);