// Chapter 21 (Changing Case)===========================================================


var allLower = userInput.toLowerCase();

var x = "Hello World";
x = x.toLowerCase();

var y = "Hello World";
y = y.toUpperCase();

var originalString = "Hello World";
var lowerCaseString = originalString.toLowerCase();

var array = ["Hello", "World"];
var lowerCaseString = array[0].toLowerCase();

var myString = "Hello World";
var upperCaseString = myString.toUpperCase();
alert(upperCaseString);

var cityName = "kaRacHi";
var capitalizedName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();

// Chapter 22 - 25 (Strings)=======================================================

var sameWords = "captain";
var slicedWords = sameWords.slice(2, 4);

var sameWords = "captain";
var characterCount = sameWords.length;

var animal = "elephant";
var seg = animal.slice(1, 5);

var myString = "Hello World";
var characterCount = myString.length;

var myString = "Hello World";
var characterCount = myString.length;
var slicedString = myString.slice(1, -3);

var text = "To be or not to be.";
var indx = text.indexOf("be");


var text = "To be or not to be.";
var indx = text.lastIndexOf("be");

var text = "Let it go, let it go, can't hold it back anymore";
var indx = text.lastIndexOf("go") + 1;

var str = "Hello, world!";
var indexNum = 7;

if (str.includes(str[indexNum])) {
  // Code block to execute if the segment exists
  // ...
}

var str = "abcde";
var characterAtIndex2 = str.charAt(2);

var text = "Hello, World!";
var cha = text.charAt(9);

var str = "Hello, World!";
var x = str.charAt(str.length - 1);

var input = "Example";
var cha = input.charAt(4);

var myString = "Hello";
var targetCharacter = "l";

if (myString.charAt(2) === targetCharacter) {
  // Code block to execute if the 3rd character is the target character
  // ...
}

var myString = "Hello";
var charactersArray = [];

for (var i = 0; i < myString.length; i++) {
  charactersArray[i] = myString.charAt(i);
}

var str = "I have 1 apple and 2 oranges.";
var newStr = str.replace("1", "one");

var x = "banana";
var y = x.replace(/a/g, "z");


// Chapter 26 (Rounding Numbers)==============================================

var number = 3.7;
var roundedNumber = Math.round(number);

var origNum = 3.2;
var roundNum = Math.ceil(origNum);

var origNum = 3.8;
var roundNum = Math.floor(origNum);

let origNum = 3.8;
let roundNum = Math.floor(origNum);
console.log(roundNum);  // Output: 3

let origNum = 3.8;
let roundedNum = Math.round(origNum);
console.log(roundedNum);  // Output: 4

let origNum = 0.5;
let roundedNumber = Math.floor(origNum);
console.log(roundedNum);  // Output: 0

// Chapter 27 (Random Numbers)=======================================================

let randomNum = Math.random();  // Generate a random number between 0 and 1
let convertedNum = Math.floor(randomNum * 50) + 1;  // Convert to a number between 1 and 50
console.log(convertedNum);  // Output: A random number between 1 and 50

let randomNum = Math.random();
console.log(randomNum);  // Output: A random number between 0 and 1

let diceRoll = Math.floor(Math.random() * 6) + 1;
console.log(diceRoll);  // Output: A random number between 1 and 6

let coinToss = Math.random() < 0.5 ? "Heads" : "Tails";
console.log(coinToss);  // Output: "Heads" or "Tails"

// Chapter 28, 29 (Converting Strings)============================================

var str = "42";
var num = parseInt(str);
console.log(num); // Output: 42
var str = "42";
var num = Number(str);
console.log(num); // Output: 42

function convertStringToInteger(str) {
    var num = parseInt(str);
    return num;
  }
  
  var str = "123";
  var result = convertStringToInteger(str);  
  console.log(result); // Output: 123

  var str = "3.14";
var num = parseFloat(str);
console.log(num); // Output: 3.14

function canConvertToNumber(str) {
    if (!isNaN(parseInt(str))) {
      // String can be converted to an integer
      return "Integer";
    } else if (!isNaN(parseFloat(str))) {
      // String can be converted to a decimal (floating-point number)
      return "Decimal";
    } else {
      // String cannot be converted to a number
      return "Not a Number";
    }
  }
  var str1 = "123";
  var str2 = "3.14";
  var str3 = "ABC";
  console.log(canConvertToNumber(str1)); // Output: Integer
  console.log(canConvertToNumber(str2)); // Output: Decimal
  console.log(canConvertToNumber(str3)); // Output: Not a Number


  var num = 42;
var str = num.toString();
console.log(str); // Output: "42"
var num = 42;
var str = "" + num;
console.log(str); // Output: "42"

function convertNumberToString(num) {
    var str = num.toString();
    return str;
  }
  
  var num = 42;
  var result = convertNumberToString(num);  
  console.log(result); // Output: "42"

  var str = "3.14";
