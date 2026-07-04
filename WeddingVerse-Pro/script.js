/* =========================================
   VECTOR GRAPHICS - WEDDING SCRIPT
========================================= */

/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1500);
});

/* =========================
   MUSIC TOGGLE
========================= */

const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

let isPlaying = false;

musicBtn.addEventListener("click", () => {
    if (!isPlaying) {
        bgMusic.play();
        isPlaying = true;
        musicBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else {
        bgMusic.pause();
        isPlaying = false;
        musicBtn.innerHTML = '<i class="fa-solid fa-music"></i>';
    }
});

/* =========================
   COUNTDOWN TIMER
========================= */

const weddingDate = new Date("Dec 25, 2026 10:35:00").getTime();

const timer = setInterval(() => {

    let now = new Date().getTime();
    let distance = weddingDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (distance < 0) {
        clearInterval(timer);
        document.querySelector(".countdown").innerHTML = "<h2>💍 शुभविवाह संपन्न 💍</h2>";
    }

}, 1000);

/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});

/* =========================
   WHATSAPP RSVP
========================= */

const rsvpBtn = document.querySelector(".rsvp-btn");

rsvpBtn.addEventListener("click", () => {

    const phone = "917447663856";

    const message = "नमस्कार, मी आपल्या लग्नासाठी उपस्थित राहणार आहे. शुभेच्छा!";

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

});

/* =========================
   GALLERY CLICK EFFECT
========================= */

document.querySelectorAll(".gallery-grid img").forEach(img => {

    img.addEventListener("click", () => {
        const src = img.src;

        const popup = document.createElement("div");

        popup.style.position = "fixed";
        popup.style.top = "0";
        popup.style.left = "0";
        popup.style.width = "100%";
        popup.style.height = "100%";
        popup.style.background = "rgba(0,0,0,0.9)";
        popup.style.display = "flex";
        popup.style.alignItems = "center";
        popup.style.justifyContent = "center";
        popup.style.zIndex = "99999";

        popup.innerHTML = `<img src="${src}" style="max-width:90%; max-height:90%; border-radius:15px;">`;

        popup.addEventListener("click", () => {
            popup.remove();
        });

        document.body.appendChild(popup);
    });

});
