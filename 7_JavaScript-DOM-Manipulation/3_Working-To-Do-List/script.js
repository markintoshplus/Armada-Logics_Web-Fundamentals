/*  
 * DOCU: Adds a new task to the to-do list if the input is not empty,
 *       and shows a notification that the task was added.
 *       Also allows toggling a task as completed and removing tasks.
 * @param {none}
 * @returns {void}
 * @throws {none}
 *
 * Last Updated: 2025-03-07
 * Author: Mark Cedrick T. De Vera
 * Last Updated By: Mark Cedrick T. De Vera
 */
document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");
    const notificationContainer = document.getElementById("notification-container");

    addTaskBtn.addEventListener("click", function (e) {
        e.preventDefault();
        addTask();
    });

    taskInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            addTask();
        }
    });

    /*  
    * DOCU: Creates and displays a notification message.
    * @param {string} message - The text to display in the notification.
    * @returns {void}
    */
    function showNotification(message) {
        const notification = document.createElement("div");
        notification.className = "alert alert-info alert-dismissible fade show";
        notification.setAttribute("role", "alert");
        notification.textContent = message;

        const closeButton = document.createElement("button");
        closeButton.type = "button";
        closeButton.className = "btn-close-custom";
        closeButton.setAttribute("aria-label", "Close");

        // Create an image element for the close icon (located in the assets folder)
        const closeIcon = document.createElement("img");
        closeIcon.src = "assets/close.png";
        closeIcon.alt = "Close";
        closeIcon.className = "close-icon";

        // Append the icon to the custom close button
        closeButton.appendChild(closeIcon);

        notification.appendChild(closeButton);

        if (notificationContainer.firstChild) {
            notificationContainer.insertBefore(notification, notificationContainer.firstChild);
        } else {
            notificationContainer.appendChild(notification);
        }

        closeButton.addEventListener("click", function () {
            notificationContainer.removeChild(notification);
        });

        setTimeout(function () {
            if (notificationContainer.contains(notification)) {
                notificationContainer.removeChild(notification);
            }
        }, 5000);
    }

    /*  
    * DOCU: Adds a new task item to the task list if not empty,
    *       and displays a notification.
    * @param {none}
    * @returns {void}
    */
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            showNotification("Please enter a valid task.");
            return;
        }

        const listItem = document.createElement("li");
        listItem.className = "list-group-item";

        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;

        taskSpan.addEventListener("click", function () {
            taskSpan.classList.toggle("completed");
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "btn btn-sm btn-danger ms-2";
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", function () {
            removeTask(listItem, taskText);
        });

        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteBtn);

        taskList.appendChild(listItem);

        showNotification(`Task added: ${taskText}`);

        taskInput.value = "";
    }

    /*  
    * DOCU: Removes the specified task from the DOM
    *       and displays a notification with the task text.
    * @param {HTMLElement} taskItem - The list item element to remove.
    * @param {string} taskText - The text of the task being removed.
    * @returns {void}
    */
    function removeTask(taskItem, taskText) {
        taskList.removeChild(taskItem);
        showNotification(`Task removed: ${taskText}`);
    }
});