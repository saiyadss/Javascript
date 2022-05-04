// Concat method. Joins 2 strings
let text1 = "Good";
let text2 = "day";
let result = text1.concat(" ",text2);

document.getElementById("concat").innerHTML = result;

// Slice method. Deletes strings
let text = "Hello Human!"; 
let answer = text.slice((0, 5));

document.getElementById("slice").innerHTML = answer;

// toString method displays the whole text
let display = "Stay Blessed!";
let view = display;

document.getElementById("string").innerHTML = view; 

// toPrecision method. Formats number to certain specified length
let num = 51.001658853;

document.getElementById("precision").innerHTML =
num.toPrecision(4) + "<br>" +
num.toPrecision(6) + "<br>" +
num.toPrecision(10);