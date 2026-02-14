document.addEventListener("DOMContentLoaded", function () {

  /* -----------------------------
     Música
  ------------------------------ */

  const music = document.getElementById("music");
  const btn = document.getElementById("music-btn");
  let playing = false;

  btn.addEventListener("click", () => {
    if (!playing) {
      music.play();
      btn.textContent = "⏸ Música";
    } else {
      music.pause();
      btn.textContent = "🎵 Música";
    }
    playing = !playing;
  });


  /* -----------------------------
     Animación Scroll (Fade)
  ------------------------------ */

  const elements = document.querySelectorAll(".fade-init");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("fade-in");

      const overlay = entry.target.querySelector(".section-overlay");
      if (overlay) overlay.style.opacity = 1;

      obs.unobserve(entry.target);
    });
  }, {
    threshold: 0.2
  });

  elements.forEach(el => {
    observer.observe(el);
  });

});


  /* -----------------------------
     COUNTDOWN
  ------------------------------ */

document.addEventListener("DOMContentLoaded", function () {

  const eventDate = new Date("2026-04-11T20:00:00-05:00").getTime();

  const countdownFunction = setInterval(function () {

    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) {
      clearInterval(countdownFunction);
      document.getElementById("countdown").innerHTML = "✨ ¡Hoy es el gran día! ✨";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((1000 * 60 - (distance % (1000 * 60))) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

  }, 1000);

});
