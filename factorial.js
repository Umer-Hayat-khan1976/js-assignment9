
var number = parseInt(prompt("Enter a number:"));
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
var result = factorial(number);
console.log("Factorial of " + number + " is " + result);
