# Problem 01

### Problem Statement

Suppose you are working with a sequence of integers and your task is to find the product of all even numbers in this sequence. Write a function named `productEvens` that calculates the product of all even integers in a given array.

The `productEvens` function should accept one parameter:

1. `numbers`: an array of integers.

An integer is considered even if it is divisible by 2 (i.e., it has no remainder when divided by 2). The function should return the product of all such even numbers in the array.

Here are some examples:

- `productEvens([1, 2, 3, 4, 5])` should return `8` because the product of even numbers (2, 4) is 8.

{Try It!}(node .guides/productEvens/try-it-01.js)

- `productEvens([11, 22, 33])` should return `22` because the only even number is 22.

{Try It!}(node .guides/productEvens/try-it-02.js)

- `productEvens([1, 3, 5, 7])` should return `1` (or you may define it as `0` depending on your initial value) because there are no even numbers.

{Try It!}(node .guides/productEvens/try-it-03.js)

---

### Solution

node .guides/secure/productEvensTest.js
