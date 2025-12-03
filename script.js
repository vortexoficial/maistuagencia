// script.js

// 0. FUNÇÃO PARA TROCAR LOGOS (LIGHT/DARK)
function updateLogos() {
    const isDark = document.documentElement.classList.contains('dark');
    
    // Caminhos das logos (Certifique-se que elas existem na pasta img/)
    const logoLight = "img/logop.png"; // Logo PRETA (Para fundo branco)
    const logoDark  = "img/logob.png"; // Logo BRANCA (Para fundo escuro)
    
    const targetLogo = isDark ? logoDark : logoLight;
    
    const logoElements = document.querySelectorAll('.theme-logo');
    logoElements.forEach(img => {
        img.src = targetLogo;
    });
}

// 1. INICIALIZAÇÃO
(function() {
    try {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    } catch (e) {}
})();

window.addEventListener('load', () => {
    updateLogos();
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('loader-hidden');
            loader.addEventListener('transitionend', () => {
                loader.style.display = 'none';
            });
        }, 1500); 
    }
});

document.addEventListener('DOMContentLoaded', () => {
    
    updateLogos();

    // 2. MENU MOBILE
    const hamburgerBtn = document.getElementById('hamburger-menu');
    const closeMenuBtn = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu-overlay');
    
    if (hamburgerBtn && closeMenuBtn && mobileMenu) {
        const toggleMenu = (show) => {
            if (show) {
                mobileMenu.classList.remove('translate-x-full');
                document.body.style.overflow = 'hidden';
            } else {
                mobileMenu.classList.add('translate-x-full');
                document.body.style.overflow = '';
            }
        };
        hamburgerBtn.addEventListener('click', () => toggleMenu(true));
        closeMenuBtn.addEventListener('click', () => toggleMenu(false));
        mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => toggleMenu(false)));
    }

    // 3. FADE IN
    const sections = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    sections.forEach(section => observer.observe(section));

    // 4. DARK MODE
    const themeBtn = document.getElementById('theme-toggle-btn');
    const sunIcon = document.getElementById('theme-toggle-sun');
    const moonIcon = document.getElementById('theme-toggle-moon');

    const updateIcon = () => {
        if (document.documentElement.classList.contains('dark')) {
            moonIcon.classList.remove('hidden');
            sunIcon.classList.add('hidden');
        } else {
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
        }
        updateLogos();
    };

    if (themeBtn) {
        updateIcon();
        themeBtn.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
            updateIcon();
        });
    }

    // 5. CARROSSEL INFINITO CONSTANTE + DRAG
    const sliderWrapper = document.getElementById('infinite-drag-wrapper');
    const track = document.getElementById('infinite-track');

    if (sliderWrapper && track) {
        let isDown = false;
        let startX;
        let scrollLeft;
        let animationId;
        
        // Configuração de Velocidade
        // Valor positivo = move para esquerda (conteúdo vai para direita visualmente se usar RTL, mas aqui é LTR padrão)
        // Para ir da direita para a esquerda (scroll aumentando):
        const speed = 0.8; // Ajuste para mais rápido ou mais lento

        const autoScroll = () => {
            if (!isDown) { 
                sliderWrapper.scrollLeft += speed;
                
                // Lógica de Loop Infinito
                // O HTML tem os cards duplicados (Bloco 1 + Bloco 2)
                // Se o scroll passou da metade do tamanho total do track, volta para o começo (0)
                // track.scrollWidth / 2 é exatamente onde começa a repetição
                
                if (sliderWrapper.scrollLeft >= (track.scrollWidth / 2)) {
                    sliderWrapper.scrollLeft = 0;
                }
            }
            animationId = requestAnimationFrame(autoScroll);
        };

        // Inicia o movimento
        animationId = requestAnimationFrame(autoScroll);

        // MOUSE EVENTS (Desktop)
        sliderWrapper.addEventListener('mousedown', (e) => {
            isDown = true;
            sliderWrapper.classList.add('active');
            startX = e.pageX - sliderWrapper.offsetLeft;
            scrollLeft = sliderWrapper.scrollLeft;
            // Não cancelamos a animação frame, apenas o incremento dentro dela para parar suave
        });

        sliderWrapper.addEventListener('mouseleave', () => {
            isDown = false;
            sliderWrapper.classList.remove('active');
        });

        sliderWrapper.addEventListener('mouseup', () => {
            isDown = false;
            sliderWrapper.classList.remove('active');
        });

        sliderWrapper.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - sliderWrapper.offsetLeft;
            const walk = (x - startX) * 2; // Velocidade do arrasto manual
            sliderWrapper.scrollLeft = scrollLeft - walk;
            
            // Loop Infinito durante o arrasto manual também
            if (sliderWrapper.scrollLeft >= (track.scrollWidth / 2)) {
                sliderWrapper.scrollLeft = 0;
                // Recalcula startX para não dar pulo visual
                startX = x + sliderWrapper.offsetLeft; 
                scrollLeft = 0;
            } else if (sliderWrapper.scrollLeft <= 0) {
                 sliderWrapper.scrollLeft = (track.scrollWidth / 2);
                 startX = x + sliderWrapper.offsetLeft; 
                 scrollLeft = (track.scrollWidth / 2);
            }
        });

        // TOUCH EVENTS (Mobile)
        sliderWrapper.addEventListener('touchstart', (e) => {
            isDown = true;
            startX = e.touches[0].pageX - sliderWrapper.offsetLeft;
            scrollLeft = sliderWrapper.scrollLeft;
        });

        sliderWrapper.addEventListener('touchend', () => {
            isDown = false;
        });

        sliderWrapper.addEventListener('touchmove', (e) => {
            if (!isDown) return;
            const x = e.touches[0].pageX - sliderWrapper.offsetLeft;
            const walk = (x - startX) * 2;
            sliderWrapper.scrollLeft = scrollLeft - walk;
            
            // Loop Infinito no Mobile
            if (sliderWrapper.scrollLeft >= (track.scrollWidth / 2)) {
                sliderWrapper.scrollLeft = 0;
            } else if (sliderWrapper.scrollLeft <= 0) {
                 sliderWrapper.scrollLeft = (track.scrollWidth / 2);
            }
        });
    }
});