/*
PROTOTYPE: every object in Javascript has inheritance from the Object Protoype.
From it, all other properties are passed down, like valueOf, hasOwnProperty, etc.

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

/*
OBJECT.CREATE = using inheritance, we can create objects using our objects as prototypes
*/
var shoe = {size: 6, gender: "women", construction: "zipper"};

var magicShoe = Object.create(shoe);

magicShoe.jewels = "ruby";
magicShoe.travelAction = "click heels";
magicShoe.actionsRequired = 3;

console.log(magicShoe);
//The prototype will remain unchanged
console.log(shoe);

Object.prototype.isPrototypeOf(shoe);
//true

shoe.isPrototypeOf(magicShoe);
//true

magicShoe.isPrototypeOf(magicShoe);
//false

Object.prototype.isPrototypeOf(magicShoe);
//true (more than one level of inheritance)

/* That way of inheriting will pass in the values of the prototype. 
For example, if we want a men's boot and use shoe as the prototype, all property values are set to women.

CLASS: a set of objects that all share and inherit from the same basic prototype.
A CONSTRUCTOR allows us to set up inheritance while also assigning specific property values.
*/

//The capitalized function will distinguish what is a constructor
function Shoe(shoeSize, shoeColor, forGender, constructStyle){
    //the THIS keyword will automatically refer to the new instance of the class that is being made
    this.shoeSize = shoeSize;
    this.shoeColor = shoeColor;
    this.forGender = forGender;
    this.constructStyle = constructStyle;
}

//The NEW keyword asks to build a new instance of something, in this case, a Shoe
var beachShoe = new Shoe(10, "blue", "women", "flipflop");
beachShoe.straps = 2;
console.log(beachShoe);

/*
By setting a constructor prototype, every new instance will refer to it for extra properties.
It does not have to be created in every instance of the class, since it does not change according to the property values.
*/
Shoe.prototype = {
    putOn: function(){alert("Shoe's on!");},
    takeOff: function(){alert("Uh, what's that smell?");};
};

//looks into itself
beachShoe.forGender();

//looks into the prototype
beachShoe.takeOff();

//hasOwnProperty is from Object Prototype - this line will inherit this property (method) from Object Prototype and check
//if construction is a property from beachShoe (Shoe class) and not from another prototype;
beachShoe.hasOwnProperty("construction");

/*
Prototypes can also refer back to the instance
We can modify the message functions in our prototype to use the data values in the calling instances
*/
Shoe.prototype = {
    putOn: function(){alert("Your " + this.construction + "'s on!");},
    takeOff: function(){alert("Phew! Somebody's size " + this.size + "'s are fragrant!");};
};

//5.7
var genericPost = {
  x: 0,
  y: 0,
  postNum: undefined,
  connectionsTo: undefined,
  sendRopeTo: function(connectedPost) {
    if (this.connectionsTo == undefined) {
      var postArray = [];
      postArray.push(connectedPost);
      this.connectionsTo = postArray;
    } else {
      this.connectionsTo.push(connectedPost);
    }
  }
};

var post1 = Object.create(genericPost);
var post2 = Object.create(genericPost);

post1.x = -2;
post1.y = 4;
post1.postNum = 1;

post2.x = 5;
post2.y = 1;
post2.postNum = 2;

post1.sendRopeTo(post2);
post2.sendRopeTo(post1);

//5.8
var post8 = Object.create(genericPost);
var post9 = Object.create(genericPost);
var post10 = Object.create(genericPost);

post8.x = 0;
post8.y = -3;
post8.postNum = 8;
post8.sendRopeTo(post10);

post9.x = 6;
post9.y = 8;
post9.postNum = 9;
post9.sendRopeTo(post10);

post10.x = -2;
post10.y = 3;
post10.postNum = 10;
post10.sendRopeTo(post8);
post10.sendRopeTo(post9);

post9.numBirds = 0;
post10.weathervane = "N";
post8.lightsOn = false;
post10.lightsOn = false;

