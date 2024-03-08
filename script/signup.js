/** @format */

const googleSignIn = document.getElementsByName("GoogleSignUp")[0]
googleSignIn.addEventListener("click", () => {
    supabase.auth.signInWithOAuth({
        provider: "google",
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

        const response = await fetch('/adduser', {
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



const is_Student = document.getElementById("student")
const content = document.getElementById("studentInfo")
const sign_up_button = document.getElementById("SignUpButton");
const container = document.getElementById("container")

content.style.visibility = "hidden"
sign_up_button.style.marginTop = "-460px";
container.style.height = "740px";

is_Student.addEventListener("change", () => {
    if (is_Student.checked) {
        content.style.visibility = "visible"
        sign_up_button.style.marginTop = "0px";
        container.style.height = "1185px";

    } else {
        content.style.visibility = "hidden"
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