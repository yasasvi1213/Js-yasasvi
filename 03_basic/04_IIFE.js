//  Immediately Invoked Function Expression

// so the not to be polloted by global scope
(function chai() {
  console.log("Database Connected");
})();

(() => console.log("Database Connected two"))();

((name) => {
  console.log(`Database Connected ${name}`);
})("hi");
