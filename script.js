let currentIndex = 0;
        const slides = document.querySelectorAll('.carousel img');
    
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.transform = `translateX(${100 * (i - index)}%)`;
            });
        }
    
        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }
    
        function prevSlide() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        }
    
        setInterval(nextSlide, 2000); // Ganti gambar setiap 2 detik
    
        showSlide(currentIndex); // Tampilkan slide pertama saat halaman dimuat