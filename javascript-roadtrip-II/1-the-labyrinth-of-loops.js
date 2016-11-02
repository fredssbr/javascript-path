/*
LOOP - helps execute code repetitively, without having to type every time you want to execute something
*/

/*
*WHILE LOOP - will execute while the condition is true
*/
trainNumber = 1
while(trainNumber <= 8){
    console.log("Train #" + trainNumber + " is running.");
    trainNumber++;
}

//1.2
var num = 10;
while(num >= 1){
    console.log(num);
    num--;
}

//1.3
var numSheep = 4;
var monthNumber = 1;
var monthsToPrint = 12;
while(monthNumber <= monthsToPrint){
    numSheep *= 4;
    console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
    monthNumber++;
}

/*
*FOR LOOP - consists of three statements: initialization, condition and what we want to do after each loop
*/
for(var trainNumber = 1;trainNumber <=8; trainNumber++){
    console.log("Train #" + trainNumber + " is running.");
}

//1.5
for(var num = 10; num > 0; num--){
  console.log(num);
}

//1.6
var numSheep = 4;
var monthsToPrint = 12;
for(var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++){
    numSheep *= 4;
    console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");    
}

//1.7
var currentGen = 1;
var totalGen = 19;
var totalMW = 0;

while(currentGen < 5){
    totalMW += 62;
    console.log("Generator #" + currentGen + " is on, adding 62 MW, for a total of " + totalMW + " MW!");
    currentGen++;    
}

for(;currentGen <= 19; currentGen++){
    totalMW += 124;
    console.log("Generator #" + currentGen + " is on, adding 124 MW, for a total of " + totalMW + " MW!");
}