// ================= THE Start =================

// Chapter 26 - 30 Start

// Q1
var number = +prompt("Enter a positive integer: ");
document.write("<h1>Q1</H1>");
document.write("Number: ", number);
document.write("<br>Rounded value: ", Math.round(number));
document.write("<br>Floor value: ", Math.floor(number));
document.write("<br>Ceil value: ", Math.ceil(number));

// Q2
var num = parseFloat(prompt("Enter a negative floating point number: "));
document.write("<br><h1>Q2</H1>");
document.write("Number: ", num);
document.write("<br>Rounded value: ", Math.round(num));
document.write("<br>Floor value: ", Math.floor(num));
document.write("<br>Ceil value: ", Math.ceil(num));

// Q3
var num1 = +prompt("Enter a value");
document.write("<br><h1>Q3</H1>");
document.write("The absolute value of ", num1, " is ", Math.abs(num1));

// Q4
var diceValue = Math.floor(Math.random() * 6) + 1;
document.write("<br><h1>Q4</H1>");
document.write("Random dice value: ", diceValue);

// Q5
document.write("<br><h1>Q5</H1>");
var toss = Math.random() * 2;
var convert = Math.floor(toss);
if (convert === 0) {
  document.write(convert, "<br>Random coin value: head");
} else {
  document.write(convert, "<br>Random coin value: Tail");
}

// Q6
document.write("<br><h1>Q6</H1>");
var ran = Math.floor(Math.random() * 100);
document.write("Random number between 1 and 100: ", ran);

// Q7
document.write("<br><h1>Q7</H1>");
var weight = +prompt("Enter your weight");
var math = Math.ceil(weight);
document.write("Your weight is: ", math, " kg");

// Q8
var secretNumber = Math.floor(Math.random() * 10) + 1;
var userInput = +prompt("Guess the secret number between 1 and 10:");
if (userInput === secretNumber) {
  alert("Congratulation! You guessed the secret number.");
} else {
  alert("Sorry, the secret number was " + secretNumber + ". Try again!");
}

// Chapter 26 - 30 End

// ================= THE END =================
