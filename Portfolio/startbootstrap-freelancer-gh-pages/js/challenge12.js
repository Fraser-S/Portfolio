/**
 * Created by Fraser on 15/07/2017.
 */

/*
var requestURL = 'http://pokeapi.co/api/v2/type/' + atk; // the atPok is actually being added to the end
var request = new XMLHttpRequest();                        // of the URL which loads the api specific to that type of pokemon
request.open('GET', requestURL);
request.responseType = 'json'
request.send();*/

function check(atk, def1, def2){
    ///ensure types are selected
    if(atk !== "default" && def1 !== "default") {
        //retrieve the data for the attack type
        var requestURL = 'http://pokeapi.co/api/v2/type/' + atk;
        var request = new XMLHttpRequest();
        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();
        //once the data loads, calculate the damage
        request.onload = function(){
            calcDamage(request.response, atk, def1, def2);
        }
    }
}

function display(dmg, atk, def1, def2){
    let output = atk + ", will do x" +  dmg +  " to a defender of type: " + def1;

    if(def2 !== "None") {
        output += " and " + def2;
    }

    //display results
    document.getElementById("damage").innerHTML = output;
}

function chooseModifierToCheck(response, i){
    var relation;
    switch(i){
        case 0:
            relation = response.damage_relations.half_damage_to;
            break;
        case 1:
            relation = response.damage_relations.no_damage_to;
            break;
        case 2:
            relation = response.damage_relations.double_damage_to;
            break;
        default:
            break;
    }
    return relation;
}

function getModifier(i){
    let dmg = 0;
    switch(i){
        case 0:
            dmg = 0.5;
            break;
        case 1 :
            dmg = 0;
            break;
        case 2:
            dmg = 2;
            break;
        default:
            dmg = 1;
            break;
    }
    return dmg;
}

function determineModifier(response, def){
    let i = 0;
    let success = false;
    let dmg = 1;
    //loop for the three cases
    while(i < 3 && success === false){
        //gets the array
        let relation = chooseModifierToCheck(response, i);
        let j = 0;
        while(j < relation.length && success === false) {
            if(def === relation[j]['name']){
                dmg = getModifier(i)
                success = true;
            }
            j++;
        }
        i++;
    }
    //if the loop does not find the type it will return 1 for standard dmg
    return dmg;
}

function calcDamage(response, atk, def1, def2){
    let mod1, totMod, mod2 = 1;

    //calulate thje damage modifier of the type of pokemon
    mod1 = determineModifier(response, def1);

    //if the defender has a second type
    if(def2 !== "None"){
        //calulate thje damage modifier of the type of pokemon
        mod2 = determineModifier(response, def2);
    }

    //calculate the total modifier
    totMod = mod1 * mod2;

    //display the outcome
    display(totMod, atk, def1, def2);
}

