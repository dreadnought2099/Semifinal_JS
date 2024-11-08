// document
//   .getElementById("createAccountForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();

//     const password = document.getElementById("password").value;
//     const confirmPassword = document.getElementById("confirmPassword").value;

//     if (password !== confirmPassword) {
//       alert("Passwords do not match!");
//     } else {
//       alert("Account created successfully!");
//       window.location.href = "../index.html";
//     }
//   });

document
  .getElementById("createAccountForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const errorMessage = document.getElementById("error-message");

    if (password !== confirmPassword) {
      errorMessage.textContent = "Passwords do not match!";
      return;
    }

    // i check ang user kung nana sa localStorage
    if (localStorage.getItem("user_" + username)) {
      errorMessage.textContent = "User already exists!";
      return;
    }

    // Save ang user sa localStorage
    const userData = {
      username: username,
      password: password,
    };
    localStorage.setItem("user_" + username, JSON.stringify(userData));

    alert("Account created successfully!");
    window.location.href = "../index.html"; // Redirect to login page
  });
