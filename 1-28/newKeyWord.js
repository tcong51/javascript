// create a new object
var mouse = {
    weight: 0.2,
    getWeight: function(){
        return this.weight;
    }
};
//constructor function
function Mouse(color){
    this.type = 'mouse';
    this.color = color;
}

var mouse1 = new Mouse('white');
console.log(mouse1);
