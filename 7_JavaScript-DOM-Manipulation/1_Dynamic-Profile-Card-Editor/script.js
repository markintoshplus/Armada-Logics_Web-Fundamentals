// Grab elements from the DOM
const profileName = document.getElementById("profile-name");
const profileBio = document.getElementById("profile-bio");
const profileImage = document.getElementById("profile-image");
const profileCard = document.getElementById("profile-card");

const nameInput = document.getElementById("name-input");
const bioInput = document.getElementById("bio-input");
const imageInput = document.getElementById("image-input");
const bgColorInput = document.getElementById("bg-color-input");

/**
 * Update the Name
 */
function updateName() {
    // If the field is empty, you could show an alert or set a default name
    profileName.textContent = nameInput.value.trim() || "John Doe";
}

/**
 * Update the Bio
 */
function updateBio() {
    profileBio.textContent =
        bioInput.value.trim() ||
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
}

/**
 * Update the Image
 */
function updateImage() {
    // Basic check if input is empty
    if (imageInput.value.trim()) {
        profileImage.setAttribute("src", imageInput.value.trim());
    } else {
        // Reset to a default if empty
        profileImage.setAttribute("src", "https://picsum.photos/500?random=1");
    }
}

/**
 * Update the Background Color
 */
function updateBackgroundColor() {
    profileCard.style.backgroundColor = bgColorInput.value;
}
