document.addEventListener('DOMContentLoaded', function() {
    loadYouTubeVideos(["04gT1eFESpk", "Ld1AghHNKxA", "QJ5m2YRwtyQ"]);
    // loadPhotos(); // Implémentez cette fonction si vous souhaitez charger des photos dynamiquement
});

// Fonction pour charger les vidéos YouTube dans le carrousel
function loadYouTubeVideos(videoIDs) {
    const videoGallery = document.querySelector('.video-swiper .swiper-wrapper');
    videoIDs.forEach(id => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        const iframe = document.createElement('iframe');
        iframe.setAttribute('src', `https://www.youtube.com/embed/${id}`);
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
        iframe.setAttribute('allowfullscreen', true);
        slide.appendChild(iframe);
        videoGallery.appendChild(slide);
    });
    // Initialisez le carrousel des vidéos après avoir ajouté les vidéos
    new Swiper('.video-swiper', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        spaceBetween: 30,
        slidesPerView: auto,
    });
}