// Initial balance
let currentBalance = 1000;

// Select DOM elements
const balanceDisplay = document.getElementById("balance");
const transactionAmountInput = document.getElementById("transaction-amount");
const depositBtn = document.getElementById("deposit-btn");
const withdrawBtn = document.getElementById("withdraw-btn");
const message = document.getElementById("message");

/*  
 * DOCU: Updates the displayed account balance by setting the text content of the balance element.
 * @param {none} - This function does not take any parameters.
 * @returns {void} - This function does not return any value.
 * @throws {none} - This function does not throw any exceptions.
 *   
 * Last Updated: 2025-03-08  
 * Author: Mark Cedrick T. De Vera  
 * Last Updated By: Mark Cedrick T. De Vera  
 */
function updateBalanceDisplay() {
    balanceDisplay.textContent = currentBalance;
}

/*  
 * DOCU: Displays a feedback message in the designated message element using Bootstrap alert classes.
 * @param {string} msg - The message text to display.
 * @param {string} [type="info"] - The Bootstrap alert type (e.g., "success", "danger", "warning") for styling.
 * @returns {void} - This function does not return any value.
 * @throws {none} - This function does not throw any exceptions.
 *   
 * Last Updated: 2025-03-08  
 * Author: Mark Cedrick T. De Vera  
 * Last Updated By: Mark Cedrick T. De Vera  
 */
function showMessage(msg, type = "info") {
    message.textContent = msg;
    message.className = ""; // Reset classes
    message.classList.add("alert", `alert-${type}`);
}

/*  
 * DOCU: Processes a deposit transaction by validating the input amount, updating the account balance,
 *       and providing feedback via a success or warning message.
 * @param {number} amount - The amount to deposit.
 * @returns {void} - This function does not return any value.
 * @throws {none} - This function does not throw any exceptions.
 *   
 * Last Updated: 2025-03-08  
 * Author: Mark Cedrick T. De Vera  
 * Last Updated By: Mark Cedrick T. De Vera  
 */
function processDeposit(amount) {
    // Perform deposit
    currentBalance += amount;
    updateBalanceDisplay();
    showMessage(`Deposited $${amount.toFixed(2)} successfully!`, "success");
}

/*  
 * DOCU: Processes a withdrawal transaction by validating the input amount, ensuring sufficient funds,
 *       updating the account balance, and providing feedback via a success or warning message.
 * @param {number} amount - The amount to withdraw.
 * @returns {void} - This function does not return any value.
 * @throws {none} - This function does not throw any exceptions.
 *   
 * Last Updated: 2025-03-08  
 * Author: Mark Cedrick T. De Vera  
 * Last Updated By: Mark Cedrick T. De Vera  
 */
function processWithdrawal(amount) {
    // Check if sufficient balance
    if (amount > currentBalance) {
        showMessage("Insufficient funds!", "danger");
        return;
    }
    // Perform withdrawal
    currentBalance -= amount;
    updateBalanceDisplay();
    showMessage(`Withdrew $${amount.toFixed(2)} successfully!`, "success");
}

// Event listener for Deposit button
depositBtn.addEventListener("click", function (event) {
    event.preventDefault();
    const amount = parseFloat(transactionAmountInput.value);

    // Validate input
    if (isNaN(amount) || amount <= 0) {
        showMessage("Please enter a valid deposit amount.", "warning");
        return;
    }

    processDeposit(amount);
    transactionAmountInput.value = ""; // Clear input
});

// Event listener for Withdraw button
withdrawBtn.addEventListener("click", function (event) {
    event.preventDefault();
    const amount = parseFloat(transactionAmountInput.value);

    // Validate input
    if (isNaN(amount) || amount <= 0) {
        showMessage("Please enter a valid withdrawal amount.", "warning");
        return;
    }

    processWithdrawal(amount);
    transactionAmountInput.value = ""; // Clear input
});
