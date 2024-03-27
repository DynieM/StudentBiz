/** @format */

window.onload = function () {
	const firstName = localStorage.getItem("firstName");
    const email = localStorage.getItem("email");
    const phone = localStorage.getItem("phone")
	document.querySelector(".username-text").textContent = firstName;
    document.querySelector(".emailinfo").textContent = email;
    document.querySelector(".phoneinfo").textContent = phone;
};
