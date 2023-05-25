window.addEventListener("DOMContentLoaded", function() {
  alert("Selamat datang di halaman Biodata Diri Ku!");

  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth"
      });
    });
  });

  const clock = document.createElement("div");
  clock.classList.add("clock");
  clock.style.position = "fixed";
  clock.style.bottom = "20px";
  clock.style.right = "20px";
  clock.style.padding = "10px";
  clock.style.background = "rgba(0, 0, 0, 0.5)";
  clock.style.color = "#fff";
  clock.style.fontFamily = "Arial, sans-serif";
  clock.style.fontSize = "16px";
  clock.style.borderRadius = "5px";
  clock.style.zIndex = "9999";
  document.body.appendChild(clock);

  function updateClock() {
    const currentDate = new Date();
    const dateOptions = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    const timeOptions = { hour: "numeric", minute: "numeric", second: "numeric" };
    const dateString = currentDate.toLocaleDateString("en-US", dateOptions);
    const timeString = currentDate.toLocaleTimeString("en-US", timeOptions);
    clock.textContent = dateString + " | " + timeString;
  }

  updateClock();
  setInterval(updateClock, 1000);

  clock.addEventListener("mouseover", function() {
    this.style.opacity = 1;
  });

  clock.addEventListener("mouseout", function() {
    this.style.opacity = 0.5;
  });

  // Menambahkan scroll smooth untuk navigasi profil
  var profileLink = document.querySelector('nav a[href="#profile"]');
  var profileSection = document.getElementById('profile');

  profileLink.addEventListener('click', function(event) {
    event.preventDefault();
    profileSection.scrollIntoView({ behavior: 'smooth' });
  });
});
