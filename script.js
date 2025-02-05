document.addEventListener("DOMContentLoaded", function () {
    let slider = document.getElementById("slider");
    let slides = document.querySelectorAll(".slide");
    let prevBtn = document.getElementById("prevBtn");
    let nextBtn = document.getElementById("nextBtn");
    let indicators = document.querySelectorAll(".indicator");
    let index = 0;
    let totalSlides = slides.length;

    // Función para actualizar el slider
    function updateSlider() {
        slider.style.transform = `translateX(-${index * 100}%)`;
        updateIndicators();
    }

    // Función para actualizar los indicadores
    function updateIndicators() {
        indicators.forEach((dot, i) => {
            dot.classList.remove("active");
            if (i === index) {
                dot.classList.add("active");
            }
        });
    }

    // Botón anterior
    prevBtn.addEventListener("click", function () {
        index = index > 0 ? index - 1 : totalSlides - 1;
        updateSlider();
    });

    // Botón siguiente
    nextBtn.addEventListener("click", function () {
        index = index < totalSlides - 1 ? index + 1 : 0;
        updateSlider();
    });

    // Hacer que los indicadores sean interactivos
    indicators.forEach(dot => {
        dot.addEventListener("click", function () {
            index = parseInt(this.getAttribute("data-index"));
            updateSlider();
        });
    });

    // Cambio automático cada 7 segundos
    setInterval(() => {
        index = (index + 1) % totalSlides;
        updateSlider();
    }, 7000);
});
