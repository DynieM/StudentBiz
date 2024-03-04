window.onload = function() {
  document.getElementById('studentCheckbox').addEventListener('change', function() {
    var studentDiv = document.getElementById('studentDiv');
    if (this.checked) {
      studentDiv.style.display = 'block';
    } else {
      studentDiv.style.display = 'none';
    }
  });
};