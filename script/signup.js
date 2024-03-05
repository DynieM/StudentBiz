/** @format */

// import { createClient } from "@supabase/supabase-js";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ufszhsluvumwklqoxtax.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVmc3poc2x1dnVtd2tscW94dGF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxNTY3NjAsImV4cCI6MjAyNDczMjc2MH0.is0LfBvWwr63vwRYyNPeT-2JVtGn0wtCTR__0CJqBAs";

const supaClient = createClient(supabaseUrl, supabaseKey);

const googleSignIn = document.getElementById("GoogleSignUp")

googleSignIn.addEventListener("click", () => {
    supaClient.auth.signInWithOAuth({
        provider: "google",
    });
});