// solution-1
function calculateDifference(a, b) {
  return a - b;
}
let output = calculateDifference(10, 5);
console.log(result);

// solution-2
function isOdd(number) {
  if (number % 2 !== 0) {
    return number;
  }
}
console.log(isOdd(7));

// solution-3
function findMin(arr) {
  if (arr.length === 0) return null;
  return Math.min(...arr);
}
let numbers = [3, 5, 7, 11, 6, 1];
console.log(findMin(numbers));

// solution-4
function filterEvenNumbers(arr) {
  return arr.filter(function (number) {
    return number % 2 === 0;
  });
}

let elements = [8, 2, 9, 3, 5, 1, 12];
let evenNumbers = filterEvenNumbers(elements);
console.log(evenNumbers);

// solution-5
function sortArrayDescending(arr) {
  return arr.slice().sort(function (a, b) {
    return b - a;
  });
}
let values = [3, 5, 7, 11, 6, 8, 10];
let sortedNumbers = sortArrayDescending(values);
console.log(sortedNumbers);

// solution-6
function lowercaseFirstLetter(str) {
  if (str.length === 0) return "";
  return str.charAt(0).toLowerCase() + str.slice(1);
}
let outputs = lowercaseFirstLetter("Hello");
console.log(outputs);

// solution-7
function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let vowelCount = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      vowelCount++;
    }
  }

  return vowelCount;
}
console.log(countVowels("helloworld"));

// solution-8
function findAverage(numbers) {
  if (numbers.length === 0) {
    return 0; // Handle empty arrays
  }

  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  const average = sum / numbers.length;
  return average;
}
let avg = [10, 11, 9, 45, 7, 8];
console.log(findAverage(avg));
