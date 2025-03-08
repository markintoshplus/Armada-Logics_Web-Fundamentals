// Select all firefly elements
const fireflies = document.querySelectorAll(".firefly");

// On page load, update each firefly's src with a random query parameter 
// so they don't animate in sync.
fireflies.forEach(firefly => {
    // Remove any existing query parameters and add a random one.
    const baseSrc = firefly.src.split('?')[0];
    const randomParam = Math.floor(Math.random() * 100000);
    firefly.src = `${baseSrc}?${randomParam}`;
});

fireflies.forEach(firefly => {
    firefly.addEventListener("click", function () {
        // If already animating, ignore further clicks.
        if (this.classList.contains("animating")) return;
        this.classList.add("animating");

        // Save the original firefly src (which includes a unique query parameter)
        const originalSrc = this.src;

        // Phase 1: Shrink the firefly
        this.style.transform = "scale(0.5)";

        // Phase 2: Swap image to explosion GIF with a unique query parameter
        this.src = "assets/explosion.gif?" + new Date().getTime();

        // Phase 3: After 300ms, hide the firefly
        setTimeout(() => {
            this.style.visibility = "hidden";

            // Phase 4: After another 700ms, revert to the original firefly GIF,
            // apply a new random query parameter so it animates independently,
            // reset the scale, make it visible, and allow further clicks.
            setTimeout(() => {
                const baseFireflySrc = originalSrc.split('?')[0];
                const newRandom = Math.floor(Math.random() * 100000);
                this.src = `${baseFireflySrc}?${newRandom}`;
                this.style.transform = "scale(1)";
                this.style.visibility = "visible";
                this.classList.remove("animating");
            }, 700);

        }, 300);
    });
});
