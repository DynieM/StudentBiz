window.onload = function() {
  document.getElementById('student').addEventListener('change', function() {
    var studentDiv = document.querySelector('.student');
    if (this.checked) {
      studentDiv.style.display = 'block';
    } else {
      studentDiv.style.display = 'none';
    }
  });
};