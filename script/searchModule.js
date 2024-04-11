/** @format */

import { createClient } from 'https://cdn.skypack.dev/@supabase/supabase-js';

const supabaseUrl = "https://ufszhsluvumwklqoxtax.supabase.co";
const SB =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVmc3poc2x1dnVtd2tscW94dGF4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwOTE1Njc2MCwiZXhwIjoyMDI0NzMyNzYwfQ.4sAKoiqIDkMaRcy9RKIKTtlBSAn2Y3PXxM8dh_LBMqQ";
const supabase = createClient(supabaseUrl, SB);

// Function to search businesses based on a keyword
async function searchBusinesses(keyword) {
    console.log(keyword);
   const { data, error } = await supabase
        .from('businesses')
        .select('*')
        .ilike('business_name_db', `%${keyword}%`) // Search for business name
        .or(`business_description_db.ilike.%${keyword}%`) // Also searches in description
        .or(`business_email_db.ilike.%${keyword}%`)
        .or(`service_type_db.ilike.%${keyword}%`);

    if (error) {
        console.error('Error searching businesses:', error);
        return [];
    }

    return data;
}

// Function to perform the search and updat UI
async function performSearch() {
    const searchTerm = document.getElementById('searchBar').value;
    const results = await searchBusinesses(searchTerm);
    const resultsContainer = document.getElementById('searchResults');

    resultsContainer.innerHTML = ''; // Clear previous results
    results.forEach(business => {
        const div = document.createElement('div');
        div.textContent = business.business_name_db;
        resultsContainer.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');
    if (searchButton) {
        searchButton.addEventListener('click', performSearch);
    }
});