//5.9
function Fencepost(x, y, postNum){
    this.x = x;
    this.y = y;
    this.postNum = postNum;
    this.connectionsTo = [];
    this.sendRopeTo = function(connectedPost) {
        this.connectionsTo.push(connectedPost);
    };
}

//5.10
var post18 = new Fencepost(-3, 4, 18);
var post19 = new Fencepost(5,-1, 19);
var post20 = new Fencepost(-2, 10, 20);

post18.sendRopeTo(post20);
post20.sendRopeTo(post18);
post18.sendRopeTo(post19);
post19.sendRopeTo(post18);

//5.11
function Fencepost(x, y, postNum) {
  this.x = x;
  this.y = y;
  this.postNum = postNum;
  this.connectionsTo = [];
}

Fencepost.prototype = {
    sendRopeTo: function(connectedPost) {
        this.connectionsTo.push(connectedPost);
    },
    removeRope: function(removeTo) {
        var temp = [];
        for (var i = 0; i < this.connectionsTo.length; i++) {
            if (this.connectionsTo[i].postNum != removeTo) {
                temp.push(this.connectionsTo[i]);
            }
        }
        this.connectionsTo = temp;
    },
    movePost: function(x, y) {
        this.x = x;
        this.y = y;
    }
};

/*
METHODS of PROTOTYPES

valueOf() - it brings the primitive value of the object.
For example, it gets the number out of a string.
*/

var x = 4;
var y = "4";

x.valueOf() == y.valueOf();
//returns true because operator == ignores the type of the value
//HOWEVER
x.valueOf() === y.valueOf();
//returns false because it does not ignore the type of the value (it's prefered over ==)

/*
OVERRIDING PROTOTYPAL PROPERTIES

Let's say we want a more informative result from valueOf() over a custom object 
*/

var Tornado = function(category, affectedAreas, windGust){
    this.category = category;
    this.affectedAreas = affectedAreas;
    this.windGust = windGust;
}

var cities = [["Kansas City", 464310], ["Topeka", 127939], ["Lenexa", 49398]];
var twister = new Tornado("F5", cities, 220);

//Overriding valueOf
Tornado.prototype.valueOf = function(){
    var sum = 0;
    for(var i = 0; i < this.affectedAreas.length; i++){
        sum += this.affectedAreas[i][1];
    }
    return sum;
};

//It won't call the Object.prototype.valueOf
twister.valueOf();

/* 
toString()
*/
Tornado.prototype.toString = function(){
    var list = "";
    for(var i = 0; i < this.affectedAreas.length; i++){
        if(i < this.affectedAreas.length - 1){
            list = list + this.affectedAreas[i][0] + ", ";
        }else{
            list = list + "and " + this.affectedAreas[i][0];
        }
    }
    return "This tornado has been classified as an " + this.category + 
        ", with wind gusts up to " + this.windGust + "mph. Affected areas are: " +
        list + ", pottentially affecting a population of " + this.valueOf() + ".";
};

twister.toString();

twister.constructor;
twister.constructor.prototype;
twister.__proto__;

/*
hasOwnProperty() - helps find the owner of a particular property
*/

//Object Prototype has no Prototype (it's the highest level)
Object.prototype.findOwnerOfProperty = function(propName){
    var currentObject = this;
    while(currentObject !== null){
        if(currentObject.hasOwnProperty(propName)){
            return currentObject;
        }else{
            currentObject = currentObject.__proto__;
        }        
    }
    return "No property found!";
};

twister.findOwnerOfProperty("valueOf");
twister.findOwnerOfProperty("goToOz");

//5.13
Fencepost.prototype.valueOf = function(){
	return Math.sqrt( Math.pow(this.x, 2) + Math.pow(this.y, 2));
};

//5.14
Fencepost.prototype.toString = function(){
    var list = "";
    for (var i = 0; i < this.connectionsTo.length; i++){
        list += this.connectionsTo[i].postNum + "\n";
    }
    return "Fence post #" + this.postNum + ":\n" +
        "Connected to posts:\n" + list + "Distance from ranch: " + this.valueOf() + " yards";
};
