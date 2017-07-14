var requestURL = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json'; 
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


//gets the kings JSON file
var searchRequestURL = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json'; 
var searchRequest = new XMLHttpRequest(); 
searchRequest.open('GET', searchRequestURL); 
searchRequest.responseType = 'json';
searchRequest.send();

//ensures that the json is loaded before the user can search the json string
searchRequest.onload = function(){
    document.getElementById("searchBtn").disabled = false;
}

//takes a single input and searches the for the specified input on all parts
function searchJson(searchInput) {
    var contents = searchRequest.response;
    var results = "";
    for(var i = 0; i < contents.length; i++){
        if(contents[i]['nm'] === searchInput || contents[i]['cty'] === searchInput || contents[i]['hse'] === searchInput || contents[i]['yrs'] === searchInput){
            results += "Name: " + contents[i]['nm'] + "<br>";
            results += "Country: " + contents[i]['cty'] + "<br>";
            results += "House: " + contents[i]['hse'] + "<br>";
            results += "Years: " + contents[i]['yrs'] + "<br><br>";
        } 
    }
    document.getElementById("displaySearchResults").innerHTML = results;
}