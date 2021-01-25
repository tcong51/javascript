//sort 1.< 0 a trước b, > 0 a sau b, 0 a b y cũ

var items = [
    {name: 'A', unitPrice: 200, quantity: 3},
    {name: 'B', unitPrice: 100, quantity: 1},
    {name: 'C', unitPrice: 400, quantity: 2},
    {name: 'D', unitPrice: 300, quantity: 4},
];
var sort = items.sort(function(item1, item2){
    return item2.unitPrice * item2.quantity - item1.unitPrice * item1.quantity; 
});
console.log(sort);
