// script2.js

// Function to initialize the truck selection dropdown
function initTruckSelection() {
    const dropdown = document.querySelector('.dropdown');
    const dropdownBtn = dropdown.querySelector('.dropdown-btn');
    const dropdownContent = dropdown.querySelector('.dropdown-content');

    // Toggle dropdown visibility on button click
    dropdownBtn.addEventListener('click', () => {
        dropdownContent.classList.toggle('show');
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener('click', (event) => {
        if (!event.target.matches('.dropdown-btn')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
    });
}

// Function to handle truck selection
function selectTruck(truckType) {
    // Redirect to index3.html with the selected truck type as a query parameter
    window.location.href = `/html/index3.html?truckType=${encodeURIComponent(truckType)}`;
}

// Initialize the dropdown on page load
document.addEventListener('DOMContentLoaded', initTruckSelection);