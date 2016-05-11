//Exercise 3.3-----------------------------
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
//How javascript hoists it
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
//Exercise 3.4-----------------------------
function theBridgeOfHoistingDoom() {
  function fellowship() {
    return "friends";
  }
  var sword = "sting";
  var dwarf = function() {
    return "axe";
  };
  var fall = "Fly you fools!";
  fellowship = function() {
    return "broken";
  };
  ring();
  return sword;
  fellowship = function() {
    return "mines"
  };
  sword = function() {
    return "glamdring";
  };
  var ring = function() {
    return "precious";
  };
}
//How javascript hoists it
function theBridgeOfHoistingDoom() {
  var sword = undefined;
  var dwarf = undefined;
  var fall = undefined;
  var ring = undefined;
  function fellowship() {
    return "friends";
  }
  sword = "sting";
  dwarf = function() {
    return "axe";
  };
  fall = "Fly you fools!";
  fellowship = function() {
    return "broken";
  };
  ring();//ERROR!!!!
  return sword;
}
//Exercise 3.5-----------------------------
//Excuting the function above would return an error
console.log("ERROR");