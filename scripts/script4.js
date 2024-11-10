// script4.js

function handleSubmit(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get input values from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    // Redirect to index5.html with the form data as query parameters
    window.location.href = `/html/index5.html?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&mobile=${encodeURIComponent(mobile)}`;
}