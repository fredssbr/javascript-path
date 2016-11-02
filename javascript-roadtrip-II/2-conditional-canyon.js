//2.2
var num = 10;
while (num > 0) {
    if(num%2 == 0){
        console.log(num);
    }
    num--;
}

//2.3
var parkIsOpen = true;
if(parkIsOpen){
    console.log("Welcome to the Badlands National Park! Try to enjoy your stay.");
}else{
    console.log("Sorry, the Badlands are particularly bad today. We're closed!");
}

//2.5
var numSheep = 4;
var monthsToPrint = 12;

for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {

  if(numSheep > 10000){
      numSheep /=2;
      console.log("Removing " + numSheep + " sheep from the population.");
  }

  numSheep *= 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}

//2.7
var numSheep = 4;
var monthsToPrint = 12;

for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {

  if(monthNumber%4==0){
      console.log("Removing " + numSheep*0.75 + " sheep from the population.");
      numSheep -= numSheep*0.75;
  }else if(numSheep > 10000){
      numSheep /=2;
      console.log("Removing " + numSheep + " sheep from the population.");
  }

  numSheep *= 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}

//2.8
var totalGen = 19;
var totalMW = 0;
for(var genNum = 1; genNum <= 19; genNum++){
    if(genNum%2 == 0){
        if(genNum < 5){
            totalMW += 62;
            console.log("Generator #" + genNum + " is on, adding 62 MW, for a total of " + totalMW + " MW!");
        }else{
            totalMW += 124;
            console.log("Generator #" + genNum + " is on, adding 124 MW, for a total of " + totalMW + " MW!");
        }    
    }else{
        console.log("Generator #" + genNum + " is off.");
    }    
}