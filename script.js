document.addEventListener("DOMContentLoaded", function () {
    let slider = document.getElementById("slider");
    let slides = document.querySelectorAll(".slide");
    let prevBtn = document.getElementById("prevBtn");
    let nextBtn = document.getElementById("nextBtn");
    let indicators = document.querySelectorAll(".indicator");
    let index = 0;
    let totalSlides = slides.length;
    let autoSlide;

    // Función para actualizar el slider
    function updateSlider() {
        slider.style.transform = `translateX(-${index * 100}vw)`;
        updateIndicators();
        resetAutoSlide();
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

    // Función para mover al slide anterior
    prevBtn.addEventListener("click", function () {
        index = (index > 0) ? index - 1 : totalSlides - 1;
        updateSlider();
    });

    // Función para mover al slide siguiente
    nextBtn.addEventListener("click", function () {
        index = (index < totalSlides - 1) ? index + 1 : 0;
        updateSlider();
    });

    // Hacer que los indicadores sean interactivos
    indicators.forEach(dot => {
        dot.addEventListener("click", function () {
            index = parseInt(this.getAttribute("data-index"));
            updateSlider();
        });
    });

    // Función para iniciar el cambio automático cada 7 segundos
    function startAutoSlide() {
        autoSlide = setInterval(() => {
            index = (index + 1) % totalSlides;
            updateSlider();
        }, 7000);
    }

    // Función para resetear el temporizador cuando el usuario interactúa
    function resetAutoSlide() {
        clearInterval(autoSlide);
        startAutoSlide();
    }

    // Iniciar el slider automático
    startAutoSlide();
});
