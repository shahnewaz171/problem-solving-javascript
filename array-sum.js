var num = [20, 30, 40, 50, 60, 70, 80, 90];
var sum = 0;

// for(i = 0; i < num.length; i++){
//     var element = num[i];
//     sum = sum + element;
// }

// console.log('Total of the numbers: ', sum);


//Using function

function getArraySum(numbers){
    for(i = 0; i < num.length; i++){
        var element = num[i];
        sum = sum + element;
    }
    return sum;
}
var numbers = [20, 30, 40, 50, 60, 70, 80, 90];
var result = getArraySum(numbers)
console.log('Total of the numbers: ', result);