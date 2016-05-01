/*
console.log("WHILE LOOP----------------------------------------------");
var numSheep = 4;
var monthNumber = 1;
var monthsToPrint = 12;

while(monthNumber<=monthsToPrint){
	numSheep *= 4;
	console.log("There will be " + numSheep + " sheeps after " + monthNumber + " month(s)!");
	monthNumber++;
}
*/
console.log("FOR LOOP-------------------------------------------------");
var trainsOperational = 8;
var totalTrains = 12;
var dayOfWeek = "Fiday";

for(var trainNumber = 1; trainNumber <= totalTrains; trainNumber++){
	if(trainNumber <= trainsOperational && trainNumber != 3){
		console.log("Train #" + trainNumber + " is running.");
	}else if(trainNumber == 10 || trainNumber == 12){
		console.log("Train #" + trainNumber + " is runnning at noon.");
	}else if(trainNumber == 3 && dayOfWeek == "Sunday"){
		console.log("Train #3 is running.");
	}else{
		console.log("Train #" + trainNumber + " is not operational.");
	}
}


console.log("2.8 - Number of sheep----------------------------------------------------------------");
var numSheep = 4;
var monthsToPrint = 12;

for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {

  if(monthNumber%4==0){
  	console.log("Removing " + (numSheep*0.75) + " sheep from the population.");
    numSheep -= numSheep*0.75;
  }else if(numSheep > 10000){
  	console.log("Removing " + (numSheep/2) + " sheep from the population.");
    numSheep = numSheep/2;
  }

  numSheep *= 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}

console.log("2.8 - Generators and MW--------------------------------------------------------------");
var totalGen = 19;
var totalMW = 0;

for(var currentGen = 1;currentGen <= totalGen; currentGen++){
  if(currentGen%2==0){
    if(currentGen <=4){
      totalMW += 62;
    	console.log("Generator #" + currentGen + " is on, adding 62 MW, for a total of " + totalMW + " MW!");
    }else{
    	totalMW += 124;
    	console.log("Generator #" + currentGen + " is on, adding 124 MW, for a total of " + totalMW + " MW!");
    }
  }else{
  	console.log("Generator #" + currentGen + " is off.");
  }
}


/*var gotName = false;
while(gotName == false){
	var userName = prompt("Yo passenger! What's your name?");	
	if(confirm("Are you sure your name is " + userName + "?")){
		alert("'Sup " + userName + "!");
		gotName = true;
	}	
}*/

/*console.log("4.6 - Problem solving with functions--------------------------------------------------------------");
function countE(){
	var phrase = prompt("Which phrase would you like to examine?");
	if(typeof(phrase)=="string"){
        var eCount = 0;
        for(var index=0;index < phrase.length;index++){
            if(phrase.charAt(index)=="e" || phrase.charAt(index)=="E"){
                eCount++;
            }
        }
        alert("There are " + eCount + " E's in the sentence \"" + phrase + "\"");
        return true;
	}else{
		alert("That's not a valid entry!");
		return false;	
	}
}
countE();*/

function changePowerTotal(totalPowerGenerated,
                         generatorId,
                         generatorStatus,
                         amountOfPower){
  if(generatorStatus=="on"){
  	totalPowerGenerated += amountOfPower;
    alert("Generator #" + generatorId + " is now on, adding " + amountOfPower + " MW, for a total of " + totalPowerGenerated + " MW!");
  }else{
  	totalPowerGenerated -= amountOfPower;
    alert("Generator #" + generatorId + " is now off, removing " + amountOfPower + " MW, for a total of " + totalPowerGenerated + " MW!");
  }
  return totalPowerGenerated;
}

changePowerTotal(62, 2, "on", 62);


function addPassenger(name, list){
    if(list.length == 0){
        list.push(name);
        return list;
    }else{
        for(var i = 0; i < list.length; i++){
            if(list[i] == undefined){
                list[i] = name;
                return list;
            }else if(i == list.length - 1){
                list.push(name);
                return list;
            }
        }
    }
}

function deletePassenger(name, list){
    if(list.length == 0){
        console.log("List is empty");
        return list;
    }else{
        for(var i = 0; i < list.length; i++){
            if(list[i] == name){
                list[i] = undefined;
                return list;
            }else if(i == list.length -1){
                console.log("Passenger not found!")
            }
        }
    }
    return list;
}

var passengersList = [];

passengersList = addPassenger("Greg Pollack", passengersList);
passengersList = addPassenger("Ashley Smith", passengersList);
passengersList = addPassenger("John Friskics", passengersList);
passengersList = addPassenger("Fred Silva", passengersList);

console.log("Passengers: " + passengersList);

passengersList = deletePassenger("Fred Silva", passengersList);

console.log("Passengers: " + passengersList);

passengersList = deletePassenger("Fred Silva", passengersList);

