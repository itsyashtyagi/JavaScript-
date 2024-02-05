console.log("Variables")
const accountId = 1453
let accountEmail = "yashtyagixyz@gmail.com"
var accountPassword = "12456" 
accountCity = "Ghaziabad" //not be used as far as important 
let accountState;

//accountId = 45894 // not allowed to upadte const variable
accountEmail = "yashxyz@gmail.com" 
accountPassword = "212121" 
accountCity = "Noida"

/*
Prefered not to use var 
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

