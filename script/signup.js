document.getElementById("student").addEventListener("change", function() {
  var content = document.getElementById("student");
  if (this.checked) {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
});