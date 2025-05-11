document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("username").value;
  const email = document.getElementById("useremail").value;
  const message = document.getElementById("usermessage").value;
  const status = document.getElementById("status");

  if (name && email && message) {
    status.textContent = `Thanks, ${name}! Your message has been sent.`;
    status.style.color = "green";
    this.reset();
  } else {
    status.textContent = "Please fill out all fields.";
    status.style.color = "red";
  }
});
