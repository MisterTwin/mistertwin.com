// document.addEventListener('DOMContentLoaded', function() {
//     loadYouTubeVideos(["04gT1eFESpk", "Ld1AghHNKxA", "QJ5m2YRwtyQ"]);
//     // loadPhotos(); // Implémentez cette fonction si vous souhaitez charger des photos dynamiquement
// });

// Fonction pour charger les vidéos YouTube dans le carrousel
// function loadYouTubeVideos(videoIDs) {
//     const videoGallery = document.querySelector('owl-carousel');
//     videoIDs.forEach(id => {
//         const slide = document.createElement('div');
//         slide.className = 'video-slide';
//         const iframe = document.createElement('iframe');
//         iframe.setAttribute('src', `https://www.youtube.com/embed/${id}`);
//         iframe.setAttribute('frameborder', '0');
//         iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
//         iframe.setAttribute('allowfullscreen', true);
//         slide.appendChild(iframe);
//         videoGallery.appendChild(slide);
//     });

    
// }

// $('.owl-carousel').owlCarousel({
//     items:3,
//     merge:true,
//     loop:true,
//     margin:10,
//     video:true,
//     lazyLoad:true,
//     center:true,
//     // responsive:{
//     //     480:{
//     //         items:2
//     //     },
//     //     600:{
//     //         items:4
//     //     }
//     // }
// })
// // Initialisez le carrousel des vidéos après avoir ajouté les vidéos
// $(document).ready(function(){
//     $(".owl-carousel").owlCarousel();
// });