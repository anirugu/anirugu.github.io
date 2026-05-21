---
title: "Running Isnanundefined Come True In Javascript"
date: 2013-01-17T12:00:00-04:00
categories:
  - blog
tags:
  - JavaScript
---
In JavaScript, evaluating falsy values with `if` statements and the `isNaN()` function can produce some surprising results. Consider the following four statements—only **one** of them will actually print a value to the console:

```javascript
function print(obj) {
    console.log(obj);
}

if (undefined) {
    print("undefined");        // ❌ Does NOT print — undefined is falsy
}

if (null) {
    print('null');             // ❌ Does NOT print — null is falsy
}

if (isNaN(null)) {
    print('isNaN(null)');     // ❌ Does NOT print — isNaN(null) is false, because null coerces to 0
}

if (isNaN(undefined)) {
    print('isNaN(undefined)'); // ✅ PRINTS — isNaN(undefined) returns true
}
```

### Why Does This Happen?

The key insight here is how JavaScript coerces values before passing them to `isNaN()`:

- `null` is coerced to `0` by `isNaN()`, and `isNaN(0)` returns `false`.
- `undefined` cannot be coerced to a number, so `isNaN(undefined)` returns `true`.

This is one of JavaScript's well-known quirks. In modern JavaScript, it is recommended to use `Number.isNaN()` instead, which does **not** perform type coercion and therefore behaves more predictably:

```javascript
Number.isNaN(undefined); // false — because undefined is not the value NaN itself
Number.isNaN(NaN);       // true
```
