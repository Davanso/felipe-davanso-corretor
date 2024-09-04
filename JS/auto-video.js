document.addEventListener('DOMContentLoaded', () => {
    const videoGrid = document.querySelector('.video-grid');
    const videos = Array.from(videoGrid.getElementsByClassName('video-container'));
    let currentIndex = 0;
    const carouselInterval = 8000;
    const startDelay = 10000;

    function showCurrentVideo() {
        const videoWidth = videos[0].offsetWidth + 20; // Inclui o espaço entre os vídeos
        const offset = -currentIndex * videoWidth; // Ajusta o deslocamento baseado na largura do vídeo
        videoGrid.style.transform = `translateX(${offset}px)`;
    }

    function startCarousel() {
        showCurrentVideo();
        setInterval(() => {
            currentIndex = (currentIndex + 1) % videos.length; // Move para o próximo vídeo e volta ao início
            showCurrentVideo();
        }, carouselInterval); // Troca de vídeo a cada x segundos determinado pelo carouselInterval
    }

    // Inicio pos atraso
    setTimeout(startCarousel, startDelay);
});
