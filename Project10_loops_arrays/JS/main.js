// Call loop funtion
function Call_Loop() {
let text = "";
let i = 0;
while (i < 10) {
  text += "<br>The number is " + i;
  i++;
}
document.getElementById("Loop").innerHTML = text;
}

// Array methods
function Fruit_Array() {
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("Fruits").innerHTML = fruits.toString();
}
