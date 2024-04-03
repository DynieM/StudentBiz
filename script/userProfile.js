/** @format */

window.onload = function () {
    let firstName = sessionStorage.getItem("firstName");
    let email = sessionStorage.getItem("email");
    let phone = sessionStorage.getItem("phone");
   

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
