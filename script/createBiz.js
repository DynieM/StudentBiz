/** @format */

document.getElementById("addBusiness").addEventListener("click", async function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Collect input values
    const business_email = document.getElementById("email").value;
    const business_description = document.getElementById("description").value;
    const business_name = document.getElementById("businessName").value;
    const business_phone_number = document.getElementById("phone").value;
    const service_type = document.getElementById("serviceType").value; // Ensure this ID matches the HTML

    // Optional: Collect all inputs into an array for testing
    const formData = [business_email, business_description, business_name, business_phone_number, service_type];
    console.log("Form Data Collected:", formData);

    // Your existing submission logic here
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
            throw new Error('Error saving data to Supabase:', error.message);
        } else {
            console.log("Data saved successfully:", data);
            alert("Business information saved successfully.");
        }
    } catch (error) {
        console.error(error);
        alert("Error saving data to Supabase. Please check console for details.");
    }
});
