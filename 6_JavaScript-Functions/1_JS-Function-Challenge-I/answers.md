[Github Link](https://github.com/markintoshplus/Armada-Logics_Web-Fundamentals/blob/master/6_JavaScript-Functions/1_JS-Function-Challenge-I/answers.md "Github Link")

---
# Challenge 1
## Code Snippet

```javascript
function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

let numbers = [1, 2, 3, 4];
console.log("Sum:", calculateSum(numbers));
```

**T-Diagram for Main Program**

| **Variable / Function** | **Value**              |
| ----------------------- | ---------------------- |
| numbers                 | [1, 2, 3, 4]           |
| calculateSum            | *function (see below)* |
| output                  | "Sum: 10"              |

**T-Diagram for calculateSum(arr) Execution:**

| **Variable**      | **Value**                                                                                          |
| ----------------- | -------------------------------------------------------------------------------------------------- |
| arr               | [1, 2, 3, 4]                                                                                       |
| sum               | 0                                                                                                  |
| i                 | 0                                                                                                  |
| Iteration Summary | Iteration 1: `i = 0`, `sum = 0 + 1 = 1` <br> ... <br> Final Iteration: `i = 3`, `sum = 6 + 4 = 10` |
| i                 | 4                                                                                                  |
| return            | 10                                                                                                 |

**Final Output:** 
> Sum: 10

**Functionality:**
The calculateSum function calculates the sum of all numbers in an array. It starts with a sum of 0 and iterates over each element in the array, adding each number to the running total.

**Execution:**
- The array [1, 2, 3, 4] is passed to calculateSum.
- The function loops through the array, updating the sum.
- Finally, it returns 10, which is printed as "Sum: 10".

---
# Challenge 2
## Code Snippet

```javascript
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(4));
console.log(isEven(7));
console.log(isEven(0));
```

**T-Diagram for Main Program**

| **Variable / Function** | **Value**              |
| ----------------------- | ---------------------- |
| isEven(4)               | *function (see below)* |
| isEven(7)               | *function (see below)* |
| isEven(0)               | *function (see below)* |
| output                  | true<br>false<br>true  |

**T-Diagram for isEven(4)**
| **Variable** | **Value**        |
| ------------ | ---------------- |
| num          | 4                |
| num % 2      | 0                |
| Condition    | (0 === 0) → true |
| return       | true             |

**T-Diagram for isEven(7)**
| **Variable** | **Value**         |
| ------------ | ----------------- |
| num          | 7                 |
| num % 2      | 1                 |
| Condition    | (1 === 0) → false |
| return       | false             |

**T-Diagram for isEven(0)**
| **Variable** | **Value**        |
| ------------ | ---------------- |
| num          | 0                |
| num % 2      | 0                |
| Condition    | (0 === 0) → true |
| return       | true             |

**Final Output:** 
> true
> false
> true

**Functionality:**
The isEven function checks if a number is even by using the modulo operator (%). If the remainder when dividing by 2 is zero, it returns true; otherwise, it returns false.

**Execution:**
- isEven(4) returns true because 4 is divisible by 2.
- isEven(7) returns false because 7 is not divisible by 2.
- isEven(0) returns true because 0 is considered even.
- The outputs are printed in order: true, false, true.

---
# Challenge 3
## Code Snippet

```javascript
function greet(name) {
    return "Hello, " + name + "!";
}

function personalizedGreeting(names) {
    for (let i = 0; i < names.length; i++) {
        console.log(greet(names[i]));
    }
}

let friends = ["Alice", "Bob", "Charlie"];
personalizedGreeting(friends);
```

**T-Diagram for Main Program**
| **Variable / Function**       | **Value**                                             |
| ----------------------------- | ----------------------------------------------------- |
| friends                       | ["Alice", "Bob", "Charlie"]                           |
| greet(names[i])               | *function (see below)*                                |
| personalizedGreeting(friends) | *function (see below)*                                |
| output                        | "Hello, Alice!"<br>"Hello, Bob!"<br>"Hello, Charlie!" |

**T-Diagram for greet(names[i])**
| **Variable** | **Value**              |
| ------------ | ---------------------- |
| name         | (e.g., "Alice")        |
| return       | "Hello, " + name + "!" |

**T-Diagram for personalizedGreeting(friends)**
| **Variable**      | **Value**                                                                                                                                                                                                         |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| names             | ["Alice", "Bob", "Charlie"]                                                                                                                                                                                       |
| i                 | 0                                                                                                                                                                                                                 |
| Iteration Summary | Iteration 1: `i = 0`, call `greet("Alice")` returns "Hello, Alice!"<br>Iteration 2: `i = 1`, call `greet("Bob")` returns "Hello, Bob!"<br>Iteration 3: `i = 2`, call `greet("Charlie")` returns "Hello, Charlie!" |
| i (post-loop)     | 3                                                                                                                                                                                                                 |

**Final Output:**  
> Hello, Alice!  
> Hello, Bob!  
> Hello, Charlie!

**Functionality:**
Two functions are used here:
- greet takes a name as an argument and returns a greeting string.
- personalizedGreeting takes an array of names, iterates over it, and prints the greeting for each name by calling greet.

**Execution:**
- The array ["Alice", "Bob", "Charlie"] is passed to personalizedGreeting.
- For each name, the function calls greet to form a greeting.
- The greetings "Hello, Alice!", "Hello, Bob!", and "Hello, Charlie!" are printed.

---
# Challenge 4
## Code Snippet

```javascript
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

let originalArray = [10, 20, 30];
console.log(reverseArray(originalArray));
console.log(originalArray);
```

**T-Diagram for Main Program**
| **Variable / Function**     | **Value**                                  |
| --------------------------- | ------------------------------------------ |
| originalArray               | [10, 20, 30]                               |
| reverseArray(originalArray) | *function (see below)*                     |
| output                      | [30, 20, 10] <br>[10, 20, 30] (second log) |

**T-Diagram for reverseArray(originalArray)**
| **Variable**      | **Value**                                                                                                                                                                                             |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| arr               | [10, 20, 30]                                                                                                                                                                                          |
| reversed          | []                                                                                                                                                                                                    |
| i                 | 2                                                                                                                                                                                                     |
| Iteration Summary | Iteration 1: `i = 2`, push `arr[2]` → reversed becomes [30]<br>Iteration 2: `i = 1`, push `arr[1]` → reversed becomes [30, 20]<br>Iteration 3: `i = 0`, push `arr[0]` → reversed becomes [30, 20, 10] |
| i                 | -1                                                                                                                                                                                                    |
| return            | [30, 20, 10]                                                                                                                                                                                          |

**Final Output:**  
> [30, 20, 10]  
> [10, 20, 30]

**Functionality:**
The reverseArray function creates a new array that contains the elements of the input array in reverse order.

**Execution:**
- The input array is [10, 20, 30].
- The function starts from the last element and pushes each element into a new array.
- It returns [30, 20, 10], which is printed.
- The original array remains unchanged and is printed separately.

---
# Challenge 5
## Code Snippet

```javascript
function multiplyMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            matrix[i][j] *= 2;
        }
    }
    return matrix;
}

let matrix = [
    [1, 2],
    [3, 4],
];
console.log(multiplyMatrix(matrix));
```

**T-Diagram for Main Program**
| **Variable / Function** | **Value**              |
| ----------------------- | ---------------------- |
| matrix                  | \[[1, 2], [3, 4]]      |
| multiplyMatrix(matrix)  | *function (see below)* |
| output                  | \[[2, 4], [6, 8]]      |

**T-Diagram for multiplyMatrix(matrix)**
| **Variable**       | **Value**                                                                                                                                                                                                                        |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| matrix (parameter) | \[[1, 2], [3, 4]]                                                                                                                                                                                                                |
| i                  | starts at 0                                                                                                                                                                                                                      |
| Iteration Summary  | Outer Iteration 1 (i = 0):<br> j = 0: matrix[0][0] becomes 1 * 2 = 2<br> j = 1: matrix[0][1] becomes 2 * 2 = 4<br>Outer Iteration 2 (i = 1):<br> j = 0: matrix[1][0] becomes 3 * 2 = 6<br> j = 1: matrix[1][1] becomes 4 * 2 = 8 |
| i                  | 2                                                                                                                                                                                                                                |
| return             | \[[2, 4], [6, 8]]                                                                                                                                                                                                                |

**Final Output:**  
> \[[2, 4], [6, 8]]

**Functionality:**
The multiplyMatrix function multiplies every element in a 2D array (matrix) by 2 using nested loops.

**Execution:**
- The input matrix is \[[1, 2], [3, 4]].
- The function loops over each row and each element within the row, doubling its value.
- It returns the updated matrix \[[2, 4], [6, 8]], which is then printed.

---




