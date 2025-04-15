function initializeSlideshow(slideshowId, images) {
    let currentImageIndex = 0;
    const slideImg = document.querySelector(`#${slideshowId} .slide-img`);

    function changeImage() {
        slideImg.classList.remove('active');

        currentImageIndex = (currentImageIndex + 1) % images.length;

        setTimeout(() => {
            slideImg.src = images[currentImageIndex];
            slideImg.classList.add('active');
        }, 200);
    }

    setInterval(changeImage, 3000);

    slideImg.classList.add('active');
}

const imagens = [
    './src/img/entrada.jpg',
    './src/img/interior.jpg',
    './src/img/piscina.jpg',
    './src/img/quarto.jpg'
];

initializeSlideshow('slideshow', imagens);