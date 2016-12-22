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

    var paragraph = "<p>" + x + "</p>";
    $("html").append(paragraph);

    x += 1;
}
```
