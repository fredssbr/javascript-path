//Exercise 2.5
function warningMaker(obstacle){
    return function(){alert("Beware! There have been " + obstacle + " sightings in the Cove today!");};
}

//Exercise 2.6
var icebergAlert = warningMaker("iceberg");
icebergAlert();

//Exercise 2.7
function warningMaker2_7(obstacle){
    return function(number,location){alert("Beware! There have been " + obstacle + " sightings in the Cove today!\n" +
                                          number + " have been spotted at the " + location + "!");
                                    };
}

//Exercise 2.8
var killerPenguinAlert = warningMaker2_7("killer penguin");
var polarBearAlert = warningMaker2_7("polar bear");
var icebergAlert2 = warningMaker2_7("iceberg");
var flashBlizzardAlert = warningMaker2_7("flash blizzard");
var snowYetiAlert = warningMaker2_7("snow yeti");

killerPenguinAlert(6,"Ice Caves");
snowYetiAlert(1,"Blizzard Beach");

//Exercise 2.11
function warningMaker2_10(obstacle) {
    var count = 0;
    return function(number,location){
        count++;
        alert("Beware! There have been " + obstacle + " sightings in the Cove today!\n" +
              number + " have been spotted at the " + location + "!\n" +
              "This is alert #" + count + " today for obstacle " + obstacle + " danger.");
    };
}

//Exercise 2.12
function warningMaker2_12(obstacle) {
    var count = 0;
    var zones = [];
    return function(number,location){
        count++;
        var list = "";
        zones.push(location);
        for(var x=0;x<zones.length;x++){
            list += zones[x] + "\n";
        }
        alert("Beware! There have been " + obstacle + " sightings in the Cove today!\n" +
              number + " have been spotted at the " + location + "!\n" +
              "This is alert #" + count + " today for obstacle " + obstacle + " danger." +
              "Current danger zones are:\n" + list);
    };
}

var alertListWarnings = warningMaker2_12("Rocks");
alertListWarnings(3, "cliffs of dover");
alertListWarnings(2, "Hogwarts");
alertListWarnings(10, "Black Forest");

//Exercise 2.12(more array)
function warningMaker2_12_array(obstacle) {
    var count = 0;
    var zones = [];
    return function(number,location){
        count++;
        var list = "";
        zones.push([number,location]);
        for(var x=0;x<zones.length;x++){
            list += zones[x][1] + " (" + zones[x][0] + ")\n";
        }
        alert("Beware! There have been " + obstacle + " sightings in the Cove today!\n" +
              number + " have been spotted at the " + location + "!\n" +
              "This is alert #" + count + " today for obstacle " + obstacle + " danger." +
              "Current danger zones are:\n" + list);
    };
}

var alertListWarningsArray = warningMaker2_12_array("Rocks");
alertListWarningsArray(3, "cliffs of dover");
alertListWarningsArray(2, "Hogwarts");
alertListWarningsArray(10, "Black Forest");