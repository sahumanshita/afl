function login(role) {
    if (role === 'admin') {
        window.location.href = "stat.html"; // Redirect to Statutory Status List page
    } else if (role === 'employee') {
        alert("Employee login functionality is not implemented yet.");
    }
}
