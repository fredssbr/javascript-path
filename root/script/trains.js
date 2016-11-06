var totalTrains = 12;
var trainsOperational = 8;
var trainNumber = 1;
var dayOfWeek = "Friday";

if(trainsOperational > 0){
    if(trainsOperational == totalTrains){
        console.log("All trains are running at the Javascript Express.");
    }else{
        for(var trainNumber = 1; trainNumber <= totalTrains; trainNumber++){
            if(trainNumber <= trainsOperational && trainNumber != 3){
                console.log("Train #" + trainNumber + " is running.");
            }else if(trainNumber == 10 || trainNumber == 12){
                console.log("Train #" + trainNumber + " begins running at noon.");
            }else if(trainNumber == 3 && dayOfWeek == "Sunday"){
                console.log("Train #3 is running.");
            }else{
                console.log("Train #" + trainNumber + " is not operational.");
            }
        }
    }
}else{
    console.log("No trains are operational today. Bummer!");
}

var gotName = false;
while(gotName == false){
    var userName = prompt("Yo passenger! What's your name?");
    if(confirm("Are you sure your name is " + userName + "?")){
        alert("Sup " + userName + "!");
        gotName = true;
    }
}

function addPassenger(name, list){
    if(list.length == 0){
        list.push(name);
    }else{
        for(var index = 0; index < list.length; index++){
            if(list[index] == undefined){
                list[index] = name;
                return list;
            }else if(index == list.length - 1){
                list.push(name);
                return list;
            }
        }
    }
    return list;
}

function deletePassenger(name, list){
    if(list.length == 0){
        console.log("List is empty!");
    }else{
        for(var index = 0; index < list.length; index++){
            if(list[index] == name){
                list[index] = undefined;
                return list;
            }else if(index == list.length -1){
                console.log("Passenger not found!")
                return list;
            }
        }
    }
    return list;
}

var passengerList = [];
passengerList = addPassenger("Fred Silva", passengerList);
passengerList = addPassenger("Joahn Sebastian", passengerList);
passengerList = addPassenger("Mathias Balzac", passengerList);
passengerList = deletePassenger("Fred Silva", passengerList);
passengerList = deletePassenger("Fred Silva", passengerList);
passengerList = addPassenger("Wolfgang Mozart", passengerList);


function verifyCapacity(passengers, capacity){
    
    var noSeatsLeft = function(){
        alert("There are no seats left.")
    };
    
    var seatsAvail = function(){
        alert("There are " + (capacity - passengers) + "seats available.")        
    };
    
    if(passengers == capacity){
        noSeatsLeft();
    }else{
        seatsAvail();
    }
}