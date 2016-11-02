/*
FUNCTIONS
    In the function bellow we could an expression as a parameter, it would be evaluated before calling the function (like the return statemente below)
    Functions always declare a new scope for the variables. If you declared a variable in the global scope and use it inside a function, without declaring
    it again, it will modify the global variable. Otherwise, only the local scope variable would be affected by any changes.
*/

function sumofCubes(a,b){
    return a*a*a + b*b*b;
}

//4.2
function multiplyTrio(a, b, c){
    return a * b * c;
}

//4.3
multiplyTrio(8,4,10);

//4.4
function maxOf2(a, b){
    if(a > b){
        return a;
    }
    return b;
}

//4.5
function mystery(x, y) {
    return (4 * x * y) + (3 * y + 5)
}

//EXAMPLE
function countE(){
    var phrase = prompt("Which phrase would you like to examine?");
    if(typeof(phrase) != "string"){
        alert("That's not a valid entry!");
        return false;
    }else{
        var eCount = 0;
        for(var index = 0; index < phrase.length; index++){
            if(phrase.charAt(index) == "e" || phrase.charAt(index) == "E"){
                eCount++;
            }
        }
        alert("There are " + eCount + " E's in \"" + phrase + "\".");
        return true;
    }
}

//4.7
function feedPerRanger(numSheep, numRanger){
    var lbsFoodPerRanger = (numSheep * 2) / numRanger;
    alert("Each Park Ranger should load " + lbsFoodPerRanger + " lbs of feed today.")
}

//4.8
function changePowerTotal(totalPower, genId, genStatus, genPowerAmount){
    if(genStatus == "on"){
        totalPower += genPowerAmount;
        alert("Generator #" + genId + " is now on, adding " + genPowerAmount + " MW, for a total of " + totalPower + " MW!");
    }else{
        totalPower -= genPowerAmount;
        alert("Generator #" + genId + " is now off, removing " + genPowerAmount + " MW, for a total of " + totalPower + " MW!");
    }
    return totalPower;
}