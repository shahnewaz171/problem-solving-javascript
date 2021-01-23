function add(numbers){
    var sum = 0;
    for(var i = 0; i <= numbers.length; i++){
        if(numbers[i] >= 0){
            sum = sum + numbers[i];
        }
    }
    return sum;
}
var result = add(5);
console.log(result);