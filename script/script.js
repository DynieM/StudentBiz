// script.js

document.addEventListener("DOMContentLoaded", function () {
  // Current index of the displayed image
  let currentIndex = 0;

  // Array of image sources
  const imageSources = [
    "../assets/Icons/Ad_Homepage.png",
    "../assets/Icons/Ad_Homepage2.png"
  ];

  // Get the arrow elements
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');

  // Get the image element
  const adImage = document.getElementById('adImage');

  // Function to change the displayed image
  function changeImage(direction) {
    currentIndex += direction;

    // Check if index is out of bounds
    if (currentIndex < 0) {
      currentIndex = imageSources.length - 1;
    } else if (currentIndex >= imageSources.length) {
      currentIndex = 0;
    }

    // Update the image source
    adImage.src = imageSources[currentIndex];
  }

  // Add click event listeners to the arrow images
  leftArrow.addEventListener('click', function () {
    changeImage(-1);
  });

  rightArrow.addEventListener('click', function () {
    changeImage(1);
  });
});