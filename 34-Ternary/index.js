function tossCoin(){
    var result = Math.random();
    var value = (result<0.5) ? 'Mặt ngửa' : 'Mặt sấp';
    console.log(value);
}
tossCoin();

