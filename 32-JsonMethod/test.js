//JSON objcet
var myDog = { name: 'Milu', age: 1, dead: false};
var myDogString = JSON.stringify(myDog);
console.log(typeof myDog);

var myCatString = '{"name": "Tom", "age": 2}';
var myCat = JSON.parse(myCatString)
console.log(myCat);