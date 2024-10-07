// JavaScript functions to handle form switching and actions
function switchToRegistration() {
    document.getElementById('loginForm').classList.remove('active-form');
    document.getElementById('registrationForm').classList.add('active-form');
}

function switchToLogin() {
    document.getElementById('registrationForm').classList.remove('active-form');
    document.getElementById('loginForm').classList.add('active-form');
}

function handleLogin() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (username && password) {
        // Redirect to dashboard or home page after successful login
        window.location.href = 'dashboard.html'; // Replace with your dashboard page
    } else {
        alert('Please enter your username and password.');
    }
}

function handleRegistration() {
    const username = document.getElementById('regUsername').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;

    if (username && email && password) {
        switchToLogin(); // Switch to login form after successful registration
    } else {
        alert('Please fill in all the fields.');
    }
}
