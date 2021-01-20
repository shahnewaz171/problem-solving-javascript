//===Find Duplicate Numbers===//
var name = [2, 4, 7, 2, 7, 9, 11, 14, 9];
var uniqueName = [];

for(var i = 0; i < name.length; i++){
    var element = name[i];
    var index = uniqueName.indexOf(element);
    if(index == -1){
        uniqueName.push(element);
    }
}

console.log(uniqueName);