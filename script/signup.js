/** @format */

import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ufszhsluvumwklqoxtax.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const googleSignIn = document.getElementById("GoogleSignUp")

googleSignIn.addEventListener("click", () => {
    supabase.auth.signInWithOAuth({
        provider: "google",
    });
});