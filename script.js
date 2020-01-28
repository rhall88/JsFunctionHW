var wrapperEle = document.body.querySelector(".wrapper");
var milesPerYear = Number(prompt("How many miles do you drive per year?"));
var gasCost = Number(prompt("How much does a gallon of gas cost in your area?"));

function doMath(mpg,milesPerYear,gasCost) {
  var galPerYear = milesPerYear / mpg;
  var costPerYear = galPerYear * gasCost;

  wrapperEle.innerHTML += "To drive a car with an MPG rating of  "+mpg+" for "+milesPerYear+" miles at $"+gasCost+" per gallon would cost $"+costPerYear.toFixed(2)+".  <br>";

}

doMath(12,milesPerYear,gasCost);
doMath(17,milesPerYear,gasCost);
doMath(26,milesPerYear,gasCost);
doMath(29,milesPerYear,gasCost);

