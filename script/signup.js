
import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js";
const supabaseUrl = "https://ufszhsluvumwklqoxtax.supabase.co";
const SB =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVmc3poc2x1dnVtd2tscW94dGF4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwOTE1Njc2MCwiZXhwIjoyMDI0NzMyNzYwfQ.4sAKoiqIDkMaRcy9RKIKTtlBSAn2Y3PXxM8dh_LBMqQ";

// for POST to DB
const supabase = createClient(supabaseUrl, SB);
const googleSignIn = document.getElementById("GoogleSignUp");
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
        console.log("first_name:", first_name);
				console.log("email:", email);
        
		const { data, error } = await supabase.from("users").insert({
			first_name_db: first_name,
			last_name_db: last_name,
			email_db: email,
			phone_number_db: phone_number,
            password_db: password,
        });
        localStorage.setItem("firstName", first_name);
        localStorage.setItem("email", email);
        localStorage.setItem("phone", phone_number);
	} catch (error) {
		console.error("Error saving data to Supabase:", error);
		alert("An error occurred while saving your data. Please try again.")
    }
    window.location.href = "../html/userprofile.html";
}
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
window.submitForm = submitForm;