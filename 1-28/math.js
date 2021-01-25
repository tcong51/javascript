function rollADice(){
    var random = Math.random();

    var Dice = Math.floor(random*6 + 1);
    return Dice;
}
console.log(rollADice());