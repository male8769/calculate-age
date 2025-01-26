"use strict";

let birthYear = prompt("What year were you born?"); // Ask for birth year
birthYear = parseInt(birthYear);                   // Convert to a number
let currentYear = new Date().getFullYear();        // Get the current year
let age = currentYear - birthYear;                 // Calculate the age
console.log("You are " + age + " years old!");     // Show the age



/* 
How It All Works Together
prompt() gets input from the user (their birth year).
parseInt() converts the input into a number so you can do math.
new Date() finds the current year.
You subtract the two numbers to calculate the age.
console.log() displays the result.

_______________________________________


Example Flow:
Let’s say you run the program, and this is what happens:

The program shows a box:
"What year were you born?"
(You type 2000 and hit OK.)

The program calculates:

birthYear = 2000
currentYear = 2025
age = currentYear - birthYear = 2025 - 2000 = 25
The program displays in the console:
"You are 25 years old!"
*/