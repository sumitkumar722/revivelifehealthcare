  function showSection(id) {
      document.querySelectorAll("section").forEach(sec => sec.classList.add("hidden"));
      document.getElementById(id).classList.remove("hidden");
      // Close menu on selection (mobile)
      document.getElementById("nav-menu").classList.remove("show");
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

    document.getElementById("appointment-form").addEventListener("submit", function(e) {
      e.preventDefault();
      document.getElementById("appointment-form").classList.add("hidden");
      document.getElementById("payment-section").classList.remove("hidden");
    });

    function processPayment() {
      alert("Payment of ₹500 successful!");
      document.getElementById("payment-section").classList.add("hidden");
      document.getElementById("success-message").classList.remove("hidden");
    }

    function loginUser() {
      const user = document.getElementById("login-username").value;
      const pass = document.getElementById("login-password").value;
      if (user === "admin" && pass === "admin123") {
        document.getElementById("login-message").innerText = "Login successful!";
        return false;
      } else {
        alert("Invalid credentials");
        return false;
      }
    }