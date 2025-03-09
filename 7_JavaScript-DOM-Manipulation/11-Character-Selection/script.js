// Grab references for the character grid and selected display
const characterGrid = document.getElementById("character-grid");
const selectedImage = document.getElementById("selected-image");
const selectedName = document.getElementById("selected-name");
const selectedTitle = document.getElementById("selected-title");
const selectedOrigin = document.getElementById("selected-origin");
const selectedStyle = document.getElementById("selected-style");
const selectedDescription = document.getElementById("selected-description");

// Select all character thumbnails
const characterThumbs = document.querySelectorAll(".character-thumb");

/*  
 * DOCU: Handles the click event on a character thumbnail.
 *       Updates the main display area with the selected character's full image, name, title,
 *       origin, fighting style, and description.
 *       Also applies a highlight to the selected thumbnail.
 * @param {Event} event - The click event object.
 * @returns {void}
 * @throws {none}
 * 
 * Last Updated: 2025-03-09
 * Author: Mark Cedrick T. De Vera
 * Last Updated By: Mark Cedrick T. De Vera
 */
function onCharacterClick(event) {
    // Remove highlight from previously selected characters
    characterThumbs.forEach(thumb => thumb.classList.remove("selected-character"));

    // The clicked thumbnail
    const clickedThumb = event.currentTarget;

    // Retrieve data attributes
    const heroName = clickedThumb.getAttribute("data-name");
    const heroFullImage = clickedThumb.getAttribute("data-full-image");
    const heroTitle = clickedThumb.getAttribute("data-title");
    const heroOrigin = clickedThumb.getAttribute("data-origin");
    const heroStyle = clickedThumb.getAttribute("data-style");
    const heroDescription = clickedThumb.getAttribute("data-description");

    // Update the selected fighter display
    selectedName.textContent = heroName;
    selectedImage.src = heroFullImage;
    selectedTitle.textContent = heroTitle;
    selectedOrigin.textContent = "Country of origin: " + heroOrigin;
    selectedStyle.textContent = "Fighting style: " + heroStyle;

    // Replace newline characters with <br> tags and update innerHTML
    selectedDescription.innerHTML = heroDescription.split('\n').join('<br>');

    // Highlight the clicked thumbnail
    clickedThumb.classList.add("selected-character");
}

// Attach the same click event listener to each thumbnail
characterThumbs.forEach(thumb => {
    thumb.addEventListener("click", onCharacterClick);
});
