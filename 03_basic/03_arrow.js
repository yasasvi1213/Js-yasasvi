// const user = {
//   username: "Yasasvi",
//   price: 999,
//   welecomeMessage: function () {
//     console.log(`${this.username} , Welcome User`);
//   },
// };

// user.welecomeMessage();

// user.username = "sam";

// user.welecomeMessage();

console.log(this);

function chai() {
  let username = "You";
  //console.log(this);
  console.log(this.username);
}

chai();

const addTwo = (num1, num2) => {
  return num1 + num2;
};

const addTwo2 = (num1, num2) => num1 + num2;
// {} meand retun Key word
// () means no return key word
