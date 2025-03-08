// Initial balance
let currentBalance = 1000;

// Daily withdrawal limit
const DAILY_WITHDRAWAL_LIMIT = 500;
let dailyWithdrawnAmount = 0;

// Select DOM elements
const balanceDisplay = document.getElementById("balance");
const transactionAmountInput = document.getElementById("transaction-amount");
const depositBtn = document.getElementById("deposit-btn");
const withdrawBtn = document.getElementById("withdraw-btn");
const message = document.getElementById("message");
const historyList = document.getElementById("history-list");
const limitRemainingDisplay = document.getElementById("limit-remaining");

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
 * DOCU: Updates the displayed remaining daily withdrawal limit.
 * @param {none} - This function does not take any parameters.
 * @returns {void} - This function does not return any value.
 * @throws {none} - This function does not throw any exceptions.
 *   
 * Last Updated: 2025-03-08  
 * Author: Mark Cedrick T. De Vera  
 * Last Updated By: Mark Cedrick T. De Vera  
 */
function updateLimitDisplay() {
    const remaining = DAILY_WITHDRAWAL_LIMIT - dailyWithdrawnAmount;
    limitRemainingDisplay.textContent = remaining;
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
 * DOCU: Adds a new transaction entry to the transaction history display with the current date and time.
 * @param {string} type - The type of transaction ("Deposit" or "Withdraw").
 * @param {number} amount - The amount involved in the transaction.
 * @returns {void} - This function does not return any value.
 * @throws {none} - This function does not throw any exceptions.
 *   
 * Last Updated: 2025-03-08  
 * Author: Mark Cedrick T. De Vera  
 * Last Updated By: Mark Cedrick T. De Vera  
 */
function addTransactionToHistory(type, amount) {
    const transactionItem = document.createElement("div");
    transactionItem.className = "transaction-item";

    // Create a new Date object and format date and time
    const now = new Date();
    const dateString = now.toLocaleDateString();
    const timeString = now.toLocaleTimeString();

    transactionItem.textContent = `${type}: $${amount.toFixed(2)} on ${dateString} at ${timeString}`;
    // Insert new transactions at the top of the history list
    historyList.insertBefore(transactionItem, historyList.firstChild);
}

/*  
 * DOCU: Processes a deposit transaction by validating the input amount, updating the account balance,
 *       adding a transaction to history, and providing feedback via a success message.
 * @param {number} amount - The amount to deposit.
 * @returns {void} - This function does not return any value.
 * @throws {none} - This function does not throw any exceptions.
 *   
 * Last Updated: 2025-03-08  
 * Author: Mark Cedrick T. De Vera  
 * Last Updated By: Mark Cedrick T. De Vera  
 */
function processDeposit(amount) {
    currentBalance += amount;
    updateBalanceDisplay();
    addTransactionToHistory("Deposit", amount);
    showMessage(`Deposited $${amount.toFixed(2)} successfully!`, "success");
}

/*  
 * DOCU: Processes a withdrawal transaction by checking the daily limit, ensuring sufficient funds,
 *       updating the account balance, adding a transaction to history, and providing feedback.
 * @param {number} amount - The amount to withdraw.
 * @returns {void} - This function does not return any value.
 * @throws {none} - This function does not throw any exceptions.
 *   
 * Last Updated: 2025-03-08  
 * Author: Mark Cedrick T. De Vera  
 * Last Updated By: Mark Cedrick T. De Vera  
 */
function processWithdrawal(amount) {
    // Check daily withdrawal limit
    if (dailyWithdrawnAmount + amount > DAILY_WITHDRAWAL_LIMIT) {
        showMessage("Daily withdrawal limit reached!", "danger");
        return;
    }

    // Check if sufficient balance
    if (amount > currentBalance) {
        showMessage("Insufficient funds!", "danger");
        return;
    }

    currentBalance -= amount;
    dailyWithdrawnAmount += amount;
    updateBalanceDisplay();
    updateLimitDisplay();
    addTransactionToHistory("Withdraw", amount);
    showMessage(`Withdrew $${amount.toFixed(2)} successfully!`, "success");
}

// Set initial limit display on page load
updateLimitDisplay();

// Event listener for Deposit button
depositBtn.addEventListener("click", function (event) {
    event.preventDefault();
    const amount = parseFloat(transactionAmountInput.value);

    if (isNaN(amount) || amount <= 0) {
        showMessage("Please enter a valid deposit amount.", "warning");
        return;
    }

    processDeposit(amount);
    transactionAmountInput.value = "";
});

// Event listener for Withdraw button
withdrawBtn.addEventListener("click", function (event) {
    event.preventDefault();
    const amount = parseFloat(transactionAmountInput.value);

    if (isNaN(amount) || amount <= 0) {
        showMessage("Please enter a valid withdrawal amount.", "warning");
        return;
    }

    processWithdrawal(amount);
    transactionAmountInput.value = "";
});
