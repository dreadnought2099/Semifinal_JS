function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const content = document.getElementById("content");
  const footer = document.getElementById("footer");
  sidebar.classList.toggle("collapsed");
  content.classList.toggle("collapsed");
  footer.classList.toggle("collapsed");
}

document.getElementById("logout-btn").addEventListener("click", function () {
  alert("You have been logged out!");
  window.location.href = "../index.html";
});

const currentYear = new Date().getFullYear();
document.getElementById(
  "copyright"
).innerHTML = `&copy; ${currentYear} RMAGALLANEZ. All rights reserved.`;
