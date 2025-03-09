// Select all clickable armor options
const armorOptions = document.querySelectorAll(".armor-option");

// References to the stacked preview slots
const helmetSlot = document.getElementById("helmet-slot");
const chestSlot = document.getElementById("chest-slot");
const leggingsSlot = document.getElementById("leggings-slot");
const bootsSlot = document.getElementById("boots-slot");

/*  
 * DOCU: When an armor option is clicked, retrieves its data-part attribute to determine which slot to update,
 *       then sets that slot's background-image to the selected armor piece.
 *       Also, applies a visual highlight to the selected option within its category.
 * @param {Event} e - The click event.
 * @returns {void}
 * 
 * Last Updated: 2025-03-09
 * Author: Mark Cedrick T. De Vera
 * Last Updated By: Mark Cedrick T. De Vera
 */
function onArmorClick(e) {
    const clickedOption = e.currentTarget;
    const part = clickedOption.getAttribute("data-part");
    const src = clickedOption.getAttribute("data-src");

    // Remove highlight from all options in the same category
    armorOptions.forEach(option => {
        if (option.getAttribute("data-part") === part) {
            option.classList.remove("selected-armor");
        }
    });

    // Add highlight to the clicked option
    clickedOption.classList.add("selected-armor");

    // Update the corresponding preview slot based on the part
    switch (part) {
        case "helmet":
            helmetSlot.style.backgroundImage = `url('${src}')`;
            break;
        case "chest":
            chestSlot.style.backgroundImage = `url('${src}')`;
            break;
        case "leggings":
            leggingsSlot.style.backgroundImage = `url('${src}')`;
            break;
        case "boots":
            bootsSlot.style.backgroundImage = `url('${src}')`;
            break;
        default:
            console.warn("Unknown part: " + part);
            break;
    }
}

// Attach the click event to each armor option
armorOptions.forEach(option => {
    option.addEventListener("click", onArmorClick);
});

/*  
 * DOCU: Handles the save button click event, collects the current selection from each preview slot,
 *       and displays a confirmation message. This function can be extended to store the selections
 *       for later use (e.g., localStorage, server-side saving, etc.).
 * @param {Event} e - The click event.
 * @returns {void}
 * 
 * Last Updated: 2025-03-09
 * Author: Mark Cedrick T. De Vera
 * Last Updated By: Mark Cedrick T. De Vera
 */
document.getElementById("save-btn").addEventListener("click", function (e) {
    // Collect the background images from each slot
    const helmetImage = window.getComputedStyle(helmetSlot).backgroundImage;
    const chestImage = window.getComputedStyle(chestSlot).backgroundImage;
    const leggingsImage = window.getComputedStyle(leggingsSlot).backgroundImage;
    const bootsImage = window.getComputedStyle(bootsSlot).backgroundImage;

    // Simple check to see if all slots have been filled
    if (helmetImage === "none" || chestImage === "none" ||
        leggingsImage === "none" || bootsImage === "none") {
        alert("Please select an armor piece for every slot before saving.");
    } else {
        alert("Character build saved!");
    }
});
