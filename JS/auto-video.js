document.addEventListener('DOMContentLoaded', () => {
    const videoGrid = document.querySelector('.video-grid');
    let videos = Array.from(videoGrid.getElementsByClassName('video-container'));
    const totalVideos = videos.length;
    let currentIndex = 0;
    const carouselInterval = 8000;
    const startDelay = 10000;

    // Duplicar os vídeos para criar o efeito de loop infinito
    videos.forEach(video => {
        const clone = video.cloneNode(true);
        videoGrid.appendChild(clone);
    });

    function showCurrentVideo(smooth = true) {
        const videoWidth = videos[0].offsetWidth + 20; // Inclui o espaço entre os vídeos
        const offset = -currentIndex * videoWidth; // Ajusta o deslocamento baseado na largura do vídeo
        
        // Definir transição suave ou instantânea
        videoGrid.style.transition = smooth ? 'transform 0.5s ease-in-out' : 'none';
        videoGrid.style.transform = `translateX(${offset}px)`;
    }

    function startCarousel() {
        setInterval(() => {
            currentIndex++;
            showCurrentVideo(); // Movimento suave

            // Quando o índice atinge o final da lista original, reposiciona instantaneamente
            if (currentIndex === totalVideos) {
                setTimeout(() => {
                    currentIndex = 0; // Reseta o índice
                    showCurrentVideo(false); // Movimento instantâneo sem transição
                }, 500); // Espera para finalizar a transição antes do reset
            }
        }, carouselInterval); // Troca de vídeo a cada x segundos
    }

    // Inicio após o atraso
    setTimeout(startCarousel, startDelay);
});
