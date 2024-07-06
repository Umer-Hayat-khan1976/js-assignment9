
var numbers = [];
for (var i = 0; i < 5; i++) {
  var num = prompt("Enter number " + (i + 1) + ":");
  numbers.push(parseFloat(num));
}
var largest = numbers[0];
for (var i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}
console.log("The largest number of the array elements is: " + largest);
