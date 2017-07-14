let carList = [];

function carMaker(model, regestration, faults) 
{ 
    let it = {}; 
    it.model = model; 
    it.regestration = regestration; 
    it.faults = faults;
    it.inGarage = false;  
    return it; 
} 

//main functionality

//add a car to the list
function addCar(model, regestration, faults){
    let success = false

    //Check that the letiables are correct
    if(model !== "" && regestration !== "" && faults >= 0){
        //ensure that the regestration is unique
        let unique = true;
        for(i = 0; i < carList.length; i++){
            //if the regestration already taken set unique to false
            if(carList[i].regestration === regestration){
                unique = false;
            }
        }

        //if the cars unique add it
        if(unique === true){
            //create the car and add the car to the list
            carList[carList.length] = carMaker(model, regestration,faults);

            //set success to true
            success = true;
        }
    }

    //return true on successful addition
    return success;
}

//add a car to the list
function checkIn(regestration){
    let success = false
    
    //check that the regestration is valid
    if(regestration !== ""){
        //loop for each car
        let i = 0;
        while(i < carList.length && success === false){
            //if the regestration matche
            if(regestration === carList[i].regestration && carList[i].inGarage === false ){
                //add the car to the garage
                carList[i].inGarage = true; 
                success = true;
            }//end if 
            i++;
        }//end while
    }//end if

    //return true on successful checkin
    return success;
}

//update the number of faults on a car
function setFaults(regestration, faults){
    let success = false
    
    //check that the regestration is valid
    if(regestration !== ""){
        //loop for each car
        let i = 0;
        while(i < carList.length && success === false){
            //if the regestration matches
            if(regestration === carList[i].regestration){
                carList[i].faults = faults;                
                //add the car to the garage
                success = true;
            }//end if 
            i++;
        }//end while
    }//end if

    //return true on successful checkin
    return success;
}

//returns a negative if car not found or in the garage
function calcBill(regestration){
    let bill = -1;
    
    //check that the regestration is valid
    if(regestration !== ""){
        //loop for each car
        let i = 0;
        let success = false;
        while(i < carList.length && success === false){
            //if the regestration matches and the car is in the garage
            if(regestration === carList[i].regestration && carList[i].inGarage === true){
                bill = carList[i].faults * 20;
                success = true;
            }//end if 
            i++;
        }
    }
    //return the bull
    return bill;
}

//add a car to the list
function checkOut(regestration){
    let success = false
    
    //check that the regestration is valid
    if(regestration !== ""){
        //loop for each car
        let i = 0;
        while(i < carList.length && success === false){
            //if the regestration matches
            if(regestration === carList[i].regestration && carList[i].inGarage === true){
                //remove the car from the garage
                carList[i].inGarage = false; 
                success = true;
            }//end if 
            i++;
        }//end while
    }//end if

    //return true on successful checkin
    return success;
}

function display(regestration){
    let garageText = "";
    
    for(let i = 0; i < carList.length; i++){
        if(carList[i].inGarage === true){
            garageText+="model: " + carList[i].model + ", regestration: " + carList[i].regestration + ", Faults: " + carList[i].faults + ", ";
        }
    }

    return garageText = garageText;
}

//functions for the ui to interact with the main functions
function addCarUI(model, regestration, faults) {
    //outcome message to display to the webpage
    let outcome = "";

    //send the data to the main application
    if (addCar(model, regestration, parseInt(faults)) === true){
        outcome = "success";
    } else {
        outcome = "unsuccessful";
    }

    //display results
    document.getElementById("registerOutcomeText").innerHTML = outcome;
}

function checkInCarUI(regestration){
    //outcome message to display to the webpage
    let outcome = "";
    
    //check in the car 
    if(checkIn(regestration) === true){
        outcome = "success";
    } else {
        outcome = "unsuccessful";
    }

    //display results
    document.getElementById("checkInOutcomeText").innerHTML = outcome;
}

