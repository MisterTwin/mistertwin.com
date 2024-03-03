document.addEventListener('DOMContentLoaded', function() {
    // Initialisation d'AOS
    AOS.init({
        duration: 1200,
        once: true,
    });

    // Animation au survol pour la galerie
    const galerieImages = document.querySelectorAll('.galerie-container img');
    galerieImages.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.05)';
            img.style.transition = 'transform 0.5s ease';
        });

        img.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)';
        });
    });

    // Chargement dynamique de contenu pour les témoignages
    const loadMoreBtn = document.getElementById('load-more-testimonials');
    loadMoreBtn.addEventListener('click', () => {
        // Ici, vous pourriez ajouter une logique pour charger plus de témoignages
        // Par exemple, en faisant une requête à une API ou en affichant des éléments cachés
        console.log('Charger plus de témoignages...');
    });

    // Simple lecteur de musique
    const playBtn = document.getElementById('play-music');
    const audio = new Audio('url_de_votre_fichier_audio.mp3');
    playBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playBtn.textContent = 'Pause';
        } else {
            audio.pause();
            playBtn.textContent = 'Play';
        }
    });
});
