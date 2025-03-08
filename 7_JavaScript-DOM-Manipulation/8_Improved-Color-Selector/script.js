// Grab references to elements
const colorButtons = document.querySelectorAll(".btn-color");
const colorNameSpan = document.getElementById("colorName");

// Set initial background colors for each button based on data-color
colorButtons.forEach(button => {
    button.style.backgroundColor = button.dataset.color;
});

/**
 * Adds event listeners to each color button to change the entire page background,
 * update the selected color text, and manage active state for buttons.
 */
colorButtons.forEach(button => {
    button.addEventListener("click", function (event) {
        // Prevent parent container events
        event.stopPropagation();

        // Retrieve the color from data-color
        const selectedColor = this.dataset.color;

        // Update the page (body) background color
        document.body.style.backgroundColor = selectedColor;

        // Update selected color display text
        colorNameSpan.textContent = this.textContent;

        // Remove active status from all buttons and reset inline styles
        colorButtons.forEach(btn => {
            btn.classList.remove("active-btn");
            btn.style.backgroundColor = btn.dataset.color;
            btn.style.color = "#fff";
        });

        // Mark this button as active: set background to the selected color with a contrasting border
        this.classList.add("active-btn");
        this.style.backgroundColor = selectedColor;
        this.style.color = "#fff"; // Ensure text remains visible
    });
});
