var numbers = [1, 2, 3, 4];
var condition = numbers.reduce(function(a,b){
    
    return a * b;
});
console.log(condition);
var orders = [
    {name : 'A', quantity : 2, unitPrice: 100},
    {name : 'B', quantity : 1, unitPrice: 400},
    {name : 'A', quantity : 5, unitPrice: 500}
];
var calculationItem = orders.map(function(item){
    return item.quantity * item.unitPrice;
});
var calculationMoney = calculationItem.reduce(function(item1, item2){
   return item1 + item2;
});
console.log(calculationMoney);