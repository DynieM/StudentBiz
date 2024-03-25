/** @format */

import { createClient } from 'https://cdn.skypack.dev/@supabase/supabase-js';

// This is the Supabase URL and key.
const supabaseUrl = "https://ufszhsluvumwklqoxtax.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVmc3poc2x1dnVtd2tscW94dGF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxNTY3NjAsImV4cCI6MjAyNDczMjc2MH0.is0LfBvWwr63vwRYyNPeT - 2JVtGn0wtCTR__0CJqBAs";
const supabase = createClient(supabaseUrl, supabaseKey);

document.getElementById("addBusiness").addEventListener("click", async function (event) {
    // Collect input values
    const business_email = document.getElementById("email").value;
    const business_description = document.getElementById("description").value;
    const business_name = document.getElementById("businessName").value;
    const business_phone_number = document.getElementById("phone").value;
    const service_type = document.querySelector('[list="serviceTypeList"]').value;

    // Validate inputs before attempting to insert
    if (!business_email || !business_description || !business_name || !business_phone_number || !service_type) {
        alert("Please fill in all the fields.");
        return; // Stop the function from proceeding further
    }

    // Proceed with the data submission to Supabase
    try {
        const { data, error } = await supabase.from("businesses")
            .insert({
                business_email_db: business_email,
                business_name_db: business_name,
                business_description_db: business_description,
                service_type_db: service_type,
                business_phone_number_db: business_phone_number,
            });

        if (error) {
            throw new Error(`Error saving data: ${error.message}`);
        } else {
            console.log("Data saved successfully:", data);
            alert("Business information saved successfully. Welcome aboard, " + business_name + "!");
        }
    } catch (error) {
        console.error(error);
        alert(error.message); // Now using the custom error message
    }
});
