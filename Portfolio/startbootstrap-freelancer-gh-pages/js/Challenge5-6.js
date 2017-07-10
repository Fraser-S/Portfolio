function fizzBuzz(Fizz, Buzz, loopto){
	var outputText = "";
	for(i = 1;i <= parseInt(loopto); i++){
		if(i%3 == 0 && i%5 == 0){
			outputText += Fizz + Buzz;
		} else{
			if(i%3 == 0){
				outputText += Fizz;
			}else{
				if(i%5 == 0){
					outputText += Buzz;
				}else {
					outputText += i;
				}
			}
		}
		outputText += ", ";
	}
	window.alert(outputText);
}

function divideBy3(numString){
	var stepsTaken = "";
	var steps = 0;
	var num = parseInt(numString);
	while(num>1){
		if(num%3 == 0){
			num = num / 3;
			stepsTaken += "divided by 3, ";
		} else {
			if((num+1)%3 == 0){
				num = (num + 1) /3;
				stepsTaken += "added 1 then divided by 3, ";
			} else {
				num = (num - 1) /3;
				stepsTaken += "subtracted 1 then divided by 3, ";
			}
		}
		steps++;
	}
	stepsTaken += " Total Steps: " + steps;
	
	window.alert(stepsTaken);
}