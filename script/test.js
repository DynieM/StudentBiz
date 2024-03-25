/** @format */

document.addEventListener("DOMContentLoaded", function () {
	const supabaseUrl = "https://ufszhsluvumwklqoxtax.supabase.co";
	const supabaseKey =
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVmc3poc2x1dnVtd2tscW94dGF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxNTY3NjAsImV4cCI6MjAyNDczMjc2MH0.is0LfBvWwr63vwRYyNPeT-2JVtGn0wtCTR__0CJqBAs";
	const SB = supabase.createClient(supabaseUrl, supabaseKey);

	const searchInput = document.getElementById("searchInput");
	const searchResultsContainer = document.getElementById("searchResults");

	// Function to handle search input
	searchInput.addEventListener("input", async function () {
		const searchTerm = searchInput.value.trim();

		if (searchTerm !== "") {
			try {
				// Query the Supabase table for matching records using full text search
				const { data, error } = await SB.from("businesses")
					.select()
					.textSearch("business_name_db", searchTerm);

				if (error) {
					throw error;
				}

				// Display search results
				displaySearchResults(data);
			} catch (error) {
				console.error("Error fetching data:", error.message);
			}
		} else {
			clearSearchResults();
		}
	});

	// Function to display search results
	function displaySearchResults(results) {
		searchResultsContainer.innerHTML = ""; // Clear previous results

		if (results.length === 0) {
			searchResultsContainer.textContent = "No results found.";
		} else {
			const ul = document.createElement("ul");
			ul.style.listStyleType = "none";
			results.forEach((result) => {
				const li = document.createElement("li");
				li.textContent = result.business_name_db; // Replace 'column_name' with the actual column you want to display
				ul.appendChild(li);
			});
			searchResultsContainer.appendChild(ul);
		}
	}

	// Function to clear search results
	function clearSearchResults() {
		searchResultsContainer.innerHTML = ""; // Clear search results
	}
});
