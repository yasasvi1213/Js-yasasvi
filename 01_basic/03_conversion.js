let score = 23;
let score2 = "23";
let score3 = null;
let score4 = "as3";
let score5;
let score6 = true;

let valueInNumber2 = Number(score2);
let valueInNumber3 = Number(score3);
let valueInNumber4 = Number(score4);
let valueInNumber5 = Number(score5);
let valueInNumber6 = Number(score6);

console.table([
  score,
  typeof score,
  score2,
  typeof score2,
  valueInNumber2,
  typeof valueInNumber2,
  valueInNumber3,
  typeof valueInNumber3,
  valueInNumber4,
  typeof valueInNumber4,
  valueInNumber5,
  typeof valueInNumber5,
]);
