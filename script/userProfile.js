/** @format */

window.onload = function () {
    let storedFirstName = sessionStorage.getItem("firstName");
    let storedEmail = sessionStorage.getItem("email");
    let storedPhone = sessionStorage.getItem("phone");

    const usernameTextElement = document.querySelector(".username-text");
    const emailInfoElement = document.querySelector(".emailinfo");
    const phoneInfoElement = document.querySelector(".phoneinfo");

    if (!storedFirstName && usernameTextElement) {
        storedFirstName = usernameTextElement.textContent;
        sessionStorage.setItem("firstName", storedFirstName);
    }

    if (!storedEmail && emailInfoElement) {
        storedEmail = emailInfoElement.textContent;
        sessionStorage.setItem("email", storedEmail);
    }

    if (!storedPhone && phoneInfoElement) {
        storedPhone = phoneInfoElement.textContent;
        sessionStorage.setItem("phone", storedPhone);
    }

    if (usernameTextElement) usernameTextElement.textContent = storedFirstName;
    if (emailInfoElement) emailInfoElement.textContent = storedEmail;
    if (phoneInfoElement) phoneInfoElement.textContent = storedPhone;
};
