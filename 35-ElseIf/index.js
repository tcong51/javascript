function calculationCostBus(price,person){
    var cost = 0;
    var percentChildren = 0.2;
    var percentAdult = 0.3;
    var percentOlderPeople = 0.5;

 
    if (person.age <= 15){
        cost += price - price * percentChildren;
    }else if (person.age <= 60 ){
           cost += price - price * percentAdult; 
    }else {
         cost +=price  - price * percentOlderPeople;
            
            }
            
    return cost;
}
var person1 = {
    age: 45,
    name: 'Job'
};
var person2 = {
    age: 12,
    name: 'Jolie'
};
var person3 = {
    age: 76,
    name: 'Jollyed'
};
var coin1 = calculationCostBus(10.000,person1);
var coin2 = calculationCostBus(10.000,person2);
var coin3 = calculationCostBus(10.000,person3);
console.log(coin1);
console.log(coin2);
console.log(coin3);