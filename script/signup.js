/** @format */

// import { createClient } from "@supabase/supabase-js";

import { createClient } from 'https://cdn.skypack.dev/@supabase/supabase-js';

const supabaseUrl = "https://ufszhsluvumwklqoxtax.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVmc3poc2x1dnVtd2tscW94dGF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxNTY3NjAsImV4cCI6MjAyNDczMjc2MH0.is0LfBvWwr63vwRYyNPeT-2JVtGn0wtCTR__0CJqBAs";

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

async function submitForm() {
    try {
        const first_name = document.getElementById("firstName").value  
        const last_name = document.getElementById("lastName").value

        const { data, error } = await supabase
            .from('test')
            .insert({ first_name_db: "john", last_name_db: "doe" });
            
    }

    catch (error)
    {
        console.error("Error saving data to Supabase:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

window.submitForm = submitForm;
const form = document.getElementById("myForm");
form.addEventListener("submit", (event) => {
	event.preventDefault(); // Prevent the form from submitting normally
	submitForm();
});