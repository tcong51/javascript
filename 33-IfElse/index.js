function tossCoin(){
    var result = Math.random();
    if(result < 0.5){
        console.log("Mặt ngửa");
    }else{
        console.log("Mặt sấp");
    }
}
tossCoin();