
var x = 0;

while (x < 2) {
    
    var y = 0;

    while (y < 4) {
        console.log("inside inner loop: x = " + x + ", y = " + y);
        y += 1;
    }

    console.log("outside outer loop loops: x = " + x);

    x += 1;
}

console.log("outside outer loop loops: x = " + x);



