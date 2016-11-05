var greeting;
var newCustomer = false;

if(newCustomer){
    greeting = function(){
        alert("Thanks for visiting the Badlands!\nWe hope your stay is...better than most.");
    };
}else{
    greeting = function(){
        alert("Welcome back to the Badlands!\nGuess they aren't so bad, huh?")
    };
}

closeTerminal(greeting);

function closeTerminal(message){
    message();
}

//Ticket system for the forest theme park - using an array as a queue for fast pass delivery
var parkRides = [["Birch Bumpers", 40], ["Pines Plunge", 55], ["Cedar Coaster", 20], ["Ferris Wheel of Firs", 90]];
var fastPassQueue = ["Cedar Coaster", "Pines Plunge", "Birch Bumpers", "Pines Plunge"];

function buildTicket(allRides, passRides, pick){
    if(passRides[0] == pick){
        var pass = passRides.shift();
        return function(){ alert("Quick! You've got a Fast Pass to " + pass + "!");};
    }else{
        for(var i = 0; i < allRides.length; i++){
            return function(){
                alert("A ticket is printing for " + pick + "!\nYour wait time is about " + allRides[i][1] + " minutes.");
            };
        }
    }
}

var wantsRide = "Birch Bumpers";
buildTicket(parkRides, fastPassQueue, wantsRide)();
