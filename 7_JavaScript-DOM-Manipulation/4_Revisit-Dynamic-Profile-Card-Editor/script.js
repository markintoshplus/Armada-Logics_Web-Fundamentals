// Grab elements from the DOM
const profileName = document.getElementById("profile-name");
const profileBio = document.getElementById("profile-bio");
const profileImage = document.getElementById("profile-image");
const profileCard = document.getElementById("profile-card");

const nameInput = document.getElementById("name-input");
const bioInput = document.getElementById("bio-input");
const imageInput = document.getElementById("image-input");
const bgColorInput = document.getElementById("bg-color-input");

const updateProfileBtn = document.getElementById("update-profile-btn");

/**
 * Update the Name
 */
function updateName() {
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
    // If user provides an image URL, use it; otherwise reset to default
    if (imageInput.value.trim()) {
        profileImage.setAttribute("src", imageInput.value.trim());
    } else {
        profileImage.setAttribute("src", "https://picsum.photos/500?random=1");
    }
}

/**
 * Update the Background Color
 */
function updateBackgroundColor() {
    profileCard.style.backgroundColor = bgColorInput.value;
}

/**
 * Master function to update all parts of the profile
 */
function updateProfile() {
    updateName();
    updateBio();
    updateImage();
    updateBackgroundColor();
}

// Attach the master function to the button using addEventListener()
updateProfileBtn.addEventListener("click", updateProfile);