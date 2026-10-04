/* =========================================================
   CEMENTERIO DE SATIPO
   JAVASCRIPT
========================================================= */


/* =========================================================
   CARRUSEL
========================================================= */

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let slideIndex = 0;
let slideTimer;


function showSlide(index) {

    if (index >= slides.length) {
        slideIndex = 0;
    }

    if (index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    slides[slideIndex].classList.add("active");
    dots[slideIndex].classList.add("active");
}


function changeSlide(direction) {

    slideIndex += direction;

    showSlide(slideIndex);

    restartCarousel();
}


function currentSlide(index) {

    slideIndex = index;

    showSlide(slideIndex);

    restartCarousel();
}


function autoSlide() {

    slideIndex++;

    showSlide(slideIndex);
}


function startCarousel() {

    slideTimer = setInterval(autoSlide, 6000);

}


function restartCarousel() {

    clearInterval(slideTimer);

    startCarousel();

}


startCarousel();


/* =========================================================
   MENÚ RESPONSIVE
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("show");

    const icon = menuBtn.querySelector("i");

    if (navbar.classList.contains("show")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


/* Cerrar menú al hacer clic en un enlace */

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("show");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================================================
   HEADER AL HACER SCROLL
========================================================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* =========================================================
   ENLACES ACTIVOS DEL MENÚ
========================================================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar > a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
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


/* =========================================================
   FORMULARIO DE CONTACTO
========================================================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !email || !mensaje) {

        formMessage.textContent =
            "Por favor, completa los campos obligatorios.";

        formMessage.style.background = "#fff0f0";
        formMessage.style.color = "#a52c2c";

        formMessage.classList.add("show");

        return;
    }

    formMessage.textContent =
        "¡Consulta enviada correctamente! Nos pondremos en contacto contigo.";

    formMessage.style.background = "#eaf6ef";
    formMessage.style.color = "#247045";

    formMessage.classList.add("show");

    contactForm.reset();

    setTimeout(() => {
        formMessage.classList.remove("show");
    }, 6000);

});


/* =========================================================
   LOGIN MODAL
========================================================= */

const loginModal = document.getElementById("loginModal");


function openLogin() {

    loginModal.classList.add("show");

    document.body.classList.add("modal-open");

}


function closeLogin() {

    loginModal.classList.remove("show");

    document.body.classList.remove("modal-open");

}


document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closeLogin();
    }

});


/* =========================================================
   MOSTRAR / OCULTAR CONTRASEÑA
========================================================= */

function togglePassword() {

    const password = document.getElementById("loginPassword");
    const icon = document.querySelector(".show-password i");

    if (password.type === "password") {

        password.type = "text";

        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");

    } else {

        password.type = "password";

        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");

    }

}


/* =========================================================
   LOGIN DEMO
========================================================= */

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (event) => {

    event.preventDefault();

    alert(
        "Inicio de sesión de demostración.\n\n" +
        "Para producción, conecta este formulario " +
        "con tu sistema de autenticación."
    );

});


/* =========================================================
   BOTÓN VOLVER ARRIBA
========================================================= */

const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        backTop.classList.add("show");
    } else {
        backTop.classList.remove("show");
    }

});


backTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================================
   AÑO AUTOMÁTICO DEL FOOTER
========================================================= */

document.getElementById("year").textContent =
    new Date().getFullYear();
