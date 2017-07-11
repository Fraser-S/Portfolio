var requestURL = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json?pretty'; 
var request = new XMLHttpRequest(); 
request.open('GET', requestURL); 
request.responseType = 'json';
request.send();

request.onload = function(){
    displaySuperheroesJSONFile(request.response);
} 

function displaySuperheroesJSONFile(contents){
    var output = ""; 
    //display area
    output += "Squad Name: " + contents['squadName'] + "<br>";
    output += "Home Town: " + contents['homeTown'] + "<br>";
    output += "Formed: " + contents['formed'] + "<br>";
    output += "Secret Base: " + contents['secretBase'] + "<br>";
    output += "Active: " + contents['active'] + "<br><br>";
    output += getMembers(contents.members);
    document.getElementById("displayJSONParagraph").innerHTML = output;
}

function getMembers(contents){
    var memberData="";
    for(i = 0; i < contents.length; i++){
         memberData += "Name: " + contents[i]['name'] + "<br>";
         memberData += "Age: " + contents[i]['age'] + "<br>";
         memberData += "Secret identity: " + contents[i]['secretIdentity'] + "<br>";
         memberData += getPowers(contents[i].powers);
    }
    return memberData;
}

function getPowers(contents){
    var powerData="Powers: ";
    for(var i = 0; i < contents.length; i++){
        powerData += contents[i] + ", ";
    }
    return powerData + "<br><br>";
}