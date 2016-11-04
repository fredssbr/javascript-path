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