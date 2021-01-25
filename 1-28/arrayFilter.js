//array.filter lọc kết quả thông qua điều kiện
var numbers = [1, 2, 3, 4, 5 ,6 ,7 ,8 ];
var condition = numbers.filter(function(number){
    return number % 2 != 0;
});
console.log(condition);