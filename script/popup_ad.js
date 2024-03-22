document.addEventListener("DOMContentLoaded", function() {
  
  document.getElementById("openPopUpAd").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("popUpAd-container").style.display = "block";
  });

  document.getElementById("closePopUpAd").addEventListener("click", function() {
    document.getElementById("popUpAd-container").style.display = "none";
  });
});