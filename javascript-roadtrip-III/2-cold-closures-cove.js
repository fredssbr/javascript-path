/*
CLOSURE
A closure wraps up an entire environment, binding necessary variables from other scopes
*/

function testClosure(){
    var x = 4;
    function closeX(){
        return x;
    }
    return closeX;
}

var checkLocalX = testClosure();
checkLocalX();

/*
PROBLEMS WITH CLOSURE
*/

function assignTorpedo(name, passengerArray){
    var torpedoAssignment;
    for(var i = 0; i < passengerArray.length; i++){
        if(passengerArray[i] == name){
            torpedoAssignment = function(){
                alert("Ahoy, " + name + "!\nMan your post at Torped #" + (i + 1) + "!");
            };
        }
    }
    return torpedoAssignment;
}

var subPassengers = ["Luke", "Leia", "Han", "Chewie", "Yoda", "R2-D2", "C-3PO", "Boba"];
var giveAssignment = assignTopedo("Chewie", subPassengers);
giveAssignment();

/*
The function above would return that Chewie is in the last position.
It happens because the closed value will be the last one in the loop, i = 8, hence Chewie would man the #9 torpedo

In order to avoid it, we COULD BREAK THE LOOP, BY RETURNING THE FUNCTION WHEN NAME IS FOUND IN THE ARRAY
*/
function assignTorpedo(name, passengerArray){
    for(var i = 0; i < passengerArray.length; i++){
        if(passengerArray[i] == name){
            return function(){
                alert("Ahoy, " + name + "!\nMan your post at Torped #" + (i + 1) + "!");
            };
        }
    }
}

/*
Or, we could place the for loop inside the returned function.
*/
function makeTorpedoAssigner(passengerArray){
    return function(name){
        for(var i = 0; i < passengerArray.length; i++){
            if(passengerArray[i] == name){
                alert("Ahoy, " + name + "!\nMan your post at Torped #" + (i + 1) + "!");
            }
        }
    };
}

var giveAssignmentFor = makeTorpedoAssigner(subPassengers);
giveAssignmentFor("Chewie");


//2.2
function mystery() {
  var secret = 6;
  function mystery2(multiplier) {
    multiplier *= 3;
    return secret * multiplier;
  }
  return mystery2;
}

var hidden = mystery();
var result = hidden(3);
alert(54);

//2.3
function mystery(input) {
  var secret = 5;
  function mystery2(multiplier) {
    multiplier *= input;
    return secret * multiplier;
  }
  return mystery2;
}

var hidden = mystery(4);
var result = hidden(2);
alert(40);

//2.4
function mystery(input) {
  var secret = 4;
  input += 2;
  function mystery2(multiplier) {
    multiplier *= input;
    return secret * multiplier;
  }
  return mystery2;
}

function mystery3(param) {
  function mystery4(bonus) {
    return param(6) + bonus;
  }
  return mystery4;
}

var hidden = mystery(3);
var jumble = mystery3(hidden);
var result = jumble(2);
alert(122);

//2.5
function warningMaker(obstacle){
    return function(){
        alert("Beware! There have been " + obstacle + " sightings in the Cove today!");
    };
}

//2.6
var icebergAlert = warningMaker("iceberg");
icebergAlert();

//2.7
function warningMaker(obstacle){
    return function(number, location){
        alert("Beware! There have been " + obstacle + " sightings in the Cove today!\n" + number + " have been spotted at the " + location + "!");
    };
}

//2.8
var killerPenguinAlert = warningMaker("killer penguin");
var polarBearAlert = warningMaker("polar bear");
var icebergAlert = warningMaker("iceberg");
var flashBlizzardAlert = warningMaker("flash blizzard");
var snowYetiAlert = warningMaker("snow yeti");

killerPenguinAlert(6, "Ice Caves");
snowYetiAlert(1, "Blizzard Beach");

//2.10
function warningMaker(obstacle){
    var count = 0;
    return function(number, location){
        count++;
        alert("Beware! There have been " + obstacle + " sightings in the Cove today!\n" + number + " have been spotted at the " + location + "!\n"+
             "This is alert #" + count + " today for " + obstacle + " danger.");
    };
}

//2.11
function warningMaker(obstacle){
    var count = 0;
    var zones = [];
    return function(number, location){
        count++;
        var list = "";
        zones.push(location);
        for(var i = 0; i < zones.length; i++){
            list += zones[i] + "\n";
        }
        alert("Beware! There have been " + obstacle + " sightings in the Cove today!\n" + number + " have been spotted at the " + location + "!\n" +
             "This is alert #" + count + " today for " + obstacle + " danger.\nCurrent danger zones are:\n" + list);
    };
}

//2.12
function warningMaker(obstacle){
    var count = 0;
    var zones = [];
    return function(number, location){
        count++;
        var list = "";
        zones.push([location, number]);
        for(var i = 0; i < zones.length; i++){
            list += zones[i][0] + " (" + zones[i][1] + ")\n";
        }
        alert("Beware! There have been " + obstacle + " sightings in the Cove today!\n" + number + " have been spotted at the " + location + "!\n" +
             "This is alert #" + count + " today for " + obstacle + " danger.\nCurrent danger zones are:\n" + list);
    };
}

//2.14
function assignLaser(shark, sharkList) {
    for (var i = 0; i < sharkList.length; i++) {
        if (shark == sharkList[i]) {
            return function() {
                alert("Yo, " + shark + "!\n" + 
                      "Visit underwater strapping station " +
                      (i + 1) + " for your sweet laser.");
            };
        }
    }
}

//2.15
var listOfSharks = ["Sea Pain", "Great Wheezy",
                    "DJ Chewie", "Lil' Bitey",
                    "Finmaster Flex", "Swim Khalifa",
                    "Ice Teeth", "The Notorious J.A.W."];

var listOfTargets = ["icicle bat", "snow yeti",
                     "killer penguin", "frost tiger",
                     "polar bear", "iceberg",
                     "blue witch", "wooly mammoth"];

function makeTargetAssigner(sharks, targets) {
    return function(name){
        for(var i = 0; i < sharks.length; i++){
            if(sharks[i] == name){
                alert("Hey, " + name + "!\n" +
                     "There've been " + targets[i] + " sightings in our area!\n" + 
                     "Time to take care of business!");
            }
        }        
    };
}

var getTargetFor = makeTargetAssigner(listOfSharks, listOfTargets);
getTargetFor("Ice Teeth");