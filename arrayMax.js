var marks = [40, 45, 51, 89, 65, 78, 15];
var max = marks[0];

for(i = 0; i < marks.length; i++){
    var element = marks[i];
    if(element > max){
        max = element;
    }
}
console.log('Highest value is: ', max);

