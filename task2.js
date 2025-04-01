document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let valid = true;

    // Validate email
    const email = document.getElementById('email').value;
    if (email.trim() === '') {
        document.getElementById('emailError').textContent = 'Email is required.';
        valid = false;
    } else if (!email.includes('@')) {
        document.getElementById('emailError').textContent = 'Email is invalid.';
        valid = false;
    } else {
        document.getElementById('emailError').textContent = '';
    }

    // Validate password
    const password = document.getElementById('password').value;
    if (password.trim() === '') {
        document.getElementById('passwordError').textContent = 'Password is required.';
        valid = false;
    } else if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
        valid = false;
    } else {
        document.getElementById('passwordError').textContent = '';
    }

    // Validate username
    const username = document.getElementById('username').value;
    if (username.trim() === '') {
        document.getElementById('usernameError').textContent = 'Username is required.';
        valid = false;
    } else if (username.length < 3) {
        document.getElementById('usernameError').textContent = 'Username must be at least 3 characters.';
        valid = false;
    } else {
        document.getElementById('usernameError').textContent = '';
    }

    // Validate age
    const age = document.getElementById('age').value;
    if (age.trim() === '') {
        document.getElementById('ageError').textContent = 'Age is required.';
        valid = false;
    } else if (isNaN(age) || age < 18) {
        document.getElementById('ageError').textContent = 'You must be at least 18 years old.';
        valid = false;
    } else {
        document.getElementById('ageError').textContent = '';
    }

    // Final Submission Check
    if (valid) {
        alert('Form submitted successfully!');
    }
});
