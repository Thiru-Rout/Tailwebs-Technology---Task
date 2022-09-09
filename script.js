// capability slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("text-slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


// left-card slider

const carouselImages = document.querySelector('.card-sliding');
const carouselButtons = document.querySelectorAll('.btn-card');
const numberOfImages = document.querySelectorAll('.card-sliding card').length;
let imageIndex = 1;
let translateX = 0;

carouselButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    if (event.target.id === 'previous') {
      if (imageIndex !== 1) {
        imageIndex--;
        translateX += 525;
      }
    } else {
      if (imageIndex !== numberOfImages) {
        imageIndex++;
        translateX -= 525;
      }
    }
    
    carouselImages.style.transform = `translateX(${translateX}px)`;
  });
});


// right-card-slider
const carouselImage = document.querySelector('.card-slidings');
const carouselButton = document.querySelectorAll('.btn-card');
const numberOfImage = document.querySelectorAll('.card-slidings cards').length;
let imageIndexs = 1;
let translateXs = 0;

carouselButton.forEach(button => {
  button.addEventListener('click', (event) => {
    if (event.target.id === 'previous') {
      if (imageIndexs !== 1) {
        imageIndexs--;
        translateXs += 525;
      }
    } else {
      if (imageIndexs !== numberOfImage) {
        imageIndexs++;
        translateXs -= 525;
      }
    }
    
    carouselImage.style.transform = `translateX(${translateXs}px)`;
  });
});

//small-device-card-slider
const carouselImagessm = document.querySelector('.card-sliding-sm');
const carouselButtonssm = document.querySelectorAll('.btn-card');
const numberOfImagessm = document.querySelectorAll('.card-sliding-sm card-sm').length;
let imageIndexsm = 1;
let translateXsm = 0;

carouselButtonssm.forEach(button => {
  button.addEventListener('click', (event) => {
    if (event.target.id === 'previous') {
      if (imageIndexsm !== 1) {
        imageIndexsm--;
        translateXsm += 360;
      }
    } else {
      if (imageIndexsm !== numberOfImagessm) {
        imageIndexsm++;
        translateXsm -= 360;
      }
    }
    
    carouselImagessm.style.transform = `translateX(${translateXsm}px)`;
  });
});
