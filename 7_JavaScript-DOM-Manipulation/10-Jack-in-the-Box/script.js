const jackContainer = document.getElementById("jack-container");
const jackImg = document.getElementById("jack-img");
const jackVideo = document.getElementById("jack-video");
const toggleBtn = document.getElementById("toggle-btn");

// Retrieve data attributes
const closedImg = jackContainer.getAttribute("data-closed-img");
const openedImg = jackContainer.getAttribute("data-opened-img");
const openingVideo = jackContainer.getAttribute("data-opening-video");
const closingVideo = jackContainer.getAttribute("data-closing-video");

// Track state: false = closed, true = open
let isOpen = false;

/*  
 * DOCU: Toggles the state of the Jack-in-the-Box.
 *       If the box is closed, it plays the opening video and then shows the open image.
 *       If the box is open, it plays the closing video and then shows the closed image.
 * @param {none} - This function does not accept any parameters.
 * @returns {void} - This function does not return any value.
 * @throws {none} - This function does not throw any exceptions.
 *   
 * Last Updated: 2025-03-08  
 * Author: Mark Cedrick T. De Vera  
 * Last Updated By: Mark Cedrick T. De Vera  
 */
function toggleJack() {
    // Prevent new interactions if a video is currently playing
    if (jackVideo.style.display === "block") return;

    if (!isOpen) {
        // Box is closed; play opening animation
        playVideo(openingVideo, () => {
            jackImg.src = openedImg;
            toggleBtn.textContent = "Close the Box";
            isOpen = true;
        });
    } else {
        // Box is open; play closing animation
        playVideo(closingVideo, () => {
            jackImg.src = closedImg;
            toggleBtn.textContent = "Open the Box";
            isOpen = false;
        });
    }
}

/*  
 * DOCU: Plays a video from the provided source in the hidden video element.
 *       It hides the static image, displays the video, and plays it.
 *       Once the video ends, the video is hidden, the image is shown, and a callback function is executed.
 * @param {string} videoSrc - The source path of the video to be played.
 * @param {Function} onEnd - The callback function to execute after the video finishes playing.
 * @returns {void} - This function does not return any value.
 * @throws {none} - This function does not throw any exceptions.
 *   
 * Last Updated: 2025-03-08  
 * Author: Mark Cedrick T. De Vera  
 * Last Updated By: Mark Cedrick T. De Vera  
 */
function playVideo(videoSrc, onEnd) {
    // Hide the static image and display the video element
    jackImg.style.display = "none";
    jackVideo.style.display = "block";

    // Force the video to restart from the beginning by appending a unique query parameter
    jackVideo.src = videoSrc + "?" + new Date().getTime();
    jackVideo.currentTime = 0;
    jackVideo.play();

    // When the video ends, hide the video, show the static image, and execute the callback
    jackVideo.onended = () => {
        jackVideo.style.display = "none";
        jackImg.style.display = "block";
        onEnd();
    };
}

// Attach event listeners for both the image and the button
jackImg.addEventListener("click", toggleJack);
toggleBtn.addEventListener("click", toggleJack);
