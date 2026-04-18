// Select form
document.getElementById("contactForm").addEventListener("submit", function(e) {

    // Prevent default form submission
    e.preventDefault();

    // Get values
    let name = document.querySelector("input[name='name']").value;
    let email = document.querySelector("input[name='email']").value;
    let message = document.querySelector("textarea[name='message']").value;

    // Basic validation
    if (name === "" || email === "" || message === "") {
        alert("Please fill all fields!");
        return;
    }

    // Success message
    alert("Form submitted successfully!");

});