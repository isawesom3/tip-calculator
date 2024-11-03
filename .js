let explanation = document.getElementById("explanation");
let input = document.getElementById("input");
let button = document.getElementById("button");
let output = document.getElementById("output");
explanation.innerHTML = "Enter the cost of your meal. ";
explanation.innerHTML += "Then press Calculate.";
button.onclick = calculateTip; // the button
function calculateTip()                                    //calculateTip function
{
let cost = parseFloat(input.value);
let percent = 15; // you can change if u want
let tip = cost * percent / 100;
tip = tip.toFixed(2);
let text = "A " + percent + "% tip is $" + tip;
output.innerHTML = text;
let total = cost + parseFloat(tip);
output.innerHTML += "<br>The total cost is $" + total;
}
