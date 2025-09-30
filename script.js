document.addEventListener('DOMContentLoaded', function() {
    // Load photos
    const photoGallery = document.getElementById('photo-gallery');
    const photoNames = [
        '1736583981391.jpeg',
        '1736583981402.jpeg',
        '1736583981457 (1).jpeg',
        '1736583981466.jpeg',
        '1736583981480.jpeg'
    ];
    photoNames.forEach(name => {
        const img = document.createElement('img');
        img.src = `photos/${name}`;
        img.alt = name;
        photoGallery.appendChild(img);
    });

    // Modal functionality
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    const closeBtn = document.getElementsByClassName('close')[0];

    // Add click event listeners to gallery images
    const galleryImages = photoGallery.querySelectorAll('img');
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'flex';
            modalImg.src = this.src;
            modalImg.alt = this.alt;
        });
    });

    // Close modal when clicking the X button
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside the image
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Close modal when pressing ESC key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display !== 'none') {
            modal.style.display = 'none';
        }
    });
});