function setCarFaultsUI(regestration, faults){
    //outcome message to display to the webpage
    let outcome = "";
    
    //change the number of faults
    if(setFaults(regestration, parseInt(faults)) === true){
        outcome = "success";
    } else {
        outcome = "unsuccessful";
    }

    //display results
    document.getElementById("setFaultsOutcomeText").innerHTML = outcome;
}

function calcBillCarUI(regestration){
    //outcome message to display to the webpage
    let outcome = "";
    
    //check in the car 
    let bill = calcBill(regestration);
    
    //ensure that the bill was calculated
    if(bill >= 0){
        outcome = "Bill is £" + bill;
    } else {
        outcome = "unsuccessful";
    }

    //display results
    document.getElementById("billOutcomeText").innerHTML = outcome;
}

function chkOutCarUI(regestration){
    //outcome message to display to the webpage
    let outcome = "";
    
    //change the number of faults
    if(checkOut(regestration) === true){
        outcome = "success";
    } else {
        outcome = "unsuccessful";
    }

    //display results
    document.getElementById("checkOutOutcomeText").innerHTML = outcome;
}

function displayCarUI(){
    //outcome message to display to the webpage
    let outcome = display();
    
    //ensure that the bill was calculated
    if(outcome === ""){
        outcome = "no cars in garage";
    }

    //display results
    document.getElementById("displayText").innerHTML = outcome;
}

function getHelp(){
    let helpString = "commmand: help, arguments: none <br>";
    helpString += "commmand: add, arguments: model, regestration, faults <br>";
    helpString += "commmand: checkin, arguments: regestration <br>";
    helpString += "commmand: checkout, arguments: regestration <br>";
    helpString += "commmand: display, arguments: none <br>";
    helpString += "commmand: cost , arguments: regestration <br>";
    helpString += "commmand: setfaults, arguments: regestration, faults <br>";
    return helpString;
}

function commandLine(command){
    let output = "";

    var commands = command.split(" ");

    switch(commands[0]){
        case "add":
            //ensure there is enough elements
            if (commands.length === 4){
                if (addCar(commands[1], commands[2], parseInt(commands[3])) === true){
                    output = "Car added";
                } else {
                    output = "Car not added. ";
                }
            } else {
                output = "Command is invalid. Correct amount of arguments is 3";
            }
            break;
        case "checkin":
            //ensure there is enough elements
            if (commands.length === 2){
                if (checkIn(commands[1]) === true){
                    output = "Car added to garage";
                } else {
                    output = "Car not added.";
                }
            } else {
                output = "Command is invalid. Correct amount of arguments is 1";
            }
            break;
        case "checkout":
            //ensure there is enough elements
            if (commands.length === 2){
                if (checkOut(commands[1]) === true){
                    output = "Car removedefrom garage";
                } else {
                    output = "Car not removed.";
                }
            } else {
                output = "Command is invalid. Correct amount of arguments is 1";
            }
            break;
        case "display":
            //ensure there is enough elements
            if (commands.length === 1){
                output = display();
                if(output === ""){
                    output = "no cars in garage";
                }
            } else {
                output = "Command is invalid. Correct amount of arguments is 0";
            }
            break;
        case "cost":
            //ensure there is enough elements
            if (commands.length === 2){
                let bill = calcBill(commands[1])
                if(bill >= 0){
                    output = "Bill is £" + bill;
                } else {
                    output = "unsuccessful";
                }
            } else {
                output = "Command is invalid. Correct amount of arguments is 1";
            }
            break;
        case "setfaults":
            //ensure there is enough elements
            if (commands.length === 3){
                if (setFaults(commands[1], parseInt(commands[2])) === true){
                    output = "set faults";
                } else {
                    output = "faults not set.";
                }
            } else {
                output = "Command is invalid. Correct amount of arguments is 2";
            }
            break;
        case "help":
            output = getHelp();
            break;
        default:
            output = "command not known, commands are: add, checkin, checkout, display, cost and setfaults";
    }    

    //display results
    document.getElementById("consoleOutput").innerHTML = output;
}