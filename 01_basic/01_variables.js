<<<<<<< HEAD
const accontId = 14455;
let accountEmail = "yas@test.mail";
var accountPassoword = "sadsad3";
accountCity = "Hyderabas";

let accountState;
//  accontId=2;  //Not Allowed

console.log(accontId, accountEmail, accountPassoword, accountCity);

//console.table([accontId,accountEmail,accountPassoword,accountCity]);

/* Prefer not to use var because of issue with block scope and functional scope */

console.table([
  accontId,
  accountEmail,
  accountPassoword,
  accountCity,
  accountState,
]);
=======
const accontId=14455;
let accountEmail='yas@test.mail';
var accountPassoword='sadsad3';
accountCity='Hyderabas';

let accountState;
//  accontId=2;  //Not Allowed

console.log(accontId,accountEmail,accountPassoword,accountCity);

//console.table([accontId,accountEmail,accountPassoword,accountCity]);


/* Prefer not to use var because of issue with block scope and functional scope */


console.table([accontId,accountEmail,accountPassoword,accountCity,accountState]);

>>>>>>> 7cb43633a1d26a0313e1803162201390995ac438
