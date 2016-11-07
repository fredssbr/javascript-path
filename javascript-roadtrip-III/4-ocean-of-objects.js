/*
OBJECT

a container of related information, composite value.
Like a book and its properties:
    title
    author
    publisher
    chapters
    pages

Properties of an object can be anything (strings, numbers, arrays, objects)
*/

//Object literal - curly brackets create a new object

var myBox = {
    height: 6,
    width: 8,
    length: 10,
    volume: 480,
    material: "cardboard",
    contents: ["Great Expectations", "The Remains of the Day", "Peter Pan"]
}

//Since the object accepts variables, we could pass a reference to an array
 var booksArray = ["Great Expectations", "The Remains of the Day", "Peter Pan"];
var myBox = {
    height: 6,
    width: 8,
    length: 10,
    volume: 480,
    material: "cardboard",
    contents: booksArray
}

//To access its properties
myBox.height;//6
myBox.contents;//booksArray

//To change values
myBox.height = 12;
myBox.volume = myBox.height * myBox.width * myBox.length;

//To change the array (which will also change booksArray because it's a reference to that variable)
myBox.contents.push("On The Road");

//You can add properties by assign values to non-existent ones.
myBox.destination1 = "Orlando";
myBox.destination2 = "Miami";

//You can also access, create and attibute values to properties by using brackets []
myBox["volume"];
myBox["material"];

//You can create properties with spaces when you use brackets.
//WARNING: you cannon use . to access this property.
myBox["# of stops"] = 2;

//the brackets take expressions
for(var i = 1; i <= myBox["# of stops"]; i++){
    console.log(myBox["destination" + i]);
}

//the contents could also be individual objects
//DELETE: it will wipe out the property of the object (it always returns true)
delete myBox.contents;

myBox["# of Books"] = 0;

function addBook(box, name, writer){
    box["# of Books"]++;
    box["book" + box["# of Books"]] = {title: name, author: writer};
}

addBook(myBox, "Great Expectations", "Charles Dickens");
addBook(myBox, "The Remains of the Day", "Kazuo Ishiguro");
addBook(myBox, "Peter Pan", "J. M. Barrie");
addBook(myBox, "On the Road", "Jack Kerouac");

console.log(myBox.book1.title);
console.log(myBox["book4"]["author"]);

//4.2
var vehicle1 = {type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot"};
var vehicle2 = {type: "Jet Ski", capacity: 1, storedAt: "Reef Dock"};
var vehicle3 = {type: "Submarine", capacity: 8, storedAt: "Underwater Outpost"};

//4.3
console.log(vehicle1.capacity);

//4.4
var vehicles = [vehicle1, vehicle2, vehicle3];
var findVehicle = function(name, list){
    for(var i = 0; i < list.length; i++){
        if(list[i].type == name){
            return list[i].storedAt;
        }
    }
};
findVehicle("Submarine", vehicles);

//4.5
vehicle1.capacity += 4;
vehicle2.submersible = false;
vehicle3.weapon = "Torpedoes";
vehicle1.submersible = false;
vehicle2.weapon = "Lasers";
vehicle3.capacity *= 2;
vehicle1.weapon = "Rear-Mounted Slingshot";
vehicle3.submersible = true;

//4.6
vehicle1["# of weapons"] = 1;
vehicle2["# of weapons"] = 4;
vehicle3["# of weapons"] = 8;

//4.7
var superBlinders = [
  ["Firelight", 4000],
  ["Solar Death Ray", 6000],
  ["Supernova", 12000]
];

var lighthouseRock = {
    gateClosed: true,
    bulbs: [200, 500, 750],
    capacity: 30,
    secretPassageTo: "Underwater Outpost"
};

delete lighthouseRock.bulbs;
lighthouseRock.weaponBulbs = superBlinders;
console.log(lighthouseRock.weaponBulbs[2][0]);

//4.8
var lighthouseRock = {
    gateClosed: true,
    bulbs: [200, 500, 750],
    capacity: 30,
    secretPassageTo: "Underwater Outpost",
    numRangers: 0
};

function addRanger(location, name, skillz, station){
    location.numRangers++;
    location["ranger" + location.numRangers] = {
        name: name,
        skillz: skillz,
        station: station
    };
}

addRanger(lighthouseRock, "Nick Walsh", "magnification burn", 2);
addRanger(lighthouseRock, "Drew Barontini", "uppercut launch", 3);
addRanger(lighthouseRock, "Christine Wong", "bomb defusing", 1);

//4.9
var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];

var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 3,
  ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
  ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
  ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1}
};

function dontPanic(location) {
    var list = "Avast, me hearties!\n" +
        "There be Pirates nearby! Stations!\n";

    for(var i = 1; i <= location.numRangers; i++){
        list += location["ranger" + i]["name"] + ", man the " + 
            location.weaponBulbs[location["ranger" + i]["station"] - 1][0] + "!\n";
    }
    alert(list);
}

dontPanic(lighthouseRock);

/*
OBJECT FUNCTIONALITY: we can also add functions to objects (called METHODS).
*/

var aquarium = {
    Nemo: {type: "fish", species: "clownfish", length: 3.7},
    Marlin: {type: "fish", species: "clownfish", length: 4.1},
    Dory: {type: "fish", species: "blue tang", length: 6.2},
    Peach: {type: "echinoderm", species: "starfish", length: 5.3},
    "Coral Castle": {type: "environment", material: "coquina", moves: false},
    "Dragon Statue": {type: "environment", material: "plastic", moves: false},
    addCritter: function(name, type, species, length){
        //the word THIS refers to the same object, in this case aquarium
        this[name] = {type: type, species: species, length: length};
    }
}

aquarium.addCritter("Bubbles", "fish", "yellow tang", 5.6);

//add a function to delete objects
aquarium.takeOut = function(name){
    //if we delete the property (object), we are gonna lose the name, so let's add a name to what we are going to remove
    this[name].name = name;
    
    var temp = this[name];
    delete this[name];
    return temp;
};

var fishOutOfWater = aquarium.takeOut("Marlin");
var toy = aquarium.takeOut("Dragon Statue");

//4.11
var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];

var lighthouseRock = {
    gateClosed: true,
    weaponBulbs: superBlinders,
    capacity: 30,
    secretPassageTo: "Underwater Outpost",
    numRangers: 3,
    ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
    ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
    ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1},
    addRanger: function(name, skillz, station) {
        this.numRangers++;
        this["ranger" + this.numRangers] = {
            name: name,
            skillz: skillz,
            station: station
        };
    }
};

//4.12
lighthouseRock.addRanger("Jordan Wade", "dual-wield hand crossbow", 4);

//4.13
lighthouseRock.addBulb = function(name, wattage){
    this.weaponBulbs.push([name, wattage]);
};

//4.14
lighthouseRock.addBulb("Blasterbright", 5000);
lighthouseRock.addBulb("Sight Slayer", 1800);
lighthouseRock.addBulb("Burner of Souls", 7500);
