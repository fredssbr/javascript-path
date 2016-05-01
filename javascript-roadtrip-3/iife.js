/*
3 - Returning functions and immediate invocation.
Since functions can be treated as expressions, they can be returned as values.
*/

var parkRides = [
    ["Birch Bumpers", 40],
    ["Pines Plunge", 55],
    ["Cedar Coaster", 20],
    ["Ferris Wheel of Firs", 90]
];

var fastPassQueue = ["Ceddar Coaster", "Pines Plunge", "Birch Bumpers", "Pines Plunge"];

var wantsRide = "Ceddar Coaster";

function buildTicket(allRides, passRides, pick){
    if(passRides[0] == pick){
        //The shift method pops the value in the beggining of the array and returns it
        console.log("Fast pass before: " + passRides)
        var pass = passRides.shift();
        console.log("Fast pass after: " + passRides)
        return function(){alert("Quick! You've got a Fast Pass to " + pass + "!");};
    }else{
        for(var i = 0; i <allRides.length; i++){
            if(allRides[i][0] == pick){
                return function(){alert("A tickt is printing for " + pick + "!\n" + 
                                       "Your wait time is about " + allRides[i][1] + " minutes.");
                                 };
            }
        }
    }
}

//Store the function in a variable
/*var ticket = buildTicket(parkRides, fastPassQueue, wantsRide);
ticket();*/

//Prints the function
//buildTicket(parkRides, fastPassQueue, wantsRide);
//Immediately calls the function with ();
buildTicket(parkRides, fastPassQueue, wantsRide)();