function compute() {
    //User inputs values
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + years;
    //Output for intrest text
    document.getElementById("result").innerHTML = "Interest : If you deposit <mark>" + principal + "</mark>,<br/>" +
        "at an interest rate of <mark>" + rate + "</mark>,<br/>" +
        "You will receive an amount of <mark>" + interest + "</mark>,<br/> " +
        "in the year <mark>" + year + "</mark>";

}

//updates rate value for user
function getSliderValue() {
    document.getElementById("rate_val").innerHTML = document.getElementById("rate").value;
}

//If statement for positive numbers only
function posNumber() {
    var principal = document.getElementById("principal").value;
    var lessThanZero = parseInt(principal) < 0;
    if (!lessThanZero) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }

}
