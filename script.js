document.addEventListener("DOMContentLoaded", function () {
  // === MAIN SLIDER ===
  const sliderMain = document.getElementById("slider");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const indicators = document.querySelectorAll(".indicator");
  let index = 0;
  let autoSlide;

  function updateSlider() {
    if (sliderMain) {
      sliderMain.style.transform = `translateX(-${index * 100}vw)`;
      indicators.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });
    }
  }

  function startAutoSlide() {
    autoSlide = setInterval(() => {
      index = (index + 1) % slides.length;
      updateSlider();
    }, 7000);
  }

  function resetAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
  }

  if (sliderMain) {
    updateSlider();
    startAutoSlide();

    prevBtn?.addEventListener("click", () => {
      index = (index > 0) ? index - 1 : slides.length - 1;
      updateSlider();
      resetAutoSlide();
    });

    nextBtn?.addEventListener("click", () => {
      index = (index + 1) % slides.length;
      updateSlider();
      resetAutoSlide();
    });

    indicators.forEach(dot => {
      dot.addEventListener("click", () => {
        index = parseInt(dot.dataset.index);
        updateSlider();
        resetAutoSlide();
      });
    });
  }

  // === VALUES CAROUSEL ===
  const valuesSlider = document.getElementById("values-slider");
  const valuesPrevBtn = document.getElementById("values-prevBtn");
  const valuesNextBtn = document.getElementById("values-nextBtn");
  const valuesIndicators = document.querySelectorAll("#values-indicators .indicator");
  let valuesIndex = 0;
  const totalValuesGroups = valuesIndicators.length;

  function updateValuesSlider() {
    valuesSlider.style.transform = `translateX(-${valuesIndex * 100}%)`;
    valuesIndicators.forEach((dot, i) => {
      dot.classList.toggle("active", i === valuesIndex);
    });
  }

  if (valuesSlider) {
    updateValuesSlider();

    valuesPrevBtn?.addEventListener("click", () => {
      valuesIndex = (valuesIndex > 0) ? valuesIndex - 1 : totalValuesGroups - 1;
      updateValuesSlider();
    });

    valuesNextBtn?.addEventListener("click", () => {
      valuesIndex = (valuesIndex + 1) % totalValuesGroups;
      updateValuesSlider();
    });

    valuesIndicators.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        valuesIndex = i;
        updateValuesSlider();
      });
    });

    setInterval(() => {
      valuesIndex = (valuesIndex + 1) % totalValuesGroups;
      updateValuesSlider();
    }, 7000);
  }

  // === PROJECT CAROUSEL ===
  const projectSlides = document.querySelectorAll('.carousel-slide');
  const prevProject = document.getElementById('prev-slide');
  const nextProject = document.getElementById('next-slide');
  const projectIndicators = document.querySelectorAll('.carousel-indicators .indicator');
  let projectIndex = 0;

  function showProjectSlide(index) {
    projectSlides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
      projectIndicators[i].classList.toggle("active", i === index);
    });
  }

  function nextProjectSlide() {
    projectIndex = (projectIndex + 1) % projectSlides.length;
    showProjectSlide(projectIndex);
  }

  function prevProjectSlide() {
    projectIndex = (projectIndex - 1 + projectSlides.length) % projectSlides.length;
    showProjectSlide(projectIndex);
  }

  if (projectSlides.length > 0) {
    showProjectSlide(projectIndex);

    prevProject?.addEventListener("click", prevProjectSlide);
    nextProject?.addEventListener("click", nextProjectSlide);

    projectIndicators.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        projectIndex = i;
        showProjectSlide(projectIndex);
      });
    });

    setInterval(nextProjectSlide, 7000);
  }

  // === DYNAMIC CONTENT ===

  // Cargar animation.html
  fetch('animation.html')
    .then(res => res.text())
    .then(data => {
      const container = document.getElementById('animation-container');
      if (container) container.innerHTML = data;
    });

  // Cargar carrusel.html con botones y autoplay
  fetch('carrusel.html')
    .then(res => res.text())
    .then(data => {
      const carruselContainer = document.getElementById('carrusel-container');
      if (carruselContainer) {
        carruselContainer.innerHTML = data;

        setTimeout(() => {
          const slider = document.getElementById('slider');
          const slideLeft = document.getElementById('slideLeft');
          const slideRight = document.getElementById('slideRight');

          if (!slider) return;

          slideLeft?.addEventListener('click', () => {
            slider.scrollBy({ left: -320, behavior: 'smooth' });
          });

          slideRight?.addEventListener('click', () => {
            slider.scrollBy({ left: 320, behavior: 'smooth' });
          });

          setInterval(() => {
            if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 5) {
              slider.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
              slider.scrollBy({ left: 320, behavior: 'smooth' });
            }
          }, 3500);
        }, 100);
      }
    });

  // Cargar jointheteam.html
  fetch('jointheteam.html')
    .then(res => res.text())
    .then(data => {
      const teamContainer = document.getElementById('jointheteam-container');
      if (teamContainer) teamContainer.innerHTML = data;
    });
});
