// Task 1
let score = 88;

let grade;

if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}

console.log("Your grade: " + grade);

// Task 2
let temperature = 6;

if (temperature >= 30) {
    console.log("It's hot outside. Stay hydrated!");
} else if (temperature >= 16) {
    console.log("The weather is nice. Enjoy your day!");
} else if (temperature >= 0) {
    console.log("It's cold outside. Wear a jacket.");
} else {
    console.log("It's freezing outside! Bundle up!");
}

// Task 3
let age = 17;

if (age >= 18) {
    console.log("You are eligible for this activity.");
} else if (age >= 13) {
    console.log("You need parental permission.");
} else {
    console.log("You are too young for this activity.");
}

// Task 4
let age2 = 16;
let isMember = true;

let ticketPrice;

if (age2 < 12) {
    ticketPrice = "0";
} else if (isMember) {
    ticketPrice = 10;
} else {
    ticketPrice = 15;
}

console.log("Ticket Price: $" + ticketPrice);

// Task 5
function isLeapYear (year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

console.log(2000, isLeapYear(2000));  
console.log(1900, isLeapYear(1900));  
console.log(2024, isLeapYear(2024));  
console.log(2021, isLeapYear(2021));