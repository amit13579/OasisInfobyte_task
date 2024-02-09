// main.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Email validation
    if (!email) {
        alert('Email is required');
        return;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Email is not valid');
        return;
    }

    // Password validation
    if (!password) {
        alert('Password is required');
        return;
    } else if (password.length < 8) {
        alert('Password must be at least 8 characters long');
        return;
    }

    // Send these values to your backend
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    }).then(response => {
        if (response.ok) {
            window.location.href = "success.html"; // Redirect to success page
        } else {
            // If the server responds with an error status, try to get the error message from the response body
            return response.json().then(body => {
                throw new Error(body.error || 'An error occurred');
            });
        }
    }).catch(error => {
        // Log the error to the console for debugging
        console.error('Error:', error);
        // Show an alert with the error message
        alert(error.message);
    });
});
