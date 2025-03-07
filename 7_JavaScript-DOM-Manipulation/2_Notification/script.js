const notificationContainer = document.getElementById("notification-container");

/*  
 * DOCU: This function creates and displays a new notification with a custom close button icon.
 *       It dynamically creates a notification element with a message and a close button, inserts it
 *       at the top of the fixed notification container, and sets it to automatically disappear after 5 seconds.
 * @param {none} - This function does not accept any parameters.
 * @returns {void} - This function does not return any value.
 * @throws {none} - This function does not throw any exceptions.
 *   
 * Last Updated: 2025-03-07  
 * Author: Mark Cedrick T. De Vera
 * Last Updated By: Mark Cedrick T. De Vera
 */
function showNotification() {
    // Create a new notification element with Bootstrap alert classes
    const notification = document.createElement("div");
    notification.className = "alert alert-info alert-dismissable fade show";
    notification.setAttribute("role", "alert");

    // Create text node for the notification message
    const message = document.createTextNode("You have a message!");

    // Create a custom close button
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

    // Append the message and close button to the notification element
    notification.appendChild(message);
    notification.appendChild(closeButton);

    // Insert the new notification at the top of the notification container
    if (notificationContainer.firstChild) {
        notificationContainer.insertBefore(notification, notificationContainer.firstChild);
    } else {
        notificationContainer.appendChild(notification);
    }

    // Remove the notification when the close button is clicked
    closeButton.onclick = function () {
        notificationContainer.removeChild(notification);
    }

    // Automatically remove the notification after 5 seconds
    setTimeout(function () {
        if (notificationContainer.contains(notification)) {
            notificationContainer.removeChild(notification);
        }
    }, 5000);
}