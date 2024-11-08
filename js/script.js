// function validateLogin(event) {
//   event.preventDefault();

//   const username = document.getElementById("username").value;
//   const password = document.getElementById("password").value;
//   const errorMessage = document.getElementById("error-message");

//   // hardcoded or predefined valid users
//   const validUsers = {
//     RMAGALLANEZ: "newt",
//   };

//   if (validUsers[username] && validUsers[username] === password) {
//     localStorage.setItem("loggedInUser", username);
//     alert("Welcome " + username + "!");

//     if (username === "RMAGALLANEZ") {
//       window.location.href = "sidebar/home.html";
//     }

//     return true;
//   } else {
//     errorMessage.textContent = "Invalid username or password";
//     return false;
//   }
// }

function validateLogin(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  // hardcoded or predefined valid users
  const validUsers = {
    RMAGALLANEZ: "newt",
  };

  // Check if username exists in hardcoded users
  if (validUsers[username] && validUsers[username] === password) {
    localStorage.setItem("loggedInUser", username);
    alert("Welcome " + username + "!");
    window.location.href = "sidebar/home.html";
  }

  // Check if username exists in localStorage users
  const storedUserData = localStorage.getItem("user_" + username);
  if (storedUserData) {
    const userData = JSON.parse(storedUserData);
    if (userData.password === password) {
      localStorage.setItem("loggedInUser", username);
      alert("Welcome " + username + "!");
      window.location.href = "sidebar/home.html";
      return true;
    }
  }

  //show an error kung walay match found
  errorMessage.textContent = "Invalid username or password";
  return false;
}
