var Mouse = require("./mouse");
const Cat = require("./cat");

var mickey = new Mouse('black');
var jerry = new Mouse('orange');
// console.log(mickey);
// console.log(jerry);
var Tom = new Cat();
Tom.eat(jerry);
// console.log(Tom);
// console.log(jerry);
Tom.eat(mickey);
console.log(Tom);
