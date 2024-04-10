// Array of images

const images = ["image1.png", "image2.png"];

let currentImageIndex = 0;
const currentImage = document.getElementById("currentImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Function to change image
function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    currentImage.src = "../assets/" + images[currentImageIndex];
}

// Event listeners for arrow clicks
prevBtn.addEventListener("click", () => {
    console.log("Click");
    changeImage(-1);
});

nextBtn.addEventListener("click", () => {
    console.log("Click");
    changeImage(1);
});
