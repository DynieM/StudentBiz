/** @format */
import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js";
const supabaseUrl = "https://ufszhsluvumwklqoxtax.supabase.co";
const SB =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVmc3poc2x1dnVtd2tscW94dGF4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwOTE1Njc2MCwiZXhwIjoyMDI0NzMyNzYwfQ.4sAKoiqIDkMaRcy9RKIKTtlBSAn2Y3PXxM8dh_LBMqQ";

// for POST to DB
const supabase = createClient(supabaseUrl, SB);
export async function validateForm() {
	try {
		const email = document.getElementById("email").value;
		const password = document.getElementById("password").value;

		if (email === "" || password === "") {
			alert("Please fill in all fields.");

			return false;
		}

		const { data, error } = await supabase
			.from("users")
			.select("first_name_db, phone_number_db, password_db")
			.eq("email_db", email)
			.single();

		if (error) {
			alert("No account found with this email. Please sign up.");
			return;
		}

if (data.password_db !== password) {
    alert("Invalid password. Please try again.");
    return;
}
		localStorage.setItem("firstName", data.first_name_db);
        localStorage.setItem("phone", data.phone_number_db);
        localStorage.setItem("email", email);


	} catch (error) {
		console.error("Error saving data to Supabase:", error);
		alert("An error occurred while saving your data. Please try again.");
	}
	window.location.href = "../html/userprofile.html";
}

