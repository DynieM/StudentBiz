document.addEventListener("DOMContentLoaded", function() {
  
  document.getElementById("openInbox").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("inbox-container").style.display = "block";
  });

  document.getElementById("closeInbox").addEventListener("click", function() {
    document.getElementById("inbox-container").style.display = "none";
  });
});