// Mostrar el botón cuando se hace scroll hacia abajo
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    const toTopBtn = document.getElementById("toTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        toTopBtn.style.display = "block";
    } else {
        toTopBtn.style.display = "none";
    }
}

// Función para llevar al usuario a la parte superior de la página
function scrollToTop() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}
