
// // // Stringify
// // var myDog = {name: 'Tom',
// //             age: 2,
// //             gender: 'Male'};
// // console.log(myDog.name);
// // var changeMyDog = JSON.stringify(myDog);
// // console.log(changeMyDog);
// // //Parse
// // var myDognew = '{"name" : "Cat","age": 2,"gender" : "Female"}';
// // console.log(myDognew);
// // var changeMyDogNew = JSON.parse(myDognew);
// // console.log(changeMyDogNew.name);


// //exercise
// const fs = require('fs');
// var data = {};
// var datastudent = [];
// // const readLineSync = require('readline-sync');
// var readLineSync = require('readline-sync');
// var opption = readLineSync.question('Your opption:');
// if (opption ==1){
//     var fileStudent = fs.readFileSync('./data.json',{encoding: 'utf8'});
//     console.log(fileStudent);
// }
// // Bản chất của writeFileSync là tẩy trắng file dữ liệu và thêm dữ liệu mới. Ví dụ là text2 on 30 lession
// m
var apartment = {
    bedroom: {
      area: 20,
      bed: {
        type: 'twin-bed',
        price: 100
      }
    }
  };
  
  function getObjectKey(obj){
   for( var keys in obj){
         console.log(keys);
   
       for(var i in obj[keys]){
           console.log(i);
           for(var j in obj[keys][i]){
               console.log(j);
           }
       }
   }
  }
  getObjectKey(apartment);

// function sum(array) {
//     // viết code ở đây.
    
//     var sum = 0;
//     console.log(array.length);
//     for(i = 0 ; i < array.length ; i++){
         
//         sum += array[i];
//         console.log(sum);
       
//     }
    
//   }
// var  a = [1,2,3];
// console.log(sum(a));

// function fromCharCode() {
//     // viết code ở đây.
//     //  var array= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];    
//     //  for(i=0; i<array.length; i++){
//     //       console.log(array[i]);
//     //       console.log("'" +array[i]+"'");}
//     var a= ['abcdefghijklmnopqrstuvwxyz'];    
//     for(i=0; i<a.length; i++){
//          console.log(a[i]);}
// }
// fromCharCode();
