// ================= THE Start =================

// PDF 26 - 30 Start

// Chapter 26 (Rounding Numbers) Start

// Q1
var number1 = 5.7;
var roundedNumber = Math.round(number1);
document.write("<br><h1>Q1</H1>");
document.write("The rounded number is: " + roundedNumber);

// Q2
document.write("<br><h1>Q2</H1>");
var origNum = 5.9;
var roundNum = Math.ceil(origNum);
document.write("The rounded up number is: " + roundNum);

// Q3
document.write("<br><h1>Q3</H1>");
var origNum1 = 3.7;
var roundNum1 = Math.floor(origNum1);
document.write("The rounded down number is: " + roundNum1);

// Q4
document.write("<br><h1>Q4</H1>");
var origNum2 = 5.7;
var roundNum2 = Math.round(origNum2);
document.write("The rounded number is: " + roundNum2);

// Q5
document.write("<br><h1>Q5</H1>");
var roundNum3 = Math.round(0.5);
document.write("The rounded number is: " + roundNum3);

// Chapter 26 (Rounding Numbers) End

// Chapter 27 (Random Numbers) Start

// Q1
document.write("<h1>Q1</H1>");
var read = Math.floor(Math.random() * 50);
document.write("The random number is: " + read);

// Q2
document.write("<h1>Q2</H1>");
var randomNumber4 = Math.random();
document.write("Random number: " + randomNumber4);

// Q3
document.write("<h1>Q3</H1>");
var diceValue1 = Math.floor(Math.random() * 6);
document.write("Dice value: " + diceValue1);

// Q4
document.write("<br><h1>Q4</H1>");
var toss = Math.random() * 2;
var convert = Math.floor(toss);
if (convert === 0) {
  document.write(convert, "<br>Random coin value: head");
} else {
  document.write(convert, "<br>Random coin value: Tail");
}

// Chapter 27 (Random Numbers) Start

// Chapter 28, 29 (Converting Strings) Start

// Q1
document.write("<br><h1>Q1</H1>");
var str = "123";
var num5 = parseInt(str);
document.write(num5); // Output: 123

// Q2
var h = 14;
document.write("<br><h1>Q2</H1>");
document.write(h.toString());

// Q3
var str = "2.718";
document.write("<br><h1>Q3</H1>");
var floatValue = +str;
document.write(floatValue);

// Q4
var number = 10;
document.write("<br><h1>Q4</H1>");
console.log(typeof number.toString());

// Q5
var h = 14;
document.write("<br><h1>Q5</H1>");
document.write(h.toString());

// Q6
var num7 = 42;
document.write("<br><h1>Q6</H1>");
var str = num7.toString();
document.write(str);

// Q7
var decimalString = "3.14";
document.write("<br><h1>Q7</H1>");
var integerValue = +decimalString;
document.write(integerValue);

// Chapter 28, 29 (Converting Strings) End

// Chapter 30 (Controlling the length of decimals) Start

// Q1
var num = 10.1234567;
var newNum = num.toFixed(4);

// Q2
javascript;
var num = 15.6789;
num = parseFloat(num.toFixed(2)).toString();

// Q3
if (num.toFixed(2).toString().length > 4) {
  // Your code here
}

// Q4
javascript;
var longDecimalNumber = 123.456789;
alert(longDecimalNumber.toFixed(2).toString());

// Chapter 30 (Controlling the length of decimals) End

// PDF 26 - 30 End

// ================= THE END =================
