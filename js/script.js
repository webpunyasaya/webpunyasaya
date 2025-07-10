document.addEventListener('DOMContentLoaded', function() {

    // --- Copy to Clipboard Functionality ---
    const copyButton = document.getElementById('copy-button');
    const contractAddressElement = document.getElementById('contract-address');
    
    if (copyButton && contractAddressElement) {
        const contractAddress = contractAddressElement.innerText;

        copyButton.addEventListener('click', () => {
            // Jangan salin jika alamatnya masih placeholder
            if (contractAddress.includes('Your_Contract_Address_Here')) {
                copyButton.innerText = 'INVALID';
                copyButton.style.backgroundColor = '#E53935'; // Merah
                setTimeout(() => {
                    copyButton.innerText = 'COPY';
                    copyButton.style.backgroundColor = '';
                }, 2000);
                return; // Hentikan fungsi
            }

            navigator.clipboard.writeText(contractAddress).then(() => {
                copyButton.innerText = 'COPIED!';
                copyButton.style.backgroundColor = '#4CAF50'; // Hijau
                
                setTimeout(() => {
                    copyButton.innerText = 'COPY';
                    copyButton.style.backgroundColor = '';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
                copyButton.innerText = 'ERROR';
                 setTimeout(() => {
                    copyButton.innerText = 'COPY';
                }, 2000);
            });
        });
    }

    // --- Smooth Scrolling for Nav Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- LOGIKA UNTUK HAMBURGER MENU ---
    const hamburgerButton = document.getElementById('hamburger-button');
    const mobileNav = document.getElementById('mobile-nav');

    if (hamburgerButton && mobileNav) {
        // Toggle menu saat tombol hamburger diklik
        hamburgerButton.addEventListener('click', () => {
            const isOpened = document.body.classList.toggle('mobile-nav-active');
            // ✨ PERBAIKAN: Update atribut ARIA untuk aksesibilitas
            hamburgerButton.setAttribute('aria-expanded', isOpened);
        });

        // Tutup menu saat salah satu link di menu mobile diklik
        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                document.body.classList.remove('mobile-nav-active');
                // ✨ PERBAIKAN: Update atribut ARIA saat menu ditutup
                hamburgerButton.setAttribute('aria-expanded', 'false');
            });
        });
    }

});

// --- LOGIKA UNTUK PRELOADER ---
// (Ini tetap di luar karena menggunakan 'load' yang menunggu gambar/video, berbeda dari 'DOMContentLoaded')
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.classList.add('preloader-hidden');
    }
});