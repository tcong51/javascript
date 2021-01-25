// array.find tìm kiếm phần tử, trả về giá trị true là stop.

var numbers = [1, 2, 3, 4];
var condition = numbers.find(function(item){
    return item % 2 === 0;
});
console.log(condition);