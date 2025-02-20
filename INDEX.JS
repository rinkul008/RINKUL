<script>
        function checkLogin(event) {
            Event.preventDefault(); // Prevent form from submitting normally

            // Set your username and password
            const correctUsername = "RINKUL";
            const correctPassword = "RINKUL"; // Change this to your password

            // Get user input
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const errorMessage = document.getElementById("error-message");

            // Check credentials
            if (username === correctUsername && password === correctPassword) {
                alert("Login successful!");
                window.location.href = "index1.html"; // Redirect to another page
            } else {
                errorMessage.textContent = "Invalid username or password!"
            }
     </script>