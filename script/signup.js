/** @format */

import { createClient } from 'https://cdn.skypack.dev/@supabase/supabase-js';


// This is the google client key, and we use SB for the API.
const supabaseUrl = "https://ufszhsluvumwklqoxtax.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVmc3poc2x1dnVtd2tscW94dGF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxNTY3NjAsImV4cCI6MjAyNDczMjc2MH0.is0LfBvWwr63vwRYyNPeT-2JVtGn0wtCTR__0CJqBAs";
const supabase = createClient(supabaseUrl, supabaseKey);


const googleSignIn = document.getElementsByName("GoogleSignUp")[0]
if (googleSignIn) {
    googleSignIn.addEventListener("click", () => {
        supabase.auth.signInWithOAuth({
            provider: "google",
        });
    });
}

// Goes to signup if profile has not been added
document.addEventListener('DOMContentLoaded', () => {
    const profileLink = document.getElementById('profileLink');
    profileLink.addEventListener('click', function (event) {
        event.preventDefault();
        if (!localStorage.getItem('username')) {
            window.location.href = '/html/signup.html';
        } else {
            window.location.href = this.getAttribute('href');
        }
    });
});


//Basic User Input
async function submitForm() {
    try {
        const first_name = document.getElementById("firstName").value;
        const last_name = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const phone_number = document.getElementById("phoneNumber").value;
        const password = document.getElementById("password").value;

        const userData = {
            fname: first_name,
            lname: last_name,
            email: email,
            number: phone_number,
            password: password
        };

        const response = await fetch('http://localhost:9999/adduser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error('User add unsuccessful');
        }

    } catch (error) {
        console.error("Error submitting form:", error);
        alert("Error submitting form. Check console for details.");
    }
}


//If user is student

async function submitForm2() {
    try {
        const business_email = document.getElementById("businessEmail").value;
        const business_description = document.getElementById("businessDescription").value;
        const business_name = document.getElementById("businessName").value;
        const business_phone_number = document.getElementById("businessPhoneNumber").value;
        const service_type = document.getElementById("serviceType").value;

        const { data, error } = await supabase.from("businesses")
            .insert({
                business_email_db: business_email,
                business_name_db: business_name,
                business_description_db: business_description,
                service_type_db: service_type,
                business_phone_number_db: business_phone_number,
            });
    } catch (error) {
        console.error("Error saving data to Supabase:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}



const studentCheckbox = document.getElementById("studentCheckbox")
const studentDiv = document.getElementById("studentDiv")
const sign_up_button = document.getElementById("SignUpButton");
const container = document.getElementById("container")

studentDiv.style.display = "none";
sign_up_button.style.marginTop = "-460px";
container.style.height = "740px";

studentCheckbox.addEventListener("change", () => {
    if (studentCheckbox.checked) {
        studentDiv.style.display = "block";
        sign_up_button.style.marginTop = "0px";
        container.style.height = "1185px";

    } else {
        studentDiv.style.display = "none";
        sign_up_button.style.marginTop = "-460px";
        container.style.height = "740px";
    }

})



window.submitForm = submitForm;
window.submitForm2 = submitForm2;


// const form = document.getElementById("myForm");
// form.addEventListener("submit", (event) => {
// 	event.preventDefault(); // Prevent the form from submitting normally
// 	submitForm();
// });