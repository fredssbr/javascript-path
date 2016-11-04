/*
FUNCTIN EXPRESSIONS

A declared function is built in memory when the program loads.*/
    function diffOfSquares(a, b){
        return a*a - b*b;
    }
/*
A function expression only loads when the program reaches that line of code. The function can be anonymous, since you assign it to a variable.*/
    var diff = function (a, b){
        return a*a - b*b;
    };

/*
Since it's a statement, you'll need ; at the end.
Execute with diff(9, 5) - i.e. call the function with the variable name

ARRAY MAP - the method map of the array object takes in a function as parameter and returns a new array with the result.
It applies the function for every element of the array(the array element is passed in as a parameter to this function):
*/
var number = [12, 4, 3, 9, 8, 6, 10, 1];
var results = number.map(function(arrayCell){return arrayCell * 2;});

//1.2
var runAway = function() {
    var toAlert = "";
    for (var i = 0; i < 5; i++) {
        toAlert = toAlert + "Lions, Tigers, and Bears, Oh My!!\n";
    }
    alert(toAlert);
};

//1.3
var people = 10;
var rain = 10;
var sharks = 3;

var fearGenerated = function(numPeeps, rainInInches, numSharks) {
    var rainFear = numPeeps * rainInInches;
    var sharkFear = numSharks * numSharks * numSharks;
    var totalFear = sharkFear + rainFear;
    return totalFear;
};

var fear = fearGenerated(people, rain, sharks);

//1.4
alert(fearGenerated);

//1.5
var fear = fearGenerated(numPeeps, rainInInches, numSharks);

var fearMessage = function() {
    if(fear < 200){
        return "Fear Level: LOW\nStill wanna ride?";
    }else if(fear >= 200 && fear <= 300){
        return "Fear Level: MEDIUM\nThink you'll make it?";
    }
};

function confirmRide(confirmToGo) {
    return confirmToGo();
}

// Call confirmRide with the fearMessage function
var startRide = confirmRide(fearMessage);

//1.7
var passengers = [ ["Thomas", "Meeks"],
                   ["Gregg", "Pollack"],
                   ["Christine", "Wong"],
                   ["Dan", "McGaw"] ];

var modifiedNames = passengers.map(function(arrayCell){
    return arrayCell[0] + " " + arrayCell[1];
});

//1.8
modifiedNames.map(function(name){alert("Yo, " + name + "!")});

//1.9
var puzzlers = [function(input){return 3 * input - 8;}, 
                function(input){return Math.pow((input + 2),3);},
                function(input){return input * input - 9;},
                function(input){return input % 4;}
               ];