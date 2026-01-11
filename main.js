/* =========================
   SCROLL ACTIVE LINK
========================= */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navigate a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.pageYOffset >= sectionTop &&
            window.pageYOffset < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

/* =========================
   HAMBURGER MENU
========================= */
const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".navigate");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
});

/* =========================
   CLOSE MENU ON LINK CLICK
========================= */
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        nav.classList.remove("active");
    });
});

/* =========================
   PORTFOLIO LIGHTBOX
========================= */
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");

document.querySelectorAll(".portfolio-card img").forEach(img => {
    img.addEventListener("click", () => {
        lightboxImg.src = img.src;
        lightbox.style.display = "flex";
    });
});

lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});
