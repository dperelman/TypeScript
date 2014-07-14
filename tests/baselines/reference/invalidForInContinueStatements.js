//// [invalidForInContinueStatements.ts]
// All errors

// naked continue not allowed
continue;

// non-existent label
ONE:
for (var x in {}) continue TWO;

// continue from inside function
TWO:
for (var x in {}) {
    var fn = () => {
        continue TWO;
    }
}

THREE:
for (var x in {}) {
    var fn = function () {
        continue THREE;
    }
}

// continue forward
for (var x in {}) {
    continue FIVE;
    FIVE:
    for (var x in {}) { }
}

// label on non-loop statement
NINE:
var y = 12;

for (var x in {}) {
    continue NINE;
}

//// [invalidForInContinueStatements.js]
continue;
ONE: for (var x in {})
    continue TWO;
TWO: for (var x in {}) {
    var fn = function () {
        continue TWO;
    };
}
THREE: for (var x in {}) {
    var fn = function () {
        continue THREE;
    };
}
for (var x in {}) {
    continue FIVE;
    FIVE: for (var x in {}) {
    }
}
NINE: var y = 12;
for (var x in {}) {
    continue NINE;
}