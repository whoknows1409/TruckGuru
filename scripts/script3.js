// script3.js

function calculateFare() {
    // Get input values from the form
    const pickup = document.getElementById('pickup').value;
    const dropoff = document.getElementById('dropoff').value;
    const loadType = document.getElementById('loadType').value;
    const distance = document.getElementById('distance').value;

    // Perform any fare calculation logic here (if needed)
    // For example, you could calculate a fare based on distance and load type
    // This is a placeholder for your calculation logic

    // Redirect to index4.html with the form data as query parameters
    window.location.href = `/html/index4.html?pickup=${encodeURIComponent(pickup)}&dropoff=${encodeURIComponent(dropoff)}&loadType=${encodeURIComponent(loadType)}&distance=${encodeURIComponent(distance)}`;
}