/** @format */
import { createClient } from 'https://cdn.skypack.dev/@supabase/supabase-js';

const supabaseUrl = "https://ufszhsluvumwklqoxtax.supabase.co";
const SB = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVmc3poc2x1dnVtd2tscW94dGF4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwOTE1Njc2MCwiZXhwIjoyMDI0NzMyNzYwfQ.4sAKoiqIDkMaRcy9RKIKTtlBSAn2Y3PXxM8dh_LBMqQ";
const supabase = createClient(supabaseUrl, SB);

document.addEventListener('DOMContentLoaded', function () {
    const addBusinessBtn = document.getElementById("addBusiness");
    
    addBusinessBtn.addEventListener("click", async function (event) {
        event.preventDefault(); // prevents the form from submitting

        const emailInput = document.getElementById("email");
        const phoneInput = document.getElementById("phone");
        const business_description = document.getElementById("description").value;
        const business_name = document.getElementById("businessName").value;
        const service_type = document.getElementById("serviceType").value;

        // Validation
        let errors = [];
        if (!emailInput.validity.valid) {
            errors.push("Invalid email format: " + emailInput.validationMessage);
        }
        if (!phoneInput.validity.valid) {
            errors.push("Invalid phone number format: " + phoneInput.validationMessage);
        }
        if (!document.getElementById("description").validity.valid) {
            errors.push("Business description is required.");
        }
        if (!document.getElementById("businessName").validity.valid) {
            errors.push("Business name is required.");
        }
        if (!document.getElementById("serviceType").validity.valid) {
            errors.push("Service type is required.");
        }

        // Handle errors
        if (errors.length > 0) {
            alert("Please correct the errors before submitting:\n" + errors.join("\n"));
            console.error("Form submission errors:", errors);
            return;
        }

        // Proceed with form submission logic if no errors
        try {
            const { data, error } = await supabase.from("businesses").insert({
                business_email_db: emailInput.value,
                business_name_db: business_name,
                business_description_db: business_description,
                service_type_db: service_type,
                business_phone_number_db: phoneInput.value,
            });

            if (error) {
                throw new Error(error.message);
            }
            alert("Business information saved successfully.");
            const redirectUrl = `https://students.gaim.ucf.edu/~jo971435/html/createdBizPage.html?email=${encodeURIComponent(emailInput.value)}&name=${encodeURIComponent(business_name)}&description=${encodeURIComponent(business_description)}&phone=${encodeURIComponent(phoneInput.value)}`;
      window.location.href = redirectUrl;
        } catch (error) {
            console.error("Error saving data to Supabase:", error);
            alert("Error saving data to Supabase. Please check console for details.");
        }
    });
});

export { createClient };
