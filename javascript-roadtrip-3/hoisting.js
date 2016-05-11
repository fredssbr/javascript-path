/* HOISTING: A concept about program load order
Every time a scope is opened, memory is set aside for the values of that scope.
*/

//How it's built
function sumOfSquares(a,b){
    var x = add(a*a,b*b);
    return x;
    function add(c,d){
        var a = c + d;
        return a;
    }
}
//How javascript loads it
function sumOfSquares(a,b){
    var x = undefined;//variable is hoisted to the top
    function add(c,d){//declared stuff that needs space in memory is hoisted
        var a = c + d;
        return a;
    }
    //Last, the executable code
    x = add(a*a,b*b);
    return x;    
}

/*CAREFUL WITH CODE ORDER(HOISTING)-----------------------------------------------------*/
function getMisteryNumber(){
    function chooseMistery(){
        return 12;
    }
    return chooseMistery();
    function chooseMistery(){
        return 7;
    }
}
//How javascrit loads it
function getMisteryNumber(){
    function chooseMistery(){//This function is overwritten(redefined) with the last
        return 12;
    }
    function chooseMistery(){
        return 7;
    }
    return chooseMistery();//we get 7
}
/*FUNCTION EXPRESSIONS ARE NEVER HOISTED - they are treated as assignments------------*/
function getMisteryNumber(){
    var chooseMistery = function(){
        return 12;
    }
    return chooseMistery();
    var chooseMistery = function(){
        return 7;
    }
}
//How javascript loads it
function getMisteryNumber(){
    var chooseMistery = undefined;//overwritten
    var chooseMistery = undefined;
    chooseMistery = function(){
        return 12;
    }
    return chooseMistery();//returns 12
    chooseMistery = function(){//Unreachable!
        return 7;
    }
}
/*Another example - ERROR------------------------------------------------------------*/
function getMisteryNumber(){
    return chooseMistery();
    var chooseMistery = function(){
        return 12;
    }
    var chooseMistery = function(){
        return 7;
    }
}

//How javascript loads it
function getMisteryNumber(){
    var chooseMistery = undefined;//overwritten
    var chooseMistery = undefined;
    return chooseMistery();//first line of executable code - ERROR!!!
    chooseMistery = function(){
        return 12;
    }
    chooseMistery = function(){
        return 7;
    }
}

/*Example with the trains---------------------------------------------------------*/
function capacityStatus(numPassengers, capacity){
    if(numPassengers == capacity){
        noSeats();
    }else{
        seatsAvail();
    }
    
    var noSeats = function(){
        alert("No seats left!");
        return false;
    }
    
    var seatsAvail = function(){
        alert("There are " + (capacity - numPassengers) + " seats left!");
        return true;
    }
}
//Javascript hoisting
function capacityStatus(numPassengers, capacity){
    var noSeats = undefined;
    var seatsAvail = undefined;
    if(numPassengers == capacity){
        noSeats();//it doesn't exist = ERROR!!!!!!!!!
    }else{
        seatsAvail();
    }    
    noSeats = function(){
        alert("No seats left!");
        return false;
    };
    
    seatsAvail = function(){
        alert("There are " + (capacity - numPassengers) + " seats left!");
        return true;
    };
}
/*HOW TO AVOID ERRORS*/

/*1 - HOIST ALL THE DECLARATIONS------------------------------------------*/
function capacityStatus(numPassengers, capacity){
    var noSeats = function(){
        alert("No seats left!");
        return false;
    }
    
    var seatsAvail = function(){
        alert("There are " + (capacity - numPassengers) + " seats left!");
        return true;
    }
    if(numPassengers == capacity){
        noSeats();
    }else{
        seatsAvail();
    }
}
//How javascript loads it
function capacityStatus(numPassengers, capacity){
    var noSeats = undefined;
    var seatsAvail = undefined;
    noSeats = function(){
        alert("No seats left!");
        return false;
    }    
    seatsAvail = function(){
        alert("There are " + (capacity - numPassengers) + " seats left!");
        return true;
    }
    if(numPassengers == capacity){
        noSeats();
    }else{
        seatsAvail();
    }
}
/*2 - USE DECLARED FUNCTIONS INSTEAD OF FE---------------------------------*/
function capacityStatus(numPassengers, capacity){
    /*declared stuff is hoisted no matter where they are*/
    function noSeats(){
        alert("No seats left!");
        return false;
    }
    
    function seatsAvail(){
        alert("There are " + (capacity - numPassengers) + " seats left!");
        return true;
    }
    
    if(numPassengers == capacity){
        noSeats();
    }else{
        seatsAvail();
    }
}
