// ============================================
// PREMIUM WEBSITE ANIMATIONS
// common.js
// ============================================

// ---------------------------
// Floating Hearts ❤️
// ---------------------------

setInterval(function () {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = ["❤️", "💖", "💕", "💗"][Math.floor(Math.random() * 4)];

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize = (18 + Math.random() * 18) + "px";

    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 10000);

}, 450);


// ---------------------------
// Falling Rose Petals 🌸
// ---------------------------

setInterval(function () {

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = ["🌸", "🌺", "🌼"][Math.floor(Math.random() * 3)];

    petal.style.left = Math.random() * 100 + "%";

    petal.style.fontSize = (20 + Math.random() * 15) + "px";

    petal.style.animationDuration = (6 + Math.random() * 5) + "s";

    document.body.appendChild(petal);

    setTimeout(() => {

        petal.remove();

    }, 11000);

}, 700);


// ---------------------------
// Stars ⭐
// ---------------------------

for (let i = 0; i < 50; i++) {

    const star = document.createElement("div");

    star.className = "star";

    star.innerHTML = "⭐";

    star.style.left = Math.random() * 100 + "%";

    star.style.top = Math.random() * 100 + "%";

    star.style.fontSize = (10 + Math.random() * 10) + "px";

    star.style.animationDelay = Math.random() * 3 + "s";

    document.body.appendChild(star);

}


// ---------------------------
// Button Ripple Effect
// ---------------------------

document.addEventListener("click", function (e) {

    if (e.target.tagName !== "BUTTON") return;

    const ripple = document.createElement("span");

    ripple.style.position = "absolute";

    ripple.style.width = "15px";

    ripple.style.height = "15px";

    ripple.style.borderRadius = "50%";

    ripple.style.background = "rgba(255,255,255,.8)";

    ripple.style.left = "50%";

    ripple.style.top = "50%";

    ripple.style.transform = "translate(-50%,-50%)";

    ripple.style.animation = "ripple .6s linear";

    ripple.style.pointerEvents = "none";

    e.target.style.position = "relative";

    e.target.style.overflow = "hidden";

    e.target.appendChild(ripple);

    setTimeout(() => {

        ripple.remove();

    }, 600);

});


// ---------------------------
// Smooth Page Fade
// ---------------------------

function smoothRedirect(url) {

    document.body.classList.add("fade-out");

    setTimeout(function () {

        window.location = url;

    }, 500);

}


// ---------------------------
// Typewriter Effect
// ---------------------------

function typeWriter(id, text, speed = 50) {

    const element = document.getElementById(id);

    if (!element) return;

    element.innerHTML = "";

    let i = 0;

    function typing() {

        if (i < text.length) {

            element.innerHTML += text.charAt(i);

            i++;

            setTimeout(typing, speed);

        }

    }

    typing();

}