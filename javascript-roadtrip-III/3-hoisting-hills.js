/*
HOISTING - term that defines the load order of code in a program.
Javascript will load in the following order:

    1 - define variables(with undefined assigned to them) and declared functions
    2 - attribute values to variables, in the order they appear in the code (from top to bottom, left to write)
    
PS: Function Expressions are not hoisted at all
*/

//3.2
function thisIsWeird() {
  function secret() {
    var unused3;
  }
  var result;
  function secret() {
    var unused1;
  }
  // The following line of code assigns a
  // secret function to the variable result.
  result = secret;
  function secret() {
    var unused2;
  }
  return result;
}

function thisIsWeird() {
    var result = undefined;
    function secret() {
        var unused2 = undefined;
    }
    result = secret;
    return result;    
}

console.log("unused2");

//3.3
function theBridgeOfHoistingDoom() {
    function balrog() {
        return "fire";
    }
    var ring;

    function elf() {
        return "pointy ears";
    }
    ring = wizard;
    wizard = balrog;
    return wizard();

    function balrog() {
        return "whip";
    }

    function wizard() {
        return "white";
    }
    var power = ring();
    return elf();

    function elf() {
        return "immortal";
    }
}

function theBridgeOfHoistingDoom() {
    var ring = undefined;
    var power = undefined;
    function balrog() {
        return "whip";
    }
    function wizard() {
        return "white";
    }
    function elf() {
        return "immortal";
    }
    ring = wizard;
    wizard = balrog;
    return wizard();    
}

//3.4
function theBridgeOfHoistingDoom() {
    function fellowship() {
        return "friends";
    }
    var sword = "sting";
    var dwarf = function () {
        return "axe";
    };
    var fall = "Fly you fools!";
    fellowship = function () {
        return "broken";
    };
    ring();
    return sword;
    fellowship = function () {
        return "mines"
    };
    sword = function () {
        return "glamdring";
    };
    var ring = function () {
        return "precious";
    };
}

function theBridgeOfHoistingDoom() {
    var sword = undefined;
    var dwarf = undefined;
    var fall = undefined;
    var ring = undefined;
    sword = "sting";
    dwarf = function () {
        return "axe";
    };
    fall = "Fly you fools!";
    fellowship = function () {
        return "broken";
    };
    ring();
    return sword;    
}

//3.5
console.log("ERROR");