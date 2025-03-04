[Github Link](https://github.com/markintoshplus/Armada-Logics_Web-Fundamentals/blob/master/6_JavaScript-Functions/2_JS-Function-Challenge-II/answers.md "Github Link")
*Estimated Time of Completion: 1 hr*

---
# Challenge 1
## Code Snippet

```javascript
function generatePattern() {
    let result = "";
    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= i; j++) {
            result += j + " ";
        }
        result += "\n";
    }
    return result;
}

console.log(generatePattern());
```

**T-Diagram for Main Program**
| **Variable / Function** | **Value**              |
| ----------------------- | ---------------------- |
| generatePattern()       | *function (see below)* |
| output                  | "1 \n1 2 \n1 2 3 \n"   |

**T-Diagram for generatePattern()**
| **Variable**      | **Value**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| result            | "" (initially)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| i                 | 1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Iteration Summary | **Iteration 1 (i = 1):** <br>• Inner loop: j = 1, result becomes "1 " <br>• Append "\n": result becomes "1 \n" <br> **Iteration 2 (i = 2):** <br>• Inner loop: j = 1, result becomes "1 \n1 " then j = 2, result becomes "1 \n1 2 " <br>• Append "\n": result becomes "1 \n1 2 \n" <br> **Iteration 3 (i = 3):** <br>• Inner loop: j = 1, result becomes "1 \n1 2 \n1 " then j = 2, result becomes "1 \n1 2 \n1 2 " then j = 3, result becomes "1 \n1 2 \n1 2 3 " <br>• Append "\n": result becomes "1 \n1 2 \n1 2 3 \n" |
| return            | 1 <br>1 2 <br>1 2 3                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

**Final Output**
> 1 
> 1 2 
> 1 2 3 

**Functionality:**
Builds a string representing a numeric pattern using nested loops.

**Execution:**
- Outer Loop: Iterates i from 1 to 3 (each iteration creates a new line).
- Inner Loop: Iterates j from 1 to i, appending each number and a space.
- After each inner loop, a newline (\n) is added.

---
# Challenge 2
## Code Snippet
```javascript
function swapFirstLast(arr) {
    let first = arr.shift();
    let last = arr.pop();
    arr.unshift(last);
    arr.push(first);
    return arr;
}

let numbers = [10, 20, 30, 40];
console.log(swapFirstLast(numbers));
console.log(numbers);
```

**T-Diagram for Main Program**
| **Variable / Function** | **Value**              |
| ----------------------- | ---------------------- |
| numbers                 | [10, 20, 30, 40]       |
| swapFirstLast(numbers)  | *function (see below)* |
| output                  | [40, 20, 30, 10]       |
| output                  | [40, 20, 30, 10]       |

**T-Diagram for swapFirstLast(numbers)**
| **Variable / Step**         | **Value**                      |
| --------------------------- | ------------------------------ |
| arr                         | [10, 20, 30, 40]               |
| first = arr.shift()         | 10<br>arr becomes [20, 30, 40] |
| last = arr.pop()            | 40<br>arr becomes [20, 30]     |
| arr after arr.unshift(last) | [40, 20, 30]                   |
| arr after arr.push(first)   | [40, 20, 30, 10]               |
| return                      | [40, 20, 30, 10]               |

**Final Output**
> [40, 20, 30, 10]
> [40, 20, 30, 10]

**Functionality:**
Swaps the first and last elements of an array by removing them and reinserting them in reversed order.

**Execution:**
- Remove the first element:
    - arr.shift() removes 10 from [10, 20, 30, 40], storing it in first.
- Remove the last element:
    - arr.pop() removes 40, storing it in last.
- Insert the removed last element at the beginning:
    - arr.unshift(last) adds 40 to the start, making the array [40, 20, 30].
- Append the removed first element at the end:
    - arr.push(first) appends 10, resulting in [40, 20, 30, 10].
- Return the modified array:
    - The function returns [40, 20, 30, 10].
- Output:
    - Both console.log statements print [40, 20, 30, 10] since the original array is modified in place.

---
# Challenge 3
## Code Snippet
```javascript
function filterPassingGrades(grades) {
    let passing = [];
    for (let grade of grades) {
        if (grade >= 70) {
            passing.push(grade);
        } else {
            passing.unshift(grade);
        }
    }
    return passing;
}

let scores = [85, 45, 90, 60];
console.log(filterPassingGrades(scores));
```

**T-Diagram for Main Progra**
| **Variable / Function**     | **Value**              |
| --------------------------- | ---------------------- |
| scores                      | [85, 45, 90, 60]       |
| filterPassingGrades(grades) | *function (see below)* |
| output                      | [60, 45, 85, 90]       |

**T-Diagram for filterPassingGrades(grades) Execution**
| **Variable / Step**   | **Value**                                                                                                                                                                                                                                                            |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| grades                | [85, 45, 90, 60]                                                                                                                                                                                                                                                     |
| passing               | [] (initially)                                                                                                                                                                                                                                                       |
| **Iteration Summary** | **grade = 85:** 85 ≥ 70 → push → passing becomes [85] <br> **grade = 45:** 45 < 70 → unshift → passing becomes [45, 85] <br> **grade = 90:** 90 ≥ 70 → push → passing becomes [45, 85, 90] <br> **grade = 60:** 60 < 70 → unshift → passing becomes [60, 45, 85, 90] |
| return                | [60, 45, 85, 90]                                                                                                                                                                                                                                                     |

**Final Output**
> [60, 45, 85, 90]

**Functionality:**
Iterates over an array of grades. If a grade is 70 or above, it’s appended to the end of a new array; otherwise, it’s inserted at the beginning.

**Execution:**
- For [85, 45, 90, 60]:
    - 85: Passing (≥70) → pushed → [85]
    - 45: Failing (<70) → unshifted → [45, 85]
    - 90: Passing (≥70) → pushed → [45, 85, 90]
    - 60: Failing (<70) → unshifted → [60, 45, 85, 90]
- The function returns [60, 45, 85, 90].

---
# Challenge 4
## Code Snippet
```javascript
function updateStatus(tasks) {
    for (let task of tasks) {
        task.completed = !task.completed;
    }
    return tasks;
}

let taskList = [
    { id: 1, completed: false },
    { id: 2, completed: true }
];

console.log(updateStatus(taskList));
console.log(taskList);
```

**T-Diagram for Main Program**
| **Variable / Function** | **Value**                                                 |
| ----------------------- | --------------------------------------------------------- |
| taskList                | [{ id: 1, completed: false }, { id: 2, completed: true }] |
| updateStatus(tasks)     | *function (see below)*                                    |
| output                  | [{ id: 1, completed: true }, { id: 2, completed: false }] |
| output                  | [{ id: 1, completed: true }, { id: 2, completed: false }] |

**T-Diagram for updateStatus(tasks) Execution**
| **Variable / Step**       | **Value**                                                                                                                |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| tasks (parameter)         | [{ id: 1, completed: false }, { id: 2, completed: true }]                                                                |
| Iteration 1 (first task)  | For task { id: 1, completed: false }: <br> completed becomes !false → true <br> Updated task: { id: 1, completed: true } |
| Iteration 2 (second task) | For task { id: 2, completed: true }: <br> completed becomes !true → false <br> Updated task: { id: 2, completed: false } |
| return                    | [{ id: 1, completed: true }, { id: 2, completed: false }]                                                                |

**Final Output**
> [{ id: 1, completed: true }, { id: 2, completed: false }]
> [{ id: 1, completed: true }, { id: 2, completed: false }]

**Functionality:**
Toggles the completed property for each task object in the array.

**Execution:**
- Iterates through each task in taskList.
- For each task, it inverts the boolean value of completed.
- Returns the updated array, modifying the original array in place.

**For the given taskList:**
- Task 1: { id: 1, completed: false } becomes { id: 1, completed: true }.
- Task 2: { id: 2, completed: true } becomes { id: 2, completed: false }.

Both console.log statements output the updated array.

---
# Challenge 5
## Code Snippet
```javascript
function findValue(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return `Found at index ${i}`;
        }
    }
    return "Not found";
}

let data = [5, 12, 8, 130, 44];
console.log(findValue(data, 12));
console.log(findValue(data, 100)); 
```

**T-Diagram for Main Program**
| **Variable / Function** | **Value**              |
| ----------------------- | ---------------------- |
| data                    | [5, 12, 8, 130, 44]    |
| findValue               | *function (see below)* |
| output (for target 12)  | "Found at index 1"     |
| output (for target 100) | "Not found"            |

**T-Diagram for findValue(arr, target) Execution**
*For findValue(data, 12)*
| **Variable**          | **Value**                                                                                                |
| --------------------- | -------------------------------------------------------------------------------------------------------- |
| arr                   | [5, 12, 8, 130, 44]                                                                                      |
| target                | 12                                                                                                       |
| i                     | starts at 0                                                                                              |
| **Iteration Summary** | Iteration 0: arr[0] = 5 (5 !== 12) <br> Iteration 1: arr[1] = 12 (12 === 12) → return "Found at index 1" |
| return                | "Found at index 1"                                                                                       |

*For findValue(data, 100)*
| **Variable**          | **Value**                                                                                                 |
| --------------------- | --------------------------------------------------------------------------------------------------------- |
| arr                   | [5, 12, 8, 130, 44]                                                                                       |
| target                | 100                                                                                                       |
| i                     | iterates from 0 to 4                                                                                      |
| **Iteration Summary** | Iterations: <br> i=0: 5 ≠ 100 <br> i=1: 12 ≠ 100 <br> i=2: 8 ≠ 100 <br> i=3: 130 ≠ 100 <br> i=4: 44 ≠ 100 |
| return                | "Not found"                                                                                               |


**Final Output:**
> Found at index 1
> Not found

**Functionality:**
Searches for a target value in an array.

**Execution:**
- Iterates over data using a loop.
- If an element equals the target, returns "Found at index X".
- If no match is found after checking all elements, returns "Not found".

**For the given calls:**
- findValue(data, 12) finds 12 at index 1 and returns "Found at index 1".
- findValue(data, 100) does not find 100 and returns "Not found".
---
