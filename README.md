# Loops

A mini-course in loops in JS for novice programmers.

# Prerequisites

Familiarity with jQuery.

# Contents

- [Setup](#setup)
- [Lecture 1. While loops](#lec1)

# <a name="setup">Setup</a>

## `index.html`

```js
<!DOCTYPE html>
<html>
  <head>
    <title>Loops</title>
    <script src="jquery.js"></script>
    <script src="loops.js"></script>
  </head>
</html>
```

## `loops.js`

Initialize to an empty file.

# <a name="lec1">Lecture 1. While loops</a>

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