var num = parseInt(str);
console.log(num); // Output: 3

// Chapter 30 (Controlling the length of decimals)===========================================

var num = 3.14159265358979323846; // The number you want to round
var newNum = num.toFixed(4).toString(); // Rounding to 4 decimal places and converting to a string

num = Number(num.toFixed(2));

if (num.toFixed(2).toString().length > 4) {
    // Your code here
  }

  var num = 3.14159265358979323846; // Number with many decimal places
var roundedNum = num.toFixed(2).toString(); // Rounding to 2 decimal places and converting to a string
alert(roundedNum); // Displaying the rounded number as a string in an alert box

// Chapter 31 - 34 (Date & Time)========================================================

var dObj = new Date();

var dStr = new Date().toString();

var day = d.toLocaleDateString('en-US', { weekday: 'long' });

var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
alert(dayNames.indexOf(d));
var currentDate = new Date();
var year = currentDate.getFullYear();
var month = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
var day = currentDate.getDate();
var hours = currentDate.getHours();
var minutes = currentDate.getMinutes();
var seconds = currentDate.getSeconds();
var milliseconds = currentDate.getMilliseconds();
console.log("Year:", year);
console.log("Month:", month);
console.log("Day:", day);
console.log("Hours:", hours);
console.log("Minutes:", minutes);
console.log("Seconds:", seconds);
console.log("Milliseconds:", milliseconds);


var later = new Date(2020, 11, 0);


var specificDate = new Date(1992, 1, 2);


var referenceDate = new Date(); // Replace with your reference date
var beginningOf1980 = new Date(1980, 0, 1); // January 1, 1980
var millisecondsElapsed = referenceDate - beginningOf1980;
alert(millisecondsElapsed);


var date = new Date(); // Create a Date object representing the current date and time
console.log("Original Date:", date);
date.setFullYear(2023); // Change the year to 2023
console.log("Updated Date:", date);


function changeMonthToJanuary(date) {
    date.setMonth(0); // Set the month to January (month index 0)
    return date;
  }  
  // Example usage:
  var myDate = new Date(2023, 5, 15); // Create a Date object representing June 15, 2023
  console.log("Original Date:", myDate);
  var updatedDate = changeMonthToJanuary(myDate);
  console.log("Updated Date:", updatedDate);
 
  
  function changeDayOfWeek(date, targetDayOfWeek) {
    var currentDayOfWeek = date.getDay(); // Get the current day of the week (0 = Sunday, 1 = Monday, etc.)
    var difference = targetDayOfWeek - currentDayOfWeek; // Calculate the difference in days
    date.setDate(date.getDate() + difference); // Add the difference in days to the date
    return date;
  }
  // Example usage:
  var myDate = new Date(2023, 4, 20); // Create a Date object representing May 20, 2023
  console.log("Original Date:", myDate);  
  var updatedDate = changeDayOfWeek(myDate, 2); // Change the day of the week to Tuesday (2 = Tuesday)
  console.log("Updated Date:", updatedDate);
  

  function changeMinutesToSpecificTime(time) {
    var specificMinutes = parseInt(prompt("Enter the specific minutes:")); // Prompt the user for the specific minutes
    if (isNaN(specificMinutes)) {
      console.log("Invalid input. Please enter a valid number.");
      return time;
    } 
    time.setMinutes(specificMinutes); // Set the minutes to the specific value
    return time;
  }
  // Example usage:
  var myTime = new Date(); // Create a Date object representing the current time
  console.log("Original Time:", myTime);  
  var updatedTime = changeMinutesToSpecificTime(myTime);
  console.log("Updated Time:", updatedTime);
  

  function addHoursToTime(time, hours) {
    var newTime = new Date(time.getTime()); // Create a new Date object as a copy of the original time
  
    newTime.setHours(newTime.getHours() + hours); // Add the specified number of hours to the new time
    return newTime;
  }
  // Example usage:
  var myTime = new Date(); // Create a Date object representing the current time
  console.log("Original Time:", myTime);  
  var updatedTime = addHoursToTime(myTime, 3); // Add 3 hours to the time
  console.log("Updated Time:", updatedTime);
  

  function calculateAge(birthdate) {
    var currentDate = new Date(); // Get the current date
  
    // Calculate the difference in years
    var age = currentDate.getFullYear() - birthdate.getFullYear();
  
    // Adjust the age based on the month and day
    var currentMonth = currentDate.getMonth();
    var birthMonth = birthdate.getMonth();
    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDate.getDate() < birthdate.getDate())) {
      age--;
    }
  
    return age;
  }
  
  // Example usage:
  var myBirthdate = new Date(1990, 4, 15); // Create a Date object representing May 15, 1990
  var myAge = calculateAge(myBirthdate);
  console.log("Age:", myAge);

  
