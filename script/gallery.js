document.addEventListener('DOMContentLoaded', () => {
    const images = ["image1.png", "image2.png"];
    let currentImageIndex = 0;
    const currentImage = document.getElementById("currentImage");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    function changeImage(direction) {

         currentImage.style.opacity = 0;

         setTimeout(() => {
        currentImageIndex += direction;
        if (currentImageIndex < 0) {
            currentImageIndex = images.length - 1;
        } else if (currentImageIndex >= images.length) {
            currentImageIndex = 0;
        }
        currentImage.src = "../assets/pictures/" + images[currentImageIndex];

        currentImage.style.opacity = 1;
    }, 500);
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener("click", () => changeImage(-1));
        nextBtn.addEventListener("click", () => changeImage(1));
    }
});