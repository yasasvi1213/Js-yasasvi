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