//   Chapter 35 - 37 (Functions)=========================================================

function displayAlert(message) {
    console.log("ALERT:", message);
}


function askName() {
    let userName = prompt("Enter name");
    return userName;
}
function callTwoFunctions() {
    // Call the first function
    firstFunction();
    // Call the second function
    secondFunction();
}
function firstFunction() {
    console.log("This is the first function.");
}
function secondFunction() {
    console.log("This is the second function.");
}


function displayAndAlertName() {
    let userName = prompt("Enter name");
    alert("Your name is: " + userName);
}
// Call the function
displayAndAlertName();

function concat(letterA, letterB, letterC, variable, str, num) {
    // Rest of the function code goes here
}


function concatenateStrings(str1, str2) {
    let result = str1 + str2;
    return result;
}

// Call the function and assign the result to a variable
let concatenatedString = concatenateStrings("Hello", "World");
console.log(concatenatedString);


function multiplyNumbers(num1, num2, num3) {
    let result = num1 * num2 * num3;
    return result;
}

// Call the function and assign the result to a variable
let multipliedResult = multiplyNumbers(2, 3, 4);
console.log(multipliedResult);

function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    let average = sum / numbers.length;
    return average;
}

function calculateSum(num1, num2) {
    let sum = num1 + num2;
    return sum;
}


function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return 0;
    }

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    let average = sum / numbers.length;
    return average;
}
let numbers = [5, 10, 15, 20, 25];
let average = calculateAverage(numbers);
console.log(average);


function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return 0;
    }

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    let average = sum / numbers.length;
    return average;
}

let numbers = [5, 10, 15, 20, 25];
let averageResult = calculateAverage(numbers);
console.log(averageResult);


function countLetters(word) {
    let letterCounts = {};

    for (let i = 0; i < word.length; i++) {
        let letter = word[i];
        if (letterCounts.hasOwnProperty(letter)) {
            letterCounts[letter]++;
        } else {
            letterCounts[letter] = 1;
        }
    }

    return letterCounts;
}


function setYear(year) {
    let date = new Date();
    date.setFullYear(year);
    return date;
}
let year = 2023;
let dateObject = setYear(year);
console.log(dateObject);


function calculateAge(dateOfBirth) {
    let currentDate = new Date();
    let birthDate = new Date(dateOfBirth);

    let age = currentDate.getFullYear() - birthDate.getFullYear();

    // Check if the birthday hasn't occurred yet in the current year
    if (currentDate.getMonth() < birthDate.getMonth() ||
        (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}


function checkWordPresence(word, array) {
    return array.includes(word);
  }
  var myArray = ['zaid', 'haris', 'raza', 'abubakar', 'hassan', 'hussain', 'fatima'];
  var searchWord = 'raza';
  
  var result = checkWordPresence(searchWord, myArray);
  console.log(result);  // Output: true

  
  function repeatLetter(letter, times) {
    return letter.repeat(times);
  }
  var letterToRepeat = 'a';
  var repeatTimes = 10;
  
  var result = repeatLetter(letterToRepeat, repeatTimes);
  console.log(result);  // Output: "aaaaaaaaaa"

  
  function reverseArray(arr) {
    return arr.reverse();
  }
  var myArray = ['a', 'b', 'c', 'd', 'e'];

  var reversedArray = reverseArray(myArray);
  console.log(reversedArray);  // Output: ["e", "d", "c", "b", "a"]

  

//   Chapter 38 (Local vs. Global Variables)===============================================

function calculateSum(a, b) {
    // Declare a local variable
    var result = a + b;
  
    // Print the local variable
    console.log("The sum is: " + result);
  
    // Perform some operations using the local variable
    var multipliedResult = result * 2;
    console.log("Twice the sum is: " + multipliedResult);
  
    // Return the local variable
    return result;
  }
  
  // Call the function
  var sum = calculateSum(3, 5);
  console.log("Returned sum: " + sum);

  var globalVariable = "I'm a global variable";

function accessGlobalVariable() {
  // Access the global variable inside the function
  console.log(globalVariable);
}

accessGlobalVariable(); // Output: I'm a global variable


// Chapter 39, 40 (Switch Statements)==================================================

var fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("Selected fruit: Apple");
    console.log("Color: Red");
    break;
  case "banana":
    console.log("Selected fruit: Banana");
    console.log("Color: Yellow");
    break;
  case "orange":
    console.log("Selected fruit: Orange");
    console.log("Color: Orange");
    break;
  default:
    console.log("Unknown fruit");
    break;
}


var cityName = prompt("Enter a city name:");

switch (cityName) {
  case "London":
    alert("You entered London. It's a beautiful city!");
    break;
  case "Paris":
    alert("You entered Paris. The city of love!");
    break;
  case "New York":
    alert("You entered New York. The Big Apple!");
    break;
  default:
    alert("The entered city is not recognized.");
    break;
}













