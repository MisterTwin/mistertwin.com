document.addEventListener('DOMContentLoaded', function() {
    loadYouTubeVideos(["04gT1eFESpk", "Ld1AghHNKxA", "QJ5m2YRwtyQ"]);
    // loadPhotos(); // Implémentez cette fonction si vous souhaitez charger des photos dynamiquement
});

function loadYouTubeVideos(videoIDs) {
    const videoGallery = document.getElementById('video-gallery');
    videoIDs.forEach(id => {
        const iframe = document.createElement('iframe');
        iframe.setAttribute('src', `https://www.youtube.com/embed/${id}`);
        iframe.setAttribute('width', '560');
        iframe.setAttribute('height', '315');
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
        iframe.setAttribute('allowfullscreen', true);
        videoGallery.appendChild(iframe);
    });
}