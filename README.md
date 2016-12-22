# Loops

A mini-course in loops in JS for novice programmers.

# Contents

- [Setup](#setup)
- [Lecture 1. `while` loops](#lec1)
  - Example 1
  - Example 2
  - Example 3
- [Lecture 2. `for` loops](#lec2)
  - Example 1
  - Example 2
  - Example 3
- [Challenges](#challenges)
  - Challenge 1
  - Challenge 2
  - Challenge 3
  - Challenge 4
  - Challenge 5
  

# <a name="setup">Setup</a>

## `index.html`

```js
<!DOCTYPE html>
<html>
  <head>
    <title>Loops</title>
    <script src="loops.js"></script>
  </head>
</html>
```

## `loops.js`

Initialize to an empty file.

# <a name="lec1">Lecture 1. `while` loops</a>

A `while` loop looks like this:

```js
while (boolean condition) {
  // body of the loop
}
```

So long as `boolean condition` is `true`, the loop executes the `body of the loop`.

## Example 1

```js
var x = 0;

while (x < 2) {

    console.log("inside loop: x = " + x);

    x += 1;
}

console.log("outside loop: x = " + x);
```

### Here's the output (which you can view in the JavaScript console)

```
inside loop: x = 0
inside loop: x = 1
outside loop: x = 2
```

### Let's trace through the code

1. JS initializes `x` to be zero
2. The `while` loop evaluates the boolean condition `x < 2`
  - Since `x == 0`, then `x < 2` is `true`, and therefore the `while` loop enters the body of the loop
3. In the body of the loop:
  - `console.log` writes "inside loop: x = 0" to the console
  - `x` is incremented to `1`
4. Like step 2, the `while` loop evaluates the boolean condition `x < 2`
  - Since `x == 1`, then `x < 2` is `true`, and therefore the `while` loop enters the body of the loop
3. Like step 3, in the body of the loop:
  - `console.log` writes "inside loop: x = 1" to the console
  - `x` is incremented to `2`
5. Like step 2, the `while` loop evaluates the boolean condition `x < 2`
  - Since `x == 2`, then `x < 2` is `false`, and therefore the `while` loop exits
6. Having exited the loop, `console.log` writes `outside loop: x = 2`

## Example 2

```js

var x = 5;

while (x >= 0) {

    console.log("inside loop: x = " + x);

    x -= 1;
}

console.log("outside loop: x = " + x);

```
### Output 
```
inside loop: x = 5
inside loop: x = 4
inside loop: x = 3
inside loop: x = 2
inside loop: x = 1
inside loop: x = 0
outside loop: x = -1
```

## Example 3

Nested `while` loops.

```js

var x = 0;

while (x < 2) {
    
    var y = 0;

    while (y < 4) {
        console.log("inside inner loop: x = " + x + ", y = " + y);
        y += 1;
    }

    x += 1;
}

console.log("outside outer loop loops: x = " + x);
```

### Output

```
inside inner loop: x = 0, y = 0
inside inner loop: x = 0, y = 1
inside inner loop: x = 0, y = 2
inside inner loop: x = 0, y = 3
inside inner loop: x = 1, y = 0
inside inner loop: x = 1, y = 1
inside inner loop: x = 1, y = 2
inside inner loop: x = 1, y = 3
outside loops: x = 2
```

# <a name="lec2">Lecture 2. `for` loops</a>

Notice in the `while` loops above there are 5 steps common to every `while` loop we have seen:

- (A) **Init**: Initialize a variable
- (B) **Check**: Check a boolean condition upon the variable (and only enter the loop body if the condition is true)
- (C) **Body**: Execute the body
- (D) **Modify**: Modify the variable
- (E) **Loop**: Go back to (B)

To refer back to Lecure 1, Example 1:

```js

// (A) Init: Initialize a variable
var x = 0;

// (B) Check: Check a boolean condition upon the variable
while (x < 2) {

    // (C) Body: Execute the body
    console.log("inside loop: x = " + x);

    // (D) Modify: Modify the variable
    x += 1;
    
    // (E) Loop: Go back to (B)
}

console.log("outside loop: x = " + x);
```

A `for` loop tidies up those three steps like so:

```
for (A; B; D) {
    C;
    E;
}
```

## Example 1

For example, we can turn the `while` loop from Lecture 1, Example 1 into a `for` loop as so:

```js
for (var x = 0; x < 2; x += 1) {
    console.log("inside loop: x = " + x);
}

console.log("outside loop: x = " + x);
```

### Output

```
inside loop: x = 0
inside loop: x = 1
outside loop: x = 2
```

## Example 2

The `for`-loop version of Lecture 1, Example 2

```js
for (var x = 5; x >= 0; x -= 1) {
    console.log("inside loop: x = " + x);
}

console.log("outside loop: x = " + x);
```

### Output 
```
inside loop: x = 5
inside loop: x = 4
inside loop: x = 3
inside loop: x = 2
inside loop: x = 1
inside loop: x = 0
outside loop: x = -1
```

## Example 3

The `for`-loop version of Lecture 1, Example 3

```js
for (var x = 0; x < 2; x += 1) {
    for (var y = 0; y < 4; y += 1) {
        console.log("inside inner loop: x = " + x + ", y = " + y);
    }
}

console.log("outside outer loop loops: x = " + x);
```

### Output

```
inside inner loop: x = 0, y = 0
inside inner loop: x = 0, y = 1
inside inner loop: x = 0, y = 2
inside inner loop: x = 0, y = 3
inside inner loop: x = 1, y = 0
inside inner loop: x = 1, y = 1
inside inner loop: x = 1, y = 2
inside inner loop: x = 1, y = 3
outside loops: x = 2
```

# Challenges

## Challenge 1

Write a for loop that produces the following output:

```
inside inner loop: x = 3
inside inner loop: x = 4
inside inner loop: x = 5
inside inner loop: x = 6
```

## Challenge 2

Write a for loop that produces the following output:

```
inside inner loop: x = 10
inside inner loop: x = 9
inside inner loop: x = 8
inside inner loop: x = 7
```

## Challenge 3

Say you have an array color names:
```
var colors = ["grey", "pink", "brown", "red"];
```

Write a for loop that produces the following output:
```
inside inner loop: color = grey
inside inner loop: color = pink
inside inner loop: color = brown
inside inner loop: color = red
```

## Challenge 4

Say you have a 2-dimensional array:

```
var matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [10,11,12],
]
```

Write 2 `for` loops (one nested within the other) that produce the following output:

```
matrix[0][0] == 1
matrix[0][1] == 2
matrix[0][2] == 3

matrix[1][0] == 4
matrix[1][1] == 5
matrix[1][2] == 6

matrix[2][0] == 7
matrix[2][1] == 8
matrix[2][2] == 9

matrix[3][0] == 10
matrix[3][1] == 11
matrix[3][2] == 12
```

## Challenge 5

Say you have these nested arrays:

```
var arrays = [
  ["a", "b", "c"],
  ["d", "e"],
  ["f"],
  ["g", "h", "i", "j"],
]
```

Write 2 `for` loops (one nested within the other) that produce the following output:

```
a b c
d e
f
g h i j
```
