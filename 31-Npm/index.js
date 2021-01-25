var readlineSync = require('readline-sync');
var username = readlineSync.question('May I have your name?');
console.log('Hi ' + username +'!');

var pet = {}; 
var name = readlineSync.question('What is your pet?');
var age = readlineSync.question('Age?');
pet.name  = name;
pet.age = parseInt(age);
console.log(pet.name);
