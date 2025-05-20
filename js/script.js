document.getElementById('authForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const role = document.getElementById('role').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');

    let validPassword;

    // Check password based on role using switch case
    switch (role) {
        case 'Department Head':
            validPassword = "SiEsD3ptH34d";
            break;
        case 'Faculty':
            validPassword = "SiEsF4cu1ty";
            break;
        case 'Student Officer':
            validPassword = "#CCSOAko";
            break;
        case 'Student':
            validPassword = "3SapatNa!";
            break;
        default:
            console.error("Invalid role selected.");
            messageDiv.innerHTML = "<p id='error'>Please select a valid role.</p>";
            return;
    }

    // Check password validity
    if (password === validPassword) {
        console.log("Login successful for role: " + role);
        messageDiv.innerHTML = "<p id='success'>Login successful! Welcome, " + role + ".</p>";
    } else {
        console.warn("Incorrect password for role: " + role);
        messageDiv.innerHTML = "<p id='error'>Incorrect password. Please try again.</p>";
    }
});
