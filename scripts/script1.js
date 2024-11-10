// script.js

// Function to handle the search form submission
function searchTrucks(event) {
    event.preventDefault(); // Prevent the default form submission

    // You can gather the form data here if needed
    const origin = document.getElementById('origin').value;
    const destination = document.getElementById('destination').value;
    const cargoType = document.getElementById('cargo-type').value;
    const weight = document.getElementById('weight').value;

    // Construct a query string to send data to index2.html if needed
    const queryString = `?origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&cargoType=${encodeURIComponent(cargoType)}&weight=${encodeURIComponent(weight)}`;

    // Redirect to index2.html with the query parameters
    window.location.href = "/html/index2.html" + queryString;
}

// You can add other functions or event listeners here as needed

