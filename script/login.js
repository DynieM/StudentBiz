
function validateForm(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === '' || password === '') {
        alert('Please fill in all fields.');
        return false;
    }

    window.location.href = "../html/userprofile.html";
    return false;
}
