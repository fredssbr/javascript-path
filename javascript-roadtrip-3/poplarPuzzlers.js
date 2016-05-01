//Challenge 1.13
var puzzlers = [
  function(a) { return 8 * a - 10; },
  function(a) { return (a - 3) * (a - 3) * (a - 3); },
  function(a) { return a * a + 4; },
  function(a) { return a % 5; }
];
var start = 2;

var applyAndEmpty = function(input, queue){
    var length = queue.length;
    for(var i = 0;i < length; i++){
        input = queue.shift()(input);
    }
    return input;
};

alert(applyAndEmpty(start, puzzlers));

//Challenge 1.14
alert(puzzlers[puzzlers[1](3)](puzzlers[3](9)));