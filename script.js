function showSection(id) {
  document.querySelectorAll("section").forEach(sec => sec.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
  document.getElementById("nav-menu").classList.remove("show");
}

function toggleMenu() {
  document.getElementById("nav-menu").classList.toggle("show");
}

// Slideshow logic
const slideImages = ["ReviveLife2.png", "doctorsReviveLife.png.jpg"];
let currentSlide = 0;
function showNextSlide() {
  currentSlide = (currentSlide + 1) % slideImages.length;
  document.getElementById("hero-slide").src = slideImages[currentSlide];
}
setInterval(showNextSlide, 3000);

// Form submission
document.getElementById("appointment-form").addEventListener("submit", async function(e) {
  e.preventDefault();
  const appointment = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    department: document.getElementById("department").value,
    date: document.getElementById("date").value
  };

  try {
    const res = await fetch("https://revivelife-backend.onrender.com/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(appointment)
    });

    if (res.ok) {
      document.getElementById("appointment-form").classList.add("hidden");
      document.getElementById("success-message").classList.remove("hidden");
    } else {
      alert("Server error!");
    }
  } catch (err) {
    alert("Network error!");
  }
});

// Login
function loginUser() {
  const user = document.getElementById("login-username").value;
  const pass = document.getElementById("login-password").value;

  if (user === "Seth_sumitsoni" && pass === "@31January") {
    document.getElementById("login-message").innerText = "Login successful!";
    showSection("admin-dashboard");
    loadAppointments();
    return false;
  } else {
    alert("Invalid credentials");
    return false;
  }
}

// Load appointments
async function loadAppointments() {
  try {
    const response = await fetch("https://revivelife-backend.onrender.com/appointments");
    const data = await response.json();
    const list = document.getElementById("appointment-list");
    list.innerHTML = "";

    if (data.length === 0) {
      list.innerHTML = "<p>No appointments found.</p>";
      return;
    }

    data.forEach(app => {
      const div = document.createElement("div");
      div.innerHTML = `
        <strong>Name:</strong> ${app.name}<br>
        <strong>Phone:</strong> ${app.phone}<br>
        <strong>Department:</strong> ${app.department}<br>
        <strong>Date:</strong> ${app.date}<hr>
      `;
      list.appendChild(div);
    });
  } catch (err) {
    document.getElementById("appointment-list").innerText = "Failed to load data.";
  }
}
