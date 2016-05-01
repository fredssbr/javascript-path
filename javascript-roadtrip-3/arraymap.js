//Using FE with arrays and maps
var numbers = [12,7,5,66,14,58,32,44];
//the array.map() loops through all indexes in the array and returns a new array
var results = numbers.map(function(arrayCell){return arrayCell*2;});

console.log(results);

//Exercise 1.7
var passengers = [ ["Thomas", "Meeks"],
                   ["Gregg", "Pollack"],
                   ["Christine", "Wong"],
                   ["Dan", "McGaw"] ];

var modifiedNames = passengers.map(function(arrayCell){return arrayCell[0]+" "+arrayCell[1];});

console.log(modifiedNames);

//Exercise 1.8
modifiedNames.map(function(arrayCell){console.log("Yo, " + arrayCell + "!");});

//Exercise 1.9
var puzzlers = [
    function(input){return 3 * input -8;},
    function(input){return (input + 2)*(input + 2)*(input + 2);},
    function(input){return input*input - 9;},
    function(input){return input%4;}
];