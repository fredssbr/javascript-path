/*
ARRAY - data structure that represent an indexed list of elements.
The elements can be of different types and also be arrays
*/

/*Empty array*/
var myArray = []

/*Array of strings*/
var passengers = ["Gregg Pollack", "Aimee Simone", "Fred Silva"]

/*
ARRAY METHODS
*/

/*
POP - deletes the last position and returns its value
result: ["Gregg Pollack", "Aimee Simone"]
*/
var lastPassenger = passengers.pop();

/*
PUSH - adds a cell in the last position and insert the value
result: ["Gregg Pollack", "Aimee Simone", "Eliot Alderson"]
*/
passengers.push("Eliot Alderson");

/*
Example of an array of arrays
*/
var comboArray1 = ["cat", "dog", "deer", "whale", 1];
var comboArray2 = ["octopus", "squid", "clam", "oister", 2];
var arrayOfArrays = [comboArray1, comboArray2];
arrayOfArrays[0][2];//returns "deer"
arrayOfArrays[1][3];//returns "oister"

//5.2
var list = [1, 2, 3, 7, 5, 6, 7, 8, 9];
list[3] = 4;

//5.3
list.push(10);

//5.4
var values = ["Sponge Bob", 5, false];

//5.5
var bool = values.pop();

//5.6
var movie1 = [16, "Candles"];
var movie2 = [3, "Men", "and", "a", "Baby"];
var eightiesMovies = [movie1, movie2];
var infant = eightiesMovies[1][4];

//5.7
alert(eightiesMovies[0][0] + " " + eightiesMovies[0][1]);

//5.9
function numStrings(list) {
    count = 0;
    for(var index = 0; index < list.length; index++){
        if(typeof(list[index]) == "string"){
            count++;
        }
    }
    return count;
}