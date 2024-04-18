/** @format */
import { createClient } from 'https://cdn.skypack.dev/@supabase/supabase-js';

const supabaseUrl = "https://ufszhsluvumwklqoxtax.supabase.co";
const SB = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVmc3poc2x1dnVtd2tscW94dGF4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwOTE1Njc2MCwiZXhwIjoyMDI0NzMyNzYwfQ.4sAKoiqIDkMaRcy9RKIKTtlBSAn2Y3PXxM8dh_LBMqQ";
const supabase = createClient(supabaseUrl, SB);

document.addEventListener('DOMContentLoaded', function () {
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const emailError = document.getElementById('emailError');
  const phoneError = document.getElementById('phoneError');

  function validateInput(inputElement, errorElement, errorMessage) {
    if (!inputElement.checkValidity()) {
      errorElement.textContent = errorMessage;
    } else {
      errorElement.textContent = '';
    }
  }

  emailInput.addEventListener('input', function () {
    validateInput(emailInput, emailError, 'Invalid email format. Please use a valid email address.');
  });

  phoneInput.addEventListener('input', function () {
    validateInput(phoneInput, phoneError, 'Invalid phone number format. Please use a valid phone number.');
  });
});

  document.getElementById("addBusiness").addEventListener("click", async function (event) {
    event.preventDefault();

    if (!emailInput.checkValidity() || !phoneInput.checkValidity()) {
      alert("Please check your email and phone number for errors. Email should be written as johndoe@email.com and number should only include numbers such as 1235467777");
      return;
    }

    const business_description = document.getElementById("description").value;
    const business_name = document.getElementById("businessName").value;
    const service_type = document.getElementById("serviceType").value;

    try {
      const { data, error } = await supabase.from("businesses").insert({
        business_email_db: emailInput.value,
        business_name_db: business_name,
        business_description_db: business_description,
        service_type_db: service_type,
        business_phone_number_db: phoneInput.value,
      });

      if (error) throw new Error(error.message);

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
