
// Togle navbar
const menuIcon= document.querySelector("#menu-icon");
const navbar= document.querySelector(".navbar")

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x")
    navbar.classList.toggle("active");
}

// seccion Scroll //
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 100;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
            });
            // activar seccion de animacion
            sec.classList.add("show-animate");
        }
        // if para repetir animacion en scroll
        else{
            sec.classList.remove("show-animate");
        }
    });
    // sticky header
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remover toggle icon y barra navegacion

    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");

}