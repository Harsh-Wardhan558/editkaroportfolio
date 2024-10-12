const portfolioItems = document.querySelectorAll('.video-item');
const filters = document.querySelectorAll('.filter');

filters.forEach(filter => {
    filter.addEventListener('click', () => {
        const filterValue = filter.dataset.filter;

        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.classList.contains(filterValue)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

function openLightbox(video) {
    const lightbox = document.getElementById('lightbox');
    const lightboxVideo = document.getElementById('lightbox-video');

    lightboxVideo.src = video.src;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxVideo = document.getElementById('lightbox-video');

    lightbox.style.display = 'none';
    lightboxVideo.pause();
    lightboxVideo.src = '';
}
