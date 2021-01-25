var products = [
    { name : 'Fan',quantity: 3, unitPrice: 150, category: 'Electric' },
    { name : 'Electric cooker',quantity: 6, unitPrice: 250, category: 'Electric' },
    { name : 'Table',quantity: 10, unitPrice: 100, category: 'Wood' },
    { name : 'Bottle',quantity: 20, unitPrice: 50, category: 'Bottle' },
    { name : 'Knife',quantity: 15, unitPrice: 40, category: 'Bottle' },
    { name : 'Guitar',quantity: 10, unitPrice: 500, category: 'Wood' }
];
var filterProduct = products.filter(function(item){
    return item.category == 'Bottle';
});
// console.log(filterProduct);
var moneyItemOption = filterProduct.map(function(item){
    return item.unitPrice * item.quantity;
});
var sumMoneyOption = moneyItemOption.reduce(function(item1, item2){
    return item1 + item2;
});
// console.log(sumMoneyOption);

// console.log(filterProduct);
var moneyItem = products.map(function(item){
    return item.quantity * item.unitPrice;
});
var sumMoneyItems = moneyItem.reduce(function(item1, item2){
    return item1 + item2;
});
// console.log(sumMoneyItems);
var filterProductPriceBig = products.filter(function(item){
    return item.unitPrice >=100;
});
console.log(filterProductPriceBig);
