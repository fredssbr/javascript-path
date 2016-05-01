//Exercise 1.11
function adventureSelector(userChoice) {
    switch(userChoice){
        case 1:
            return function(){alert("You selected the Vines of Doom!");};
            break;
        case 2:
            return function(){alert("Looks like you want the Lake of Despair!");};
            break;
        case 3:
            return function(){alert("The Caves of Catastrophe!");};
            break;
    }
}

//Exercise 1.12
adventureSelector(3)();