// Task 1: Custom Map Function
function task1() {
    /*  
     * DOCU: Applies a provided function to each element of the input array and returns a new array with the results.  
     * @param {Array} arr - The array to map over.  
     * @param {Function} callback - The function to apply to each element.  
     * @returns {Array} - A new array containing the results of applying the callback to each element.  
     * @throws {Error} - Throws error if arr is not an array or callback is not a function.  
     *   
     * Last Updated: 2025-03-05  
     * Author: Mark Cedrick De Vera
     * Last Updated By: Mark Cedrick De Vera
     */
    function customMap(arr, callback) {
        let newArr = [];

        for (let i = 0; i < arr.length; i++) {
            newArr[newArr.length] = callback(arr[i]);
        }

        return newArr;
    }

    let numbers = [1, 2, 3,];
    let doubled = customMap(numbers, function (num) { return num * 2; });
    console.log(doubled); // Expected output: [2, 4, 6]
}
task1();

// Task 2: Filter Function
function task2() {
    /*  
     * DOCU: Filters elements of an array based on a provided predicate function and returns a new array containing only those elements that satisfy the condition.  
     * @param {Array} arr - The array to filter.  
     * @param {Function} callback - The predicate function to test each element.  
     * @returns {Array} - A new array with elements that return a truthy value when passed to the callback.  
     * @throws {Error} - Throws error if arr is not an array or callback is not a function.  
     *   
     * Last Updated: 2025-03-05  
     * Author: Mark Cedrick T. De Vera  
     * Last Updated By: Mark Cedrick T. De Vera  
     */
    function filter(arr, callback) {
        var filteredArr = [];

        for (let i = 0; i < arr.length; i++) {

            if (callback(arr[i])) {
                filteredArr[filteredArr.length] = arr[i];
            }
        }

        return filteredArr;
    }

    let result = filter([1, 2, 3, 4, 15], function (val) { return val < 10; });
    console.log(result); // Should output: [1,2,3,4]
}
task2();

// Task 3: Some Function
function task3() {
    /*  
     * DOCU: Checks if at least one element in the array passes the test implemented by the provided function.  
     * @param {Array} arr - The array to test.  
     * @param {Function} callback - The function to test each element.  
     * @returns {boolean} - True if at least one element passes the test, otherwise false.  
     * @throws {Error} - Throws error if arr is not an array or callback is not a function.  
     *   
     * Last Updated: 2025-03-05  
     * Author: Mark Cedrick T. De Vera  
     * Last Updated By: Mark Cedrick T. De Vera  
     */
    function some(arr, callback) {
        for (let i = 0; i < arr.length; i++) {
            if (callback(arr[i])) {
                return true;
            }
        }

        return false;
    }

    let result = some([1, 2, 3, 4], function (val) { return val > 5; });
    console.log(result); // Should output: true
}
task3();

// Task 4: Every Function
function task4() {
    /*  
     * DOCU: Determines whether all elements in an array pass the test implemented by the provided function.  
     * @param {Array} arr - The array to test.  
     * @param {Function} callback - The function to test each element.  
     * @returns {boolean} - True if all elements pass the test, otherwise false.  
     * @throws {Error} - Throws error if arr is not an array or callback is not a function.  
     *   
     * Last Updated: 2025-03-05  
     * Author: Mark Cedrick T. De Vera  
     * Last Updated By: Mark Cedrick T. De Vera  
     */
    function every(arr, callback) {
        for (let i = 0; i < arr.length; i++) {
            if (callback(arr[i])) {
                return true;
            }
        }

        return false;
    }

    let result = every([1, 2, 3], function (val) { return val > 0; });
    console.log(result); // Should output: true
}
task4();

// Task 5: Reduce Function
function task5() {
    /*  
     * DOCU: Reduces an array to a single value by executing a provided reducer function for each element and accumulating the result.  
     * @param {Array} arr - The array to reduce.  
     * @param {Function} callback - The reducer function that takes an accumulator and the current element.  
     * @param {*} initial - An optional initial value for the accumulator.  
     * @returns {*} - The single value that results from the reduction.  
     * @throws {Error} - Throws error if arr is not an array or callback is not a function.  
     *   
     * Last Updated: 2025-03-05  
     * Author: Mark Cedrick T. De Vera  
     * Last Updated By: Mark Cedrick T. De Vera  
     */
    function reduce(arr, callback, initial) {
        let accumulator;
        let startIndex = 0;

        if (initial === undefined) {
            accumulator = arr[0];
            startIndex = 1;
        } else {
            accumulator = initial;
        }

        for (let i = startIndex; i < arr.length; i++) {
            accumulator = callback(accumulator, arr[i]);
        }

        return accumulator;
    }

    let sum = reduce([1, 2, 3], function (acc, num) { return acc + num; });
    console.log(sum); // Should output: 6
}
task5();

// Task 6: Includes Check
function task6() {
    /*  
     * DOCU: Checks if any element in the array satisfies the condition implemented by the provided function, simulating an 'includes' behavior with a custom callback.  
     * @param {Array} arr - The array to check.  
     * @param {Function} callback - The function used to test each element.  
     * @returns {boolean} - True if at least one element satisfies the condition, otherwise false.  
     * @throws {Error} - Throws error if arr is not an array or callback is not a function.  
     *   
     * Last Updated: 2025-03-05  
     * Author: Mark Cedrick T. De Vera  
     * Last Updated By: Mark Cedrick T. De Vera  
     */
    function includes(arr, callback) {
        for (let i = 0; i < arr.length; i++) {
            if (callback(arr[i])) {
                return true;
            }
        }

        return false;
    }

    let result = includes([1, 2, 3], function (val) { return val === 5; });
    console.log(result); // Should output: true
}
task6();

// Estimated Time of Completion: 2 hrs