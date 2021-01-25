// function calculationMoney(a, b){
//     var c = a + b;
//     if (c > 10){
//         return 1;
//     }else return 2;
// }
// var user1 = calculationMoney(10,20);
// console.log("User is:",user1);
var machineCoffee = {
    makeCoffee: function (ondFinish){
        console.log('Making coffee.....');
    ondFinish();
    }
    
};
var beep = function(){
    console.log('bip` bip` ....');
};
// machineCoffee.makeCoffee(beep);
machineCoffee.makeCoffee(function(){
    console.log('aaa......aa');
});