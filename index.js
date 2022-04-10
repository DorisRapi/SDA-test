console.log("====running====");

const numbers = [1, 5, 3, 4];

function sortNumbers() {
  numbers.sort(function (a, b) {
    return a - b;
  });
  return numbers;
}

let sortedNumbers = sortNumbers(numbers);
console.log(sortedNumbers);

let i;
for (i = 0; i < sortedNumbers.length - 1; i++) {
  if (sortedNumbers[i + 1] - sortedNumbers[i] !== 1) {
    console.log("False");
    break;
    
  }
}
if (i >= sortedNumbers.length - 1) {
  console.log("True");
}
