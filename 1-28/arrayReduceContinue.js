//reduce 2 biến 
//array.reduce(function(item1,itme2){
//calcution
//return x;
//},init); init là số được truyền vào.

var numbers = [1, 2, 3, 4, 5];
var b =100;
var sum = numbers.reduce(function(item1,item2){
    return item1 + item2;
},b);
console.log(sum);
var str = '';
var items = ['Tom', 'Bill', 'Kim'];
var i = items.reduce(function(item1, item2){
    console.log(item1, item2);
    return str += '<' + item2 + '>';
},str);
console.log(i);
