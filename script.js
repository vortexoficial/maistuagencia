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

// 1. SISTEMA DE TRADUÇÃO (I18N) - NOVO
const translations = {
    'pt': {
        // NAV
        'nav_about': 'Quem Somos',
        'nav_services': 'Serviços',
        'nav_diff': 'Por que a +TU?',
        'nav_btn': 'Iniciar Projeto',

        // HERO
        'hero_title_1': 'Existe um',
        'hero_title_highlight': 'erro silencioso',
        'hero_title_2': 'acabando com o potencial da sua marca.',
        'hero_subtitle_1': 'Se o seu negócio não é lembrado, ele não é escolhido. A',
        'hero_subtitle_2': 'nasceu para mudar isso.',
        'hero_cta_text': 'Quer aumentar presença, vendas e diferenciação?',
        'hero_btn': 'Falar com a +TU',

        // ABOUT
        'about_title_1': 'Nós entendemos a dor que',
        'about_title_highlight': 'você está vivendo.',
        'about_subtitle': 'Porque ela também foi nossa.',
        'about_foundation': 'Fundação: Abril 2024',
        'about_founders_title': 'Sócios & Donos de Bar',
        'about_founders_text_1': 'A +TU Agência foi criada por Gabriel Costa, Guilherme Villani e Rogélio Alves.',
        'about_founders_text_2': 'Todos empresários do setor gastronômico, enfrentávamos o mesmo problema: "Agências que não acompanhavam o ritmo."',
        'about_fight_title': 'O que combatemos:',
        'about_fight_1': 'Criativos insuficientes',
        'about_fight_2': 'Campanhas fracas',
        'about_fight_3': 'Falta de estratégia real',
        'about_dna_title': 'DNA Operacional',
        'about_dna_desc': 'Foi dessa dor que nasceu a +TU. Uma agência criada por quem vive a operação, entende a pressão do faturamento e sabe como o marketing impacta o negócio.',
        'about_clients_title': 'Transformamos resultados para:',
        'client_type_1': 'Consultórios',
        'client_type_2': 'Clínicas',
        'client_type_3': 'Lojas de Varejo',
        'client_type_4': 'Lançamentos',
        'client_type_5': 'Profissionais Liberais',
        'client_type_special': 'Bares e Restaurantes',
        'client_badge': 'Especialidade',

        // PURPOSE
        'purpose_title_1': 'Seu negócio merece ser',
        'purpose_title_highlight_1': 'visto.',
        'purpose_title_2': 'E merece ser',
        'purpose_title_highlight_2': 'escolhido.',
        'purpose_text': 'Ajudamos marcas a saírem da disputa por atenção e entrarem no jogo certo:',
        'purpose_text_bold': 'o da preferência.',
        'purpose_tag_1': 'Estratégia',
        'purpose_tag_2': 'Criatividade',
        'purpose_tag_3': 'Execução Rápida',

        // SERVICES
        'services_title': 'Nossos Serviços',
        'services_subtitle': 'Tudo o que sua marca precisa para se tornar impossível de ignorar.',
        'service_1_title': 'Social Media Completo',
        'service_1_desc': 'Estratégia, legendas, roteiros, planejamento e calendário editorial.',
        'service_2_title': 'Designer Dedicado',
        'service_2_desc': 'Identidade visual, kits promocionais, posts, artes e campanhas com padrão profissional.',
        'service_3_title': 'Filmmaker / Vídeo',
        'service_3_desc': 'Reels, bastidores, captura de fotos profissional e vídeos de impacto.',
        'service_4_title': 'Gestão de Tráfego',
        'service_4_desc': 'Campanhas estratégicas para aumentar alcance, reservas, vendas e faturamento.',
        'service_5_title': 'Gerente de Contas',
        'service_5_desc': 'Atendimento próximo, organização, alinhamentos e entregas pontuais.',
        'service_6_title': 'Influenciadores',
        'service_6_desc': 'Conexão com criadores regionais para ampliar visibilidade e atrair novos clientes.',

        // DIFFERENTIALS (CARDS)
        'diff_title': 'Marketing que',
        'diff_title_highlight': 'abre portas.',
        'diff_title_2': 'De verdade.',
        'diff_subtitle': 'A',
        'diff_subtitle_2': 'não nasceu na teoria. Nasceu da prática e da necessidade de resultado todos os dias.',
        'diff_card_1_title': 'Criativos em alta frequência',
        'diff_card_1_desc': 'Volume com qualidade para sua marca não ser esquecida.',
        'diff_card_2_title': 'Estratégia orientada a vendas',
        'diff_card_2_desc': 'Converter seguidores em clientes reais.',
        'diff_card_3_title': 'Conteúdo que gera memorização',
        'diff_card_3_desc': 'Criamos narrativas que fixam na mente do seu consumidor.',
        'diff_card_4_title': 'Campanhas rápidas',
        'diff_card_4_desc': 'Execução ágil para aproveitar todas as oportunidades.',
        'diff_card_5_title': 'Linguagem alinhada',
        'diff_card_5_desc': 'Falamos a língua do seu público para gerar conexão.',
        'diff_card_6_title': 'Entregas consistentes',
        'diff_card_6_desc': 'Sem "desculpas de agência". Cumprimos o que prometemos.',

        // CASES
        'cases_pretitle': 'Performance Real',
        'cases_title_1': 'Resultados que',
        'cases_title_highlight': 'transformam o jogo.',
        'cases_subtitle': 'Não entregamos apenas posts. Entregamos métricas que fazem seu negócio crescer de verdade.',
        'cases_item_1_title': 'Crescimento de Presença',
        'cases_item_1_desc': 'Sua marca consolidada e com autoridade digital.',
        'cases_item_2_title': 'Aumento de Vendas',
        'cases_item_2_desc': 'Estratégias focadas em conversão e ROI positivo.',
        'cases_item_3_title': 'Máquina de Leads',
        'cases_item_3_desc': 'Mais reservas, orçamentos e clientes no WhatsApp.',
        'cases_item_4_title': 'Reposicionamento Visual',
        'cases_item_4_desc': 'Identidade profissional, moderna e consistente.',
        'cases_trust_title': 'Quem confia na +TU?',
        'cases_trust_subtitle': 'Expertise validada em diversos segmentos.',
        'cases_grid_1': 'Restaurantes & Bares',
        'cases_grid_2': 'Clínicas & Consultórios',
        'cases_grid_3': 'Lojas de Varejo',
        'cases_grid_4': 'Novas Marcas',
        'cases_grid_5_title': 'Empreendedores',
        'cases_grid_5_sub': 'Em fase de expansão',

        // CONTACT & FOOTER
        'contact_title_1': 'Chegou a hora de fazer sua marca ser',
        'contact_title_highlight': 'lembrada.',
        'contact_subtitle': 'Pare de gastar energia com o que não traz retorno. Atendemos negócios que buscam crescimento consistente, estratégia e presença real.',
        'contact_status': 'Agenda Aberta',
        'footer_about': 'Agência focada em performance e branding para negócios reais. Do balcão para o digital.',
        'footer_contact': 'Contato',
        'footer_rights': 'Todos os direitos reservados.'
    },
    'en': {
        // NAV
        'nav_about': 'About Us',
        'nav_services': 'Services',
        'nav_diff': 'Why +TU?',
        'nav_btn': 'Start Project',

        // HERO
        'hero_title_1': 'There is a',
        'hero_title_highlight': 'silent mistake',
        'hero_title_2': 'killing your brand\'s potential.',
        'hero_subtitle_1': 'If your business isn\'t remembered, it isn\'t chosen.',
        'hero_subtitle_2': 'was born to change that.',
        'hero_cta_text': 'Want to increase presence, sales, and differentiation?',
        'hero_btn': 'Talk to +TU',

        // ABOUT
        'about_title_1': 'We understand the pain',
        'about_title_highlight': 'you are living.',
        'about_subtitle': 'Because it was ours too.',
        'about_foundation': 'Founded: April 2024',
        'about_founders_title': 'Partners & Bar Owners',
        'about_founders_text_1': '+TU Agency was created by Gabriel Costa, Guilherme Villani, and Rogélio Alves.',
        'about_founders_text_2': 'All entrepreneurs in the gastronomy sector, we faced the same problem: "Agencies that couldn\'t keep up."',
        'about_fight_title': 'What we fight:',
        'about_fight_1': 'Insufficient creatives',
        'about_fight_2': 'Weak campaigns',
        'about_fight_3': 'Lack of real strategy',
        'about_dna_title': 'Operational DNA',
        'about_dna_desc': 'That\'s why +TU was born. An agency created by those who live the operation, understand the pressure of revenue, and know how marketing impacts the business.',
        'about_clients_title': 'We transform results for:',
        'client_type_1': 'Medical Offices',
        'client_type_2': 'Clinics',
        'client_type_3': 'Retail Stores',
        'client_type_4': 'Launches',
        'client_type_5': 'Liberal Professionals',
        'client_type_special': 'Bars and Restaurants',
        'client_badge': 'Specialty',

        // PURPOSE
        'purpose_title_1': 'Your business deserves to be',
        'purpose_title_highlight_1': 'seen.',
        'purpose_title_2': 'And deserves to be',
        'purpose_title_highlight_2': 'chosen.',
        'purpose_text': 'We help brands leave the fight for attention and enter the right game:',
        'purpose_text_bold': 'preference.',
        'purpose_tag_1': 'Strategy',
        'purpose_tag_2': 'Creativity',
        'purpose_tag_3': 'Fast Execution',

        // SERVICES
        'services_title': 'Our Services',
        'services_subtitle': 'Everything your brand needs to become impossible to ignore.',
        'service_1_title': 'Full Social Media',
        'service_1_desc': 'Strategy, captions, scripts, planning, and editorial calendar.',
        'service_2_title': 'Dedicated Designer',
        'service_2_desc': 'Visual identity, promotional kits, posts, art, and professional standard campaigns.',
        'service_3_title': 'Filmmaker / Video',
        'service_3_desc': 'Reels, behind the scenes, professional photo capture, and high-impact videos.',
        'service_4_title': 'Traffic Management',
        'service_4_desc': 'Strategic campaigns to increase reach, reservations, sales, and revenue.',
        'service_5_title': 'Account Manager',
        'service_5_desc': 'Close service, organization, alignments, and punctual deliveries.',
        'service_6_title': 'Influencers',
        'service_6_desc': 'Connection with regional creators to expand visibility and attract new customers.',

        // DIFFERENTIALS (CARDS)
        'diff_title': 'Marketing that',
        'diff_title_highlight': 'opens doors.',
        'diff_title_2': 'For real.',
        'diff_subtitle': '',
        'diff_subtitle_2': 'was not born in theory. It was born from practice and the need for results every day.',
        'diff_card_1_title': 'High-frequency creatives',
        'diff_card_1_desc': 'Volume with quality so your brand is not forgotten.',
        'diff_card_2_title': 'Sales-oriented strategy',
        'diff_card_2_desc': 'Convert followers into real customers.',
        'diff_card_3_title': 'Content that generates memorization',
        'diff_card_3_desc': 'We create narratives that stick in your consumer\'s mind.',
        'diff_card_4_title': 'Fast campaigns',
        'diff_card_4_desc': 'Agile execution to seize every opportunity.',
        'diff_card_5_title': 'Aligned language',
        'diff_card_5_desc': 'We speak your audience\'s language to generate connection.',
        'diff_card_6_title': 'Consistent deliveries',
        'diff_card_6_desc': 'No "agency excuses". We deliver what we promise.',

        // CASES
        'cases_pretitle': 'Real Performance',
        'cases_title_1': 'Results that',
        'cases_title_highlight': 'change the game.',
        'cases_subtitle': 'We don\'t just deliver posts. We deliver metrics that make your business grow for real.',
        'cases_item_1_title': 'Presence Growth',
        'cases_item_1_desc': 'Your brand consolidated and with digital authority.',
        'cases_item_2_title': 'Sales Increase',
        'cases_item_2_desc': 'Strategies focused on conversion and positive ROI.',
        'cases_item_3_title': 'Lead Machine',
        'cases_item_3_desc': 'More reservations, quotes, and clients on WhatsApp.',
        'cases_item_4_title': 'Visual Repositioning',
        'cases_item_4_desc': 'Professional, modern, and consistent identity.',
        'cases_trust_title': 'Who trusts +TU?',
        'cases_trust_subtitle': 'Expertise validated in various segments.',
        'cases_grid_1': 'Restaurants & Bars',
        'cases_grid_2': 'Clinics & Offices',
        'cases_grid_3': 'Retail Stores',
        'cases_grid_4': 'New Brands',
        'cases_grid_5_title': 'Entrepreneurs',
        'cases_grid_5_sub': 'In expansion phase',

        // CONTACT & FOOTER
        'contact_title_1': 'It\'s time to make your brand be',
        'contact_title_highlight': 'remembered.',
        'contact_subtitle': 'Stop wasting energy on what brings no return. We serve businesses looking for consistent growth, strategy, and real presence.',
        'contact_status': 'Open for Business',
        'footer_about': 'Agency focused on performance and branding for real businesses. From the counter to digital.',
        'footer_contact': 'Contact',
        'footer_rights': 'All rights reserved.'
    }
};

