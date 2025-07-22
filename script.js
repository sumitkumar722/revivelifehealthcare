function showSection(id) {
  document.querySelectorAll("section").forEach(sec => sec.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
  document.getElementById("nav-menu").classList.remove("show"); // For mobile
}

function toggleMenu() {
  document.getElementById("nav-menu").classList.toggle("show");
}

const slideImages = ["ReviveLife2.png", "doctorsReviveLife.png.jpg"];
let currentSlide = 0;

function showNextSlide() {
  currentSlide = (currentSlide + 1) % slideImages.length;
  document.getElementById("hero-slide").src = slideImages[currentSlide];
}
setInterval(showNextSlide, 3000);

// FORM SUBMIT HANDLER
document.getElementById("appointment-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const appointment = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    department: document.getElementById("department").value,
    date: document.getElementById("date").value
  };

  try {
    const response = await fetch("https://revivelife-backend.onrender.com/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(appointment)
    });

    const result = await response.text();

    if (response.ok) {
      document.getElementById("appointment-form").classList.add("hidden");
      document.getElementById("success-message").classList.remove("hidden");
    } else {
      alert("Server error: " + result);
    }
  } catch (err) {
    alert("Network error! Try again later.");
    console.error(err);
  }
});

//  LOGIN SYSTEM
function loginUser() {
  const user = document.getElementById("login-username").value;
  const pass = document.getElementById("login-password").value;

  if (user === "Seth_sumitsoni" && pass === "@31January") {
    document.getElementById("login-message").innerText = "Login successful!";
    return false;
  } else {
    alert("Invalid credentials");
    return false;
  }
}
