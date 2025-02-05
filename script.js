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
document.addEventListener("DOMContentLoaded", function () {
    let valuesSlider = document.getElementById("values-slider");
    let valuesPrevBtn = document.getElementById("values-prevBtn");
    let valuesNextBtn = document.getElementById("values-nextBtn");
    let valuesIndicators = document.querySelectorAll("#values-indicators .indicator");
    let valuesIndex = 0;
    let totalValuesGroups = 4; // Debe coincidir con el número de indicadores

    function updateValuesSlider() {
        console.log("Moviendo a grupo: " + valuesIndex);
        valuesSlider.style.transform = `translateX(-${valuesIndex * 100}%)`;
        updateValuesIndicators();
    }

    function updateValuesIndicators() {
        valuesIndicators.forEach((dot, i) => {
            dot.classList.remove("active");
            if (i === valuesIndex) {
                dot.classList.add("active");
            }
        });
    }

    valuesPrevBtn.addEventListener("click", function () {
        console.log("Botón Anterior Clicked");
        valuesIndex = valuesIndex > 0 ? valuesIndex - 1 : totalValuesGroups - 1;
        updateValuesSlider();
    });

    valuesNextBtn.addEventListener("click", function () {
        console.log("Botón Siguiente Clicked");
        valuesIndex = valuesIndex < totalValuesGroups - 1 ? valuesIndex + 1 : 0;
        updateValuesSlider();
    });

    valuesIndicators.forEach(dot => {
        dot.addEventListener("click", function () {
            valuesIndex = parseInt(this.getAttribute("data-index"));
            updateValuesSlider();
        });
    });
// Función para iniciar el cambio automático cada 7 segundos
    setInterval(() => {
        valuesIndex = (valuesIndex + 1) % totalValuesGroups;
        updateValuesSlider();
    }, 7000);
});