function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                // Se houver formatação HTML dentro da tradução no futuro, use innerHTML
                el.innerText = translations[lang][key];
            }
        }
    });

    const langIndicator = document.getElementById('lang-indicator');
    if (langIndicator) {
        langIndicator.innerHTML = lang === 'pt' ? '🇧🇷' : '🇺🇸';
    }

    localStorage.setItem('language', lang);
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
}


// 2. INICIALIZAÇÃO
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

    // 3. MENU MOBILE
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

    // 4. FADE IN
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

    // 5. DARK MODE
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

    // 6. LANGUAGE TOGGLE (NOVO)
    const langBtn = document.getElementById('lang-toggle-btn');
    let currentLang = localStorage.getItem('language') || 'pt';

    if (currentLang !== 'pt') {
        updateLanguage(currentLang);
    }

    if (langBtn) {
        langBtn.addEventListener('click', () => {
            currentLang = currentLang === 'pt' ? 'en' : 'pt';
            updateLanguage(currentLang);
        });
    }

    // 7. CARROSSEL INFINITO CONSTANTE + DRAG
    const sliderWrapper = document.getElementById('infinite-drag-wrapper');
    const track = document.getElementById('infinite-track');

    if (sliderWrapper && track) {
        let isDown = false;
        let startX;
        let scrollLeft;
        let animationId;
        
        // Configuração de Velocidade
        // Valor positivo = move para esquerda
        const speed = 0.8; 

        const autoScroll = () => {
            if (!isDown) { 
                sliderWrapper.scrollLeft += speed;
                
                // Lógica de Loop Infinito
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