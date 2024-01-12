
function login() {
    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

    alert(`Logged in as ${loginUsername}`);
}

// Function to simulate signup (frontend only)
function signup() {
    const signupUsername = document.getElementById('signupUsername').value;
    const signupPassword = document.getElementById('signupPassword').value;

    alert(`Signed up as ${signupUsername}`);
}

// Toggle between Login and Signup forms
function toggleForm() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    loginForm.style.display = (loginForm.style.display === 'none') ? 'block' : 'none';
    signupForm.style.display = (signupForm.style.display === 'none') ? 'block' : 'none';
}