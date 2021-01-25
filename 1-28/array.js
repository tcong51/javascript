var dot1 = {
    name : 'Dot',
    age : 3
};
var dot2 = {
    name : 'Cat',
    age : 4
};
var dot3 = {
    name : 'Tom',
    age : 5
};
var cat = {
    name : 'Mun',
    age : 7
};
var array = [dot1, dot2, dot3];
array[2] = cat;
console.log(array);