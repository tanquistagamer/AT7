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
let slideIndex = 0;
const slides = document.querySelectorAll(".carousel-item");
const indicators = document.querySelectorAll(".indicator");

function showSlides(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? "block" : "none";
        slide.style.opacity = (i === index) ? "1" : "0";
        indicators[i].classList.toggle("active", i === index);
    });
}

function moveSlide(step) {
    slideIndex += step;
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    showSlides(slideIndex);
}

function currentSlide(index) {
    slideIndex = index;
    showSlides(slideIndex);
}
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.carousel-slide');
    const prev = document.getElementById('prev-slide');
    const next = document.getElementById('next-slide');
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;
    let interval;

    function showSlide(index) {
        slides.forEach((slide, idx) => {
            slide.classList.remove('active');
            indicators[idx].classList.remove('active');
            if (idx === index) {
                slide.classList.add('active');
                indicators[idx].classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    next.addEventListener('click', nextSlide);
    prev.addEventListener('click', prevSlide);

    indicators.forEach(indicator => {
        indicator.addEventListener('click', () => {
            currentIndex = parseInt(indicator.dataset.slide);
            showSlide(currentIndex);
        });
    });

    function startAutoSlide() {
        interval = setInterval(nextSlide, 7000);
    }

    function resetInterval() {
        clearInterval(interval);
        startAutoSlide();
    }

    [next, prev, ...indicators].forEach(control => {
        control.addEventListener('click', resetInterval);
    });

    startAutoSlide();
});
document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".carousel-slide");
    let indicators = document.querySelectorAll(".carousel-indicators .indicator");
    let currentSlide = 0;
    const slideInterval = 7000;
  
    function showSlide(index) {
      slides.forEach((slide, idx) => {
        slide.classList.toggle("active", idx === index);
      });
  
      indicators.forEach((indicator, idx) => {
        indicator.classList.toggle("active", idx === index);
      });
    }
  
    document.getElementById("prev-slide").addEventListener("click", function () {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    });
  
    document.getElementById("next-slide").addEventListener("click", function () {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    });
  
    indicators.forEach((indicator, idx) => {
      indicator.addEventListener("click", function () {
        currentSlide = idx;
        showSlide(currentSlide);
      });
    });
  
    setInterval(function () {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }, slideInterval);
  
    showSlide(currentSlide);
  });
  

