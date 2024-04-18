/** @format */

import { createClient } from 'https://cdn.skypack.dev/@supabase/supabase-js';

const supabaseUrl = "https://ufszhsluvumwklqoxtax.supabase.co";
const SB =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVmc3poc2x1dnVtd2tscW94dGF4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwOTE1Njc2MCwiZXhwIjoyMDI0NzMyNzYwfQ.4sAKoiqIDkMaRcy9RKIKTtlBSAn2Y3PXxM8dh_LBMqQ";
const supabase = createClient(supabaseUrl, SB);

document.getElementById("addBusiness").addEventListener("click", async function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Collect input values
    const business_email = document.getElementById("email");
    const business_description = document.getElementById("description").value;
    const business_name = document.getElementById("businessName").value;
    const business_phone_number = document.getElementById("phone");
    const service_type = document.getElementById("serviceType").value;

    // Check if the inputs are valid
    if (!business_email.checkValidity() || !business_phone_number.checkValidity()) {
        alert("Please check your email and phone number for errors.");
        // Display specific error messages
        document.getElementById("emailError").textContent = business_email.validationMessage;
        document.getElementById("phoneError").textContent = business_phone_number.validationMessage;
        return; // Stop the function if there are errors
    }

    // Optional: Collect all inputs into an array for testing
    const formData = [business_email.value, business_description, business_name, business_phone_number.value, service_type];
    console.log("Form Data Collected:", formData);

   
    document.addEventListener('DOMContentLoaded', function () {
      const emailInput = document.getElementById('email');
      const phoneInput = document.getElementById('phone');
      const emailError = document.getElementById('emailError');
      const phoneError = document.getElementById('phoneError');

      emailInput.addEventListener('input', function () {
        if (emailInput.validity.patternMismatch) {
          emailError.textContent = 'Invalid email format.';
        } else {
          emailError.textContent = '';
        }
      });

      phoneInput.addEventListener('input', function () {
        if (phoneInput.validity.patternMismatch) {
          phoneError.textContent = 'Invalid phone number format.';
        } else {
          phoneError.textContent = '';
        }
      });
    });
  
    try {
        const { data, error } = await supabase.from("businesses")
            .insert({
                business_email_db: business_email.value,
                business_name_db: business_name,
                business_description_db: business_description,
                service_type_db: service_type,
                business_phone_number_db: business_phone_number.value,
            });

        if (error) {
            throw new Error('Error saving data to Supabase:', error.message);
        } else {
            console.log("Data saved successfully:", data);
            alert("Business information saved successfully.");
            
            // Construct the URL with query parameters
            const redirectUrl = `https://students.gaim.ucf.edu/~jo971435/html/createdBizPage.html?email=${encodeURIComponent(business_email.value)}&name=${encodeURIComponent(business_name)}&description=${encodeURIComponent(business_description)}&phone=${encodeURIComponent(business_phone_number.value)}`;
            window.location.href = redirectUrl;
        }
    } catch (error) {
        console.error(error);
        alert("Error saving data to Supabase. Please check console for details.");
    }
});

export {createClient};