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

    console.log('Email:', email);
    console.log('Password:', password);

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
            throw new Error('Error: ' + response.statusText);
        }
    }).catch(error => {
        console.error('Error:', error);
    });
});
