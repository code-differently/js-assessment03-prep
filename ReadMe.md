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

---

# Problem 02

### Problem Statement

Imagine you are playing a simplified version of the game Blackjack, where the objective is to get as close to 21 as possible without going over. Given two integer values greater than 0, your task is to determine which value is nearest to 21 without exceeding it. If both values go over 21, then return 0.

Write a function named `blackjack` that makes this determination.

The `blackjack` function should accept two parameters:

1. `value1`: an integer greater than 0.
2. `value2`: another integer greater than 0.

The function should return the value that is closest to 21 without going over. If both values are over 21, the function should return 0.

Here are some examples:

- `blackjack(19, 21)` should return `21` because 21 is closer to 21 than 19 without going over.

{Try It!}(node .guides/blackjack/try-it-01.js)

- `blackjack(21, 19)` should return `21` because 21 is exactly 21 and thus the closest without going over.

{Try It!}(node .guides/blackjack/try-it-02.js)

- `blackjack(19, 22)` should return `19` because 22 is over 21, and 19 is the closest without going over.

{Try It!}(node .guides/blackjack/try-it-03.js)

- `blackjack(22, 23)` should return `0` because both values are over 21.

{Try It!}(node .guides/blackjack/try-it-04.js)

---

### Solution

{Check It!|assessment}
node .guides/secure/blackjackTest.js
