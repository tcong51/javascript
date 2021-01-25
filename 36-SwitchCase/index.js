// memberCard = bronze,silver,gold, diamond
//bronze = 0.2
//silver = 0.3
//gold =0.4
//diamond = 0.5
// var memberCard={
//     tier :'diamond'
// };
// function calculationPrice (price,member){

// var discountPrice;
// switch (member.tier){
//     case 'bronze':
//         discountPrice = 0.2;
//         break;
//     case 'silver':
//         discountPrice = 0.3;
//         break;
//     case 'gold':
//         discountPrice = 0.4;
//         break;
//     case 'diamond':
//         discountPrice = 0.5;
//         break;
//     default:
//         discountPrice = 0;
//         break;
// }
// return price = price *  (1- discountPrice);
// }
// var total = calculationPrice(10000,memberCard);
// console.log(total);

// var  trafficLight ='red';
// function move(light){
    
//     switch (light){
//         case 'green':
//             console.log("run");
//             break;
//         case 'orange':
//             console.log("slowing");
//             break;
//         default:
//             console.log("stop");
//             break;        
//     }
// }
// move(trafficLight);
var University  = {
    product: 'Nct'
};
function studentManager(member,shcool){
    var stt;
    switch(shcool.product){
        case 'Ctu':
            stt = 40000;
            break;
        case 'DthU':
            stt = 30000;
            break;
        default:
            stt = 20000;
            break;
    }
    return member = member + (0.2* stt);
}
var ctu = studentManager(10000,University);
console.log(ctu);

