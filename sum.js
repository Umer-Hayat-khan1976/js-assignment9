
var numbers = [];
for (var i = 0; i < 5; i++) {
  var num = +prompt("Enter number " + (i + 1) + ":");
  numbers.push(num);
}
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log("The sum of the array elements is: " + sum);
