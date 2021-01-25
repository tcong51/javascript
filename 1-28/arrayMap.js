
//array.map biến đổi mảng này thành mảng khác
var array = [1, 2, 3, 4 ];
var arrayTransform = array.map(function(a){
    return a*a;
});
console.log(arrayTransform);
//Exercise
var rectangles = [
    {width: 5, height: 2},
    {width: 10, height: 3},
    {width: 3, height: 25}
];
var acreageRectangles = rectangles.map(function(object){
    return object.width * object.height;
});
console.log(acreageRectangles);