/** @format */

window.onload = function () {
    let firstName = localStorage.getItem("firstName");
    let email = localStorage.getItem("email");
    let phone = localStorage.getItem("phone");
    // Displays user profile info
    if (firstName == null || firstName == "") {
        let firstName = document.querySelector(".username-text").textContent;
        localStorage.setItem("firstName", firstName);
    }
    if (email == null || email == "") {
        let email = document.querySelector(".emailinfo").textContent;
        localStorage.setItem("email", email);
    }
    if (phone == null || phone == "") {
        let phone = document.querySelector(".phoneinfo").textContent;
        localStorage.setItem("phone", phone);
    }


    document.querySelector(".username-text").textContent = firstName;
    document.querySelector(".emailinfo").textContent = email;
    document.querySelector(".phoneinfo").textContent = phone;
};
