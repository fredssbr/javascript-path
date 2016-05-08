/*
A closure wraps up an entire environment, binding necessary variables from other scopes.
For example, when a function is returned and inside that function, a variable has been assigned a value.
If you call print the function, you will not see the values, rather, they are stored in memory.

A closure can make the creation of similar function ultra-efficient.
You can see closures in memory when you debug your javascript code in Chrome.

They are much like an object, that is instantiated every time they are called.
*/

function buildCoveTicketMaker(transport){
    var passenger = 0;
    return function(name){
        passenger++;
        alert("Here is your transportation ticket via the " + transport + ".\n" +
             "Welcome to the Cold Closures Cove, " + name + "!\n" +
             "You are passenger #" + passenger + ".");
    }
}

var getSubmarineTicket = buildCoveTicketMaker("Submarine");
var getBattleShipTicket = buildCoveTicketMaker("Battleship");
var getGiantSeagullTicket = buildCoveTicketMaker("Giant Seagull");

getSubmarineTicket("Mario");
getSubmarineTicket("Toad");
getSubmarineTicket("Princess");
getBattleShipTicket("Luigi");
getGiantSeagullTicket("Bowser");


/*
DANGERS OF CLOSURES: LOOPS WITH CLOSURES

One of the dangers of using closures is that it will assign the last state of a variable to return.
In this case, it will return with i = 8, because it has looped through all items in the array.
*/
function assignTorpedo(name, passengerArray){
    var torpedoAssignment;
    for (var i=0; i<passengerArray.length; i++){
        if(passengerArray[i] == name){
            torpedoAssignment = function(){
                alert("Ahoy, " + name + "!\n" + 
                     "Man your post at Torpedo #" + (i + 1) + "!");  
            };
        }
    }
    return torpedoAssignment;
}
var subPassengers = ["Luke","Leia","Han","Chewie","Yoda","R2-D2","C3-PO","Boba"];
var giveAssignment = assignTorpedo("Chewie", subPassengers);
giveAssignment();

/*
One way to avoid this behaviour is returning the function as soon as the loop meets the condition we want,
making the last state of i = 3
*/
function assignTorpedo2(name, passengerArray){
    for (var i=0; i<passengerArray.length; i++){
        if(passengerArray[i] == name){
            return function(){
                alert("Ahoy, " + name + "!\n" + 
                     "Man your post at Torpedo #" + (i + 1) + "!");  
            };
        }
    }
}
var giveAssignment2 = assignTorpedo2("Chewie", subPassengers);
giveAssignment2();

/*
Another way is to place the loop inside the returned function/expression.
This way, the only closed variable is the parameter passengerArray
*/
function makeTorpedAssigner(passengerArray){
    return function(name){
        for (var i=0; i<passengerArray.length; i++){
            if(passengerArray[i] == name){
                    alert("Ahoy, " + name + "!\n" + 
                         "Man your post at Torpedo #" + (i + 1) + "!");  
            }
        }
    };
}

var torpedoAssignee = makeTorpedAssigner(subPassengers);
torpedoAssignee("Yoda")();


