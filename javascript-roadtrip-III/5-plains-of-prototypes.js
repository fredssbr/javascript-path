/*
PROTOTYPE: every object in Javascript has inherit from the Object Protoype.
From it, all other properties are passed down, like valurOf, hasOwnProperty, etc.

ARRAY PROTOTYPE
    An ARRAY object, for exemple, inherits its properties (methods) like pop(), push(), shift(), reverse(), sort(), etc from the Array Prototype.

STRING PROTOTYPE
    The same goes to STRING object with the String Prototype length(), charAt()

NUMBER PROTOTYPE
    Also, NUMBER objects have a Number Prototype and some properties like toFixed(), toPrecision(), toExponential()

FUNCTION PROTOTYPE
    Functions are objects too, from the Function Prototype and name, bind(), call(), apply() properties

All these prototypes inherit from the OBJECT PROTOTYPE

The properties from Object Prototype are owned by it and when we use them in a String Prototype, they are used with reference from Object Prototype,
it is not stored in the String Prototype. Thus, Object gives String access to it.
*/

/*
ADDING PROPERTIES TO PROTOTYPES

We can add a new property to a prototype, so that all objects from that type will have access to that property.

In the example bellow, we add this functionality to all strings, even the ones that already exists before the creation of the property.
*/

var witch = "I'll get you, my pretty...and your little dog, too!";
var scarecrow = "Well, some people without brains do an awful lot of talking, don't they?";
var glinda = "Be gone! Before someone drops a house on you!";
var dorothy = "There's no place like home.";
var lion = "Come on, get up and fight, you shivering junkyard!";
var wizard = "Do not arouse the wrath of the great and powerful Oz!";
var tinman = "Now I know I have a heart, because it's breaking.";

String.prototype.countAll = function(letter){
    var letterCount = 0;
    /*since the string we are interested in will be calling countAll on itself, 
    the function should look for its caller's length using the keyword THIS*/
    for(var i = 0; i < this.length; i++){
        if(this.charAt(i).toUpperCase() == letter.toUpperCase()){
            letterCount++;
        }
    }
    return letterCount;
};

witch.countAll("I");
scarecrow.countAll("o");
lion.countAll("k");

//5.2
var canyonCows = [
    {name: "Bessie", type: "cow", hadCalf: "Burt"},
    {name: "Donald", type: "bull", hadCalf: null},
    {name: "Esther", type: "calf", hadCalf: null},
    {name: "Burt", type: "calf", hadCalf: null},
    {name: "Sarah", type: "cow", hadCalf: "Esther"},
    {name: "Samson", type: "bull", hadCalf: null},
    {name: "Delilah", type: "cow", hadCalf: null}
];

Array.prototype.countCattle = function(kind){
    var numKind = 0;
    for(var i = 0; i < this.length; i++){
        if(this[i].type == kind){
            numKind++;
        }
    }
    return numKind;
};

//5.3
var canyonCows = [
    {name: "Bessie", type: "cow", hadCalf: "Burt"},
    {name: "Donald", type: "bull", hadCalf: null},
    {name: "Esther", type: "calf", hadCalf: null},
    {name: "Burt", type: "calf", hadCalf: null},
    {name: "Sarah", type: "cow", hadCalf: "Esther"},
    {name: "Samson", type: "bull", hadCalf: null},
    {name: "Delilah", type: "cow", hadCalf: null}
];

var valleyCows = [
    {name: "Danielle", type: "cow", hadCalf: null},
    {name: "Brittany", type: "cow", hadCalf: "Christina"},
    {name: "Jordan", type: "bull", hadCalf: null},
    {name: "Trevor", type: "bull", hadCalf: null},
    {name: "Christina", type: "calf", hadCalf: null},
    {name: "Lucas", type: "bull", hadCalf: null}
];

var forestCows = [
    {name: "Legolas", type: "calf", hadCalf: null},
    {name: "Gimli", type: "bull", hadCalf: null},
    {name: "Arwen", type: "cow", hadCalf: null},
    {name: "Galadriel", type: "cow", hadCalf: null},
    {name: "Eowyn", type: "cow", hadCalf: "Legolas"}
];

alert(canyonCows.countCattle("calf") + valleyCows.countCattle("bull") + forestCows.countCattle("cow"));

//5.4
Object.prototype.noCalvesYet = function(){
    if(this.type == "cow" && this.hadCalf == null){
        return true;
    }
    return false;
};

Array.prototype.countForBreeding = function(){
    var numToBreed = 0;
    for(var i = 0; i < this.length; i++){
        if(this[i].noCalvesYet()){
            numToBreed++;
        }
    }
    return numToBreed;
};

//5.5
var canyonCows = [
    {name: "Bessie", type: "cow", hadCalf: "Burt"},
    {name: "Donald", type: "bull", hadCalf: null},
    {name: "Esther", type: "calf", hadCalf: null},
    {name: "Burt", type: "calf", hadCalf: null},
    {name: "Sarah", type: "cow", hadCalf: "Esther"},
    {name: "Samson", type: "bull", hadCalf: null},
    {name: "Delilah", type: "cow", hadCalf: null}
];

var valleyCows = [
    {name: "Danielle", type: "cow", hadCalf: null},
    {name: "Brittany", type: "cow", hadCalf: "Christina"},
    {name: "Jordan", type: "bull", hadCalf: null},
    {name: "Trevor", type: "bull", hadCalf: null},
    {name: "Christina", type: "calf", hadCalf: null},
    {name: "Lucas", type: "bull", hadCalf: null}
];

var forestCows = [
    {name: "Legolas", type: "calf", hadCalf: null},
    {name: "Gimli", type: "bull", hadCalf: null},
    {name: "Arwen", type: "cow", hadCalf: null},
    {name: "Galadriel", type: "cow", hadCalf: null},
    {name: "Eowyn", type: "cow", hadCalf: "Legolas"}
];

var badlandsCows = [
    {name: "Voldemort", type: "bull", hadCalf: null},
    {name: "Maleficent", type: "cow", hadCalf: null},
    {name: "Ursula", type: "cow", hadCalf: "Draco"},
    {name: "Draco", type: "calf", hadCalf: null},
    {name: "Joker", type: "bull", hadCalf: null},
    {name: "Chucky", type: "calf", hadCalf: null},
    {name: "Samara", type: "cow", hadCalf: "Chucky"}
];

var numPriorityCows = canyonCows.countForBreeding() + 
    valleyCows.countForBreeding() +
    forestCows.countForBreeding() + 
    badlandsCows.countForBreeding();

alert("Herd-merger has indicated " + numPriorityCows + " cows of top breeding priority.");