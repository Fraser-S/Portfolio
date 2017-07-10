function lowerToUpper(someText){
    var uppercaseText = someText.toUpperCase();
    window.alert(uppercaseText);
}

function sumNum(num, stringNum){
    var sum = parseInt(num) + parseInt(stringNum);
    window.alert(sum);
}

var textArray = [];

function createArray(first, middle, end){
    textArray = [first, middle, end];
    window.alert(textArray);
}

function addToArray(word){
    textArray[textArray.length] = word;
    window.alert(textArray);
}

function removeLastElement(){
    textArray.pop();
    window.alert(textArray);
}