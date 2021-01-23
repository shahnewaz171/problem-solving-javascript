//arrayVsObject

//array
var friendsAge = [17, 20, 22, 24, 30];


//Object
var ami = {
    age: 17,
    weight: 45,
    height: 65,
    color: 'navyBlue'
};
var lookingFor = 'age';
var myAge = ami[lookingFor];
ami.weight = 95;
ami[lookingFor] = 100;
console.log(myAge);
console.log(ami);
