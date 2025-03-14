class Slider {

    constructor(sliderContainer) {
        this.slider = sliderContainer.getElementsByClassName("slider")[0];
        this.slides = this.slider.getElementsByClassName("slide");
        this.prevBtn = sliderContainer.getElementsByClassName("slider-btn left")[0];
        this.nextBtn = sliderContainer.getElementsByClassName("slider-btn right")[0];
        this.indicators = sliderContainer.getElementsByClassName("indicator-container")[0].getElementsByClassName("indicator");
        this.index = 0;
        this.slideCount = this.slides.length;
        this.autoSlide = null;

        // Función para mover al slide anterior

        this.prevBtn.addEventListener("click", () => {
            this.index = (this.index > 0) ? this.index - 1 : totalSlides - 1;
            this.updateSlider();
            this.resetAutoSlide();
        });

        // Función para mover al slide siguiente
        this.nextBtn.addEventListener("click", () => {
            this.index = (this.index < this.slideCount - 1) ? this.index + 1 : 0;
            this.updateSlider();
            this.resetAutoSlide();
        });

        // Hacer que los indicadores sean interactivos
        for (let i = 0; i < this.indicators.length; i++) {
            this.indicators[i].addEventListener("click", () => {
                this.index = parseInt(this.indicators[i].getAttribute("data-index"));
                this.updateSlider();
                this.resetAutoSlide();
            });
        }

        // Iniciar el slider automático
        this.startAutoSlide();
    }

    // Función para actualizar el slider
    updateSlider() {
        this.slider.style.transform = `translateX(-${this.index * 100}vw)`;
        this.updateIndicators();
    }

    // Función para actualizar los indicadores
    updateIndicators() {
        for (let i = 0; i < this.indicators.length; i++) {
            this.indicators[i].classList.toggle("active", i === this.index);
        }
    }

    // Función para iniciar el cambio automático cada 7 segundos
    startAutoSlide() {
        this.autoSlide = setInterval(() => {
            this.index = (this.index + 1) % this.slideCount;
            this.updateSlider();
        }, 7000);
    }

    // Función para resetear el temporizador cuando el usuario interactúa
    resetAutoSlide() {
        clearInterval(this.autoSlide);
        this.startAutoSlide();
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let slider1 = new Slider(document.getElementById("slider-container-1"));
});