document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form untuk melakukan submit default

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Periksa nilai username dan password
    if (username === "riza" && password === "12345") {
        // Jika benar, redirect ke halaman dashboard
        window.location.href = "../dashboard.html";
    } else {
        // Jika salah, tampilkan alert
        alert("Username atau password salah. Silakan coba lagi.");
    }
});