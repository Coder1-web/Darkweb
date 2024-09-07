document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#ff66b2'; 
    });
    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = '#ff0077';
        const maxAttempts = 7;
let attempts = 0;

function validatePassword() {
    const password = document.getElementById('password').value;
    const correctPassword = 'darkstuff3022';  // Set the actual password here

    if (password === correctPassword) {
        window.location.href = 'nextpage.html';  // Redirect to nextpage.html
    } else {
        attempts++;
        if (attempts >= maxAttempts) {
            alert('Too many incorrect attempts. You are being redirected.');
            window.location.href = 'index.html';  // Redirect to home page after too many failed attempts
        } else {
            alert('Incorrect password. Please try again.');
            document.getElementById('password').value = '';  // Clear the input field
        }
    }
}

    });
});
