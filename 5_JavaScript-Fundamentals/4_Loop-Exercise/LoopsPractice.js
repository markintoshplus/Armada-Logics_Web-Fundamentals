// Task 1
let number = 6;

for (let row = 1; row <= number; row++) {
    for (let col = 1; col <= number; col++) {
        console.log(`${row} x ${col} = ${row * col}`);
    }
}

// Task 2
let n = 3;
let sum = 0;

for (let i = 1; i <= n; i++) {
    sum += i;
}

console.log(`The sum of the first ${n} number is ${sum}`);

// Task 3
let arrInt = [1, 2, 3, 4, 5];

for (let i = 0; i < arrInt.length; i++) {
    console.log(`Array Element: ${arrInt[i]}`);
}

// Task 4
let num = 5;

for (let row = 1; row <= num; row++) {
    let line = "";
    for (let col = 1; col <= row; col++) {
        line += "*";
    }
    console.log(line);
}

// Task 5
let arrIntReverse = [1, 2, 3, 4, 5, 6];

for (let i = arrIntReverse.length - 1; i >= 0; i--) {
    console.log(`Reversed Element: ${arrIntReverse[i]}`);
}

