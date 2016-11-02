/*
*BUILT-IN FUNCTIONS
*/

//ALERT - show a message box to the user
alert("Show this message to the user in the browser");

//CONFIRM - show a message box with the OK and Cancel option (returns true or false)
var answer = confirm("Are you sure you wanna ride train #8?")

//PROMPT - show a message and field to input data (returns the input)
//If you don't type anything then it's a null object (typeof null)
var age = prompt("What's your age?")

//TYPEOF - returns the type of an expression
typeof true //boolean
typeof "That's not a valid entry!"//string
typeof 42//number
typeof undefined//undefined
typeof null//object

//3.2
var parkIsOpen = false;
if (parkIsOpen) {
    alert("Welcome to the Badlands National Park! Try to enjoy your stay.");
} else {
 	alert("Sorry, the Badlands are particularly bad today. We're closed!");
}

//3.3
var userAge = prompt("What's your age, user?");

//3.4
var userAge = prompt("What's your age, user?");
var ageIsCorrect = confirm("You entered " + userAge + ". Is this correct?");

//3.5
var ageIsCorrect = false;
while(!ageIsCorrect){
    var userAge = prompt("What's your age, user?");
    if(confirm("You entered " + userAge + ". Is this correct?")){
        ageIsCorrect = true;
        alert("Great! Your age is logged as " + userAge + ".")
    }
}
    