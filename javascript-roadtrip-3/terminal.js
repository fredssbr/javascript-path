//Assign the function to the variable (the function doesn't have a name = anonymous function)
var greeting;
var newCustomer = true;

if(newCustomer){
    greeting = function(){
        alert("Thanks for visiting the Badlands!\n" +
              "We hope your stay is...better than most.");
    };
}else{
    greeting = function(){
        alert("Welcome back to the Badlands!\n" +
              "Guess they aren't so bad huh?");
    };
}
    

closeTerminal(greeting);

//A declared function is loaded with the document
function closeTerminal(message){
    message();
}


