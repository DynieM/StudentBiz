/** @format */

import { createClient } from 'https://cdn.skypack.dev/@supabase/supabase-js';

const supabaseUrl = "https://ufszhsluvumwklqoxtax.supabase.co";
const SB =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVmc3poc2x1dnVtd2tscW94dGF4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwOTE1Njc2MCwiZXhwIjoyMDI0NzMyNzYwfQ.4sAKoiqIDkMaRcy9RKIKTtlBSAn2Y3PXxM8dh_LBMqQ";
const supabase = createClient(supabaseUrl, SB);

async function submitForm2() {
    try {
        const business_email = document.getElementById("businessEmail").value;
        const business_description = document.getElementById("businessDescription").value;
        const business_name = document.getElementById("businessName").value;
        const business_phone_number = document.getElementById("businessPhoneNumber").value;
        // const service_type = document.getElementById("serviceType").value;

        const { data, error } = await supabase.from("businesses")
            .insert({
					business_email_db: business_email,
					business_name_db: business_name,
					business_description_db: business_description,
					// service_type_db: service_type,
					business_phone_number_db: business_phone_number,
				});
        if (error) {
            throw new Error('Error saving data to Supabase:', error.message);
        } else {
            console.log("Data saved successfully:", data);
            alert("Business information saved successfully.");
        }
    } catch (error) {
        console.error(error);
        alert("Error saving data to Supabase. Please check console for details.");
    }
}

window.submitForm2 = submitForm2;
