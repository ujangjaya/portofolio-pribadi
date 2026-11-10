// =====================================
// PERSONAL PORTFOLIO JAVASCRIPT
// =====================================

// 1. KONFIGURASI IDENTITAS DAN KONTAK

const portfolioConfig = {
    whatsapp: "6285213426513",
    email: "ujangjaya295@gmail.com",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/"
};

// 2. MENU NAVIGASI MOBILE

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("show");

    const isOpen = navMenu.classList.contains("show");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Tutup menu" : "Buka menu"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Tutup menu setelah memilih navigasi

document.querySelectorAll("#navMenu a").forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("show");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

// 3. TAHUN OTOMATIS DI FOOTER

document.getElementById("year").textContent =
    new Date().getFullYear();

// 4. ANIMASI SAAT BAGIAN WEBSITE MUNCUL

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

revealElements.forEach(function (element) {
    observer.observe(element);
});

// 5. TOMBOL WHATSAPP

const whatsappButton = document.getElementById("whatsappButton");

whatsappButton.addEventListener("click", function (event) {
    event.preventDefault();

    const number = portfolioConfig.whatsapp;

    if (number === "628XXXXXXXXXX") {
        alert("Silakan masukkan nomor WhatsApp kamu terlebih dahulu di script.js.");
        return;
    }

    const message = encodeURIComponent(
        "Halo, saya tertarik untuk menghubungi dan berdiskusi dengan Anda."
    );

    const whatsappURL =
        `https://wa.me/${number}?text=${message}`;

    window.open(whatsappURL, "_blank");
});

// 6. LINK EMAIL

const emailLink = document.getElementById("emailLink");

emailLink.href = `mailto:${portfolioConfig.email}`;

// 7. LINK MEDIA SOSIAL

document.getElementById("instagramLink").href =
    portfolioConfig.instagram;

document.getElementById("linkedinLink").href =
    portfolioConfig.linkedin;