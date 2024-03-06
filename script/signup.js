/** @format */


import { createClient } from 'https://cdn.skypack.dev/@supabase/supabase-js';

const supabaseUrl = "https://ufszhsluvumwklqoxtax.supabase.co";

// const supabaseKey =
// 	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVmc3poc2x1dnVtd2tscW94dGF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxNTY3NjAsImV4cCI6MjAyNDczMjc2MH0.is0LfBvWwr63vwRYyNPeT-2JVtGn0wtCTR__0CJqBAs";
// for Google Auth
// const supaClient = createClient(supabaseUrl, supabaseKey);


const SB = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVmc3poc2x1dnVtd2tscW94dGF4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwOTE1Njc2MCwiZXhwIjoyMDI0NzMyNzYwfQ.4sAKoiqIDkMaRcy9RKIKTtlBSAn2Y3PXxM8dh_LBMqQ";

// for POST to DB
const supabase = createClient(supabaseUrl, SB);

const googleSignIn = document.getElementById("GoogleSignUp")

googleSignIn.addEventListener("click", () => {
    supabase.auth.signInWithOAuth({
        provider: "google",
    });
});


//Basic User Input
async function submitForm() {
    try {
        const first_name = document.getElementById("firstName").value  
        const last_name = document.getElementById("lastName").value
        const id = uuid.v4();
        const email = document.getElementById("email").value
        const phone_number = document.getElementById("phoneNumber").value
        const password = document.getElementById("password").value


        const { data, error } = await supabase
					.from("users")
					.insert({
						id: id,
						first_name_db: first_name,
						last_name_db: last_name,
                        email_db: email,
                        phone_number_db: phone_number,
                        password_db: password,
                        
					});

    }

    catch (error)
    {
        console.error("Error saving data to Supabase:", error);
        res.status(500).json({ error: "Internal server error" });
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
window.submitForm = submitForm2;


// const form = document.getElementById("myForm");
// form.addEventListener("submit", (event) => {
// 	event.preventDefault(); // Prevent the form from submitting normally
// 	submitForm();
// });