// Инициализация при загрузке документа
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация табов
    initTabs();
    
    // Инициализация переключателя темы
    initThemeToggle();
    
    // Инициализация многоязычности
    initLanguageToggle();
    
    // Мобильное меню
    setupMobileMenu();
    
    // Анимации и эффекты
    initAnimations();
    
    // Контактная форма
    initContactForm();

    // Инициализация AOS (Animation On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });

    // Эффект прокрутки для шапки
    const header = document.querySelector('header');
    let scrolling = false;

    window.addEventListener('scroll', function() {
        scrolling = true;
    });

    setInterval(function() {
        if (scrolling) {
            scrolling = false;
            if (window.scrollY > 50) {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.background = 'white';
                header.style.boxShadow = 'none';
            }
        }
    }, 100);

    // Дополнительные анимации при прокрутке
    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        
        // Анимация для героя при прокрутке
        const hero = document.getElementById('hero');
        if (hero) {
            const heroHeight = hero.offsetHeight;
            const opacity = 1 - (scrollY / heroHeight * 1.5);
            
            if (opacity > 0) {
                hero.querySelector('.hero-content').style.opacity = opacity;
                hero.querySelector('.hero-content').style.transform = `translateY(${scrollY * 0.2}px)`;
            }
        }
    });

    // Эффекты наведения для элементов
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.service-icon');
            icon.style.transform = 'scale(1.2)';
            icon.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.service-icon');
            icon.style.transform = 'scale(1)';
        });
    });

    // GitHub интеграция
    fetchGitHubActivity();

    // Инициализация фильтров новостей
    initNewsFilters();
});

// Мобильное меню
function setupMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('open');
            
            const icon = this.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });
        
        // Закрытие меню при клике на пункт меню
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (nav.classList.contains('open')) {
                    nav.classList.remove('open');
                    
                    const icon = mobileMenuBtn.querySelector('i');
                    if (icon && icon.classList.contains('fa-times')) {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                }
            });
        });
    }
}

// Инициализация табов
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Убираем активный класс со всех кнопок и таб-панелей
            document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
            
            // Добавляем активный класс текущей кнопке и соответствующей панели
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// Управление темой (темная/светлая)
function initThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
    // Устанавливаем начальную тему
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.body.classList.toggle('light-theme', savedTheme === 'light');
    updateThemeIcon(savedTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            document.body.classList.toggle('light-theme', newTheme === 'light');
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }
}

// Обновление иконки темы
function updateThemeIcon(theme) {
    const themeIcon = document.querySelector('.theme-toggle i');
    if (themeIcon) {
        if (theme === 'dark') {
            themeIcon.className = 'fas fa-sun';
        } else {
            themeIcon.className = 'fas fa-moon';
        }
    }
}

// Управление языком (русский/английский)
function initLanguageToggle() {
    const langToggle = document.querySelector('.lang-toggle');
    const savedLang = localStorage.getItem('language') || 'ru';
    
    // Устанавливаем начальный язык
    document.documentElement.setAttribute('data-lang', savedLang);
    
    if (langToggle) {
        langToggle.addEventListener('click', function() {
            const currentLang = document.documentElement.getAttribute('data-lang');
            const newLang = currentLang === 'ru' ? 'en' : 'ru';
            
            document.documentElement.setAttribute('data-lang', newLang);
            localStorage.setItem('language', newLang);
            
            // Обновляем тексты на странице
            updatePageTexts(newLang);
        });
    }
}

// Обновление текстов на странице
function updatePageTexts(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[key] && translations[key][lang]) {
            element.textContent = translations[key][lang];
        }
    });
}

// Инициализация анимаций
function initAnimations() {
    // Анимация при скролле
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const handleScroll = () => {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight * 0.9) {
                element.classList.add('visible');
            }
        });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Запускаем один раз для элементов, видимых сразу
    
    // Анимация счетчика для статистики
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(statNumber => {
        const targetValue = parseInt(statNumber.textContent.replace(/[^0-9]/g, ''), 10);
        const duration = 2000; // 2 секунды
        const startTime = Date.now();
        const endTime = startTime + duration;
        
        const formatNumber = (num) => {
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        };
        
        const updateCounter = () => {
            const now = Date.now();
            const timeLeft = Math.max(0, endTime - now);
            const progress = 1 - timeLeft / duration;
            
            const currentValue = Math.floor(progress * targetValue);
            
            let formattedValue = formatNumber(currentValue);
            if (statNumber.textContent.includes('+')) {
                formattedValue += '+';
            }
            
            statNumber.textContent = formattedValue;
            
            if (timeLeft > 0) {
                requestAnimationFrame(updateCounter);
            }
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    requestAnimationFrame(updateCounter);
                    observer.unobserve(statNumber);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(statNumber);
    });
}

// Инициализация контактной формы
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Здесь будет код для отправки формы
            alert('Форма отправлена!');
            contactForm.reset();
        });
    }
}

// Эффект прокрутки для шапки
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Слайдер продуктов
const productSlider = document.querySelector('.product-slider');
const slides = document.querySelectorAll('.product-slide');

if (productSlider && slides.length > 0) {
    let currentSlide = 0;
    const sliderDots = document.querySelector('.slider-dots');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    // Создаем точки для слайдера
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        if (index === 0) dot.classList.add('active');
        
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
        
        sliderDots.appendChild(dot);
    });
    
    // Функция показа слайда
    function goToSlide(index) {
        // Скрываем все слайды
        slides.forEach(slide => {
            slide.style.display = 'none';
        });
        
        // Показываем текущий слайд
        slides[index].style.display = 'flex';
        
        // Обновляем активную точку
        document.querySelectorAll('.slider-dot').forEach((dot, idx) => {
            dot.classList.toggle('active', idx === index);
        });
        
        currentSlide = index;
    }
    
    // Показываем первый слайд
    goToSlide(0);
    
    // Кнопки переключения слайдов
    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        goToSlide(currentSlide);
    });
    
    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        goToSlide(currentSlide);
    });
    
    // Автоматическое переключение слайдов
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        goToSlide(currentSlide);
    }, 5000);
}

// Модальное окно загрузки файлов
const downloadButtons = document.querySelectorAll('.download-btn');
const fileDownloadModal = document.getElementById('file-download-modal');
const closeModal = document.querySelector('.close-modal');
const fileNameSpan = document.getElementById('file-name');
const confirmDownload = document.getElementById('confirm-download');
const cancelDownload = document.getElementById('cancel-download');

let currentFileToDownload = null;

downloadButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const filePath = this.getAttribute('data-file');
        const fileName = filePath.split('/').pop();
        
        currentFileToDownload = filePath;
        fileNameSpan.textContent = fileName;
        
        fileDownloadModal.style.display = 'flex';
    });
});

if (closeModal) {
    closeModal.addEventListener('click', () => {
        fileDownloadModal.style.display = 'none';
    });
}

if (cancelDownload) {
    cancelDownload.addEventListener('click', () => {
        fileDownloadModal.style.display = 'none';
    });
}

if (confirmDownload) {
    confirmDownload.addEventListener('click', () => {
        if (currentFileToDownload) {
            // Здесь можно добавить логику для инициирования загрузки
            // В реальном проекте это может быть обращение к API или прямая ссылка
            window.location.href = currentFileToDownload;
            
            // Закрываем модальное окно
            fileDownloadModal.style.display = 'none';
        }
    });
}

// Обработка клика вне модального окна
window.addEventListener('click', (e) => {
    if (e.target === fileDownloadModal) {
        fileDownloadModal.style.display = 'none';
    }
});

// Дополнительные анимации при прокрутке
window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    
    // Анимация для героя при прокрутке
    const hero = document.getElementById('hero');
    if (hero) {
        const heroHeight = hero.offsetHeight;
        const opacity = 1 - (scrollY / heroHeight * 1.5);
        
        if (opacity > 0) {
            hero.querySelector('.hero-content').style.opacity = opacity;
            hero.querySelector('.hero-content').style.transform = `translateY(${scrollY * 0.2}px)`;
        }
    }
});

// Эффекты наведения для элементов
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.service-icon');
        icon.style.transform = 'scale(1.2)';
        icon.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.service-icon');
        icon.style.transform = 'scale(1)';
    });
});

// Переводы для многоязычности
const translations = {
    // Меню
    menu_home: {
        ru: 'Главная',
        en: 'Home'
    },
    menu_products: {
        ru: 'Продукты',
        en: 'Products'
    },
    menu_features: {
        ru: 'Возможности',
        en: 'Features'
    },
    menu_partners: {
        ru: 'Партнеры',
        en: 'Partners'
    },
    menu_about: {
        ru: 'О нас',
        en: 'About'
    },
    menu_contact: {
        ru: 'Контакты',
        en: 'Contact'
    },
    menu_github: {
        ru: 'GitHub',
        en: 'GitHub'
    },
    
    // Герой секция
    hero_title: {
        ru: 'Создавайте цифровую магию',
        en: 'Create Digital Magic'
    },
    hero_subtitle: {
        ru: 'Инновационные инструменты для современных творцов цифрового мира',
        en: 'Innovative tools for modern creators of the digital world'
    },
    hero_button_explore: {
        ru: 'Изучить программы',
        en: 'Explore Tools'
    },
    hero_button_itch: {
        ru: 'Посетить itch.io',
        en: 'Visit itch.io'
    },
    
    // Продукты
    products_title: {
        ru: 'Наши продукты',
        en: 'Our Products'
    },
    products_subtitle: {
        ru: 'Мощные инструменты для разработчиков и креаторов',
        en: 'Powerful tools for developers and creators'
    },
    
    // Табы
    tab_styloPoly: {
        ru: 'StyloPoly',
        en: 'StyloPoly'
    },
    tab_ctg: {
        ru: 'CTG',
        en: 'CTG'
    },
    tab_aetherScript: {
        ru: 'AetherScript',
        en: 'AetherScript'
    },
    tab_lazip: {
        ru: 'Lazip',
        en: 'Lazip'
    },
    tab_serenade: {
        ru: 'Serenade',
        en: 'Serenade'
    },
    tab_aligeSys: {
        ru: 'Alige Sys',
        en: 'Alige Sys'
    },
    
    // StyloPoly
    product_styloPoly_desc: {
        ru: 'Мощный аддон для Blender, который упрощает создание Low-Poly моделей.',
        en: 'Powerful Blender addon that simplifies Low-Poly modeling.'
    },
    product_styloPoly_feature1: {
        ru: 'Простые инструменты для Low-Poly моделирования',
        en: 'Simple tools for Low-Poly modeling'
    },
    product_styloPoly_feature2: {
        ru: 'Автоматическая оптимизация моделей',
        en: 'Automatic model optimization'
    },
    product_styloPoly_feature3: {
        ru: 'Встроенные текстурные инструменты',
        en: 'Built-in texturing tools'
    },
    
    // CTG
    product_ctg_desc: {
        ru: 'Генератор шаблонов кода для C++, который ускоряет разработку проектов.',
        en: 'C++ Code Template Generator that speeds up project development.'
    },
    product_ctg_feature1: {
        ru: 'Предварительно настроенные шаблоны для различных типов проектов',
        en: 'Pre-configured templates for various project types'
    },
    product_ctg_feature2: {
        ru: 'Автоматическое создание структуры проекта',
        en: 'Automatic project structure creation'
    },
    product_ctg_feature3: {
        ru: 'Интеграция с популярными IDE',
        en: 'Integration with popular IDEs'
    },
    
    // AetherScript
    product_aetherScript_desc: {
        ru: 'Современный язык программирования с простым синтаксисом и мощными возможностями.',
        en: 'A modern programming language with simple syntax and powerful features.'
    },
    product_aetherScript_feature1: {
        ru: 'Простой и интуитивно понятный синтаксис',
        en: 'Simple and intuitive syntax'
    },
    product_aetherScript_feature2: {
        ru: 'Встроенные инструменты для параллельных вычислений',
        en: 'Built-in tools for parallel computing'
    },
    product_aetherScript_feature3: {
        ru: 'Расширенная система типов',
        en: 'Advanced type system'
    },
    
    // Lazip
    product_lazip_desc: {
        ru: 'Инновационный компрессор файлов, который сжимает даже уже сжатые архивы.',
        en: 'Innovative file compressor that compresses even already compressed archives.'
    },
    product_lazip_feature1: {
        ru: 'Дополнительное сжатие существующих zip-архивов',
        en: 'Additional compression of existing zip archives'
    },
    product_lazip_feature2: {
        ru: 'Продвинутые алгоритмы компрессии',
        en: 'Advanced compression algorithms'
    },
    product_lazip_feature3: {
        ru: 'Простой и понятный интерфейс',
        en: 'Simple and intuitive interface'
    },
    
    // Serenade
    product_serenade_desc: {
        ru: 'Простой и элегантный музыкальный плеер для macOS с уникальными функциями.',
        en: 'Simple and elegant music player for macOS with unique features.'
    },
    product_serenade_feature1: {
        ru: 'Минималистичный дизайн и простое управление',
        en: 'Minimalist design and simple controls'
    },
    product_serenade_feature2: {
        ru: 'Продвинутые функции обработки звука',
        en: 'Advanced audio processing features'
    },
    product_serenade_feature3: {
        ru: 'Интеграция с облачными музыкальными сервисами',
        en: 'Integration with cloud music services'
    },
    
    // Alige Sys
    product_aligeSys_desc: {
        ru: 'Продвинутый оптимизатор для Windows, который улучшает производительность системы.',
        en: 'Advanced Windows optimizer that improves system performance.'
    },
    product_aligeSys_feature1: {
        ru: 'Автоматическая оптимизация системных служб',
        en: 'Automatic optimization of system services'
    },
    product_aligeSys_feature2: {
        ru: 'Очистка системы от ненужных файлов',
        en: 'System cleanup from unnecessary files'
    },
    product_aligeSys_feature3: {
        ru: 'Инструменты для улучшения производительности игр',
        en: 'Tools to improve game performance'
    },
    
    // Общее
    product_download: {
        ru: 'Скачать',
        en: 'Download'
    },
    
    // Особенности
    features_title: {
        ru: 'Ключевые особенности',
        en: 'Key Features'
    },
    features_subtitle: {
        ru: 'Что делает наши продукты уникальными',
        en: 'What makes our products unique'
    },
    
    // Партнеры
    partners_title: {
        ru: 'Наши партнеры',
        en: 'Our Partners'
    },
    partners_subtitle: {
        ru: 'Компании, которые нам доверяют',
        en: 'Companies that trust us'
    },
    
    // О нас
    about_title: {
        ru: 'О нас',
        en: 'About Us'
    },
    about_text1: {
        ru: 'Nicet - это команда опытных разработчиков и дизайнеров, создающих инновационные программные инструменты для разработчиков, дизайнеров и креативных профессионалов.',
        en: 'Nicet is a team of experienced developers and designers creating innovative software tools for developers, designers, and creative professionals.'
    },
    about_text2: {
        ru: 'Наша миссия - упростить и автоматизировать рабочие процессы, позволяя творческим людям сосредоточиться на создании удивительных продуктов без лишних технических сложностей.',
        en: 'Our mission is to simplify and automate workflows, allowing creative people to focus on creating amazing products without unnecessary technical complexities.'
    },
    about_stat1: {
        ru: 'Лет опыта',
        en: 'Years of experience'
    },
    about_stat2: {
        ru: 'Довольных пользователей',
        en: 'Happy users'
    },
    about_stat3: {
        ru: 'Продуктов в портфолио',
        en: 'Products in portfolio'
    },
    
    // Контакты
    contact_title: {
        ru: 'Свяжитесь с нами',
        en: 'Contact Us'
    },
    contact_subtitle: {
        ru: 'Есть вопросы или предложения? Напишите нам!',
        en: 'Have questions or suggestions? Write to us!'
    },
    contact_name: {
        ru: 'Имя',
        en: 'Name'
    },
    contact_email: {
        ru: 'Email',
        en: 'Email'
    },
    contact_subject: {
        ru: 'Тема',
        en: 'Subject'
    },
    contact_message: {
        ru: 'Сообщение',
        en: 'Message'
    },
    contact_send: {
        ru: 'Отправить',
        en: 'Send'
    },
    contact_address_title: {
        ru: 'Адрес',
        en: 'Address'
    },
    contact_address: {
        ru: 'ул. Технологическая 123, Москва, Россия',
        en: '123 Technology St, Moscow, Russia'
    },
    contact_email_title: {
        ru: 'Email',
        en: 'Email'
    },
    contact_phone_title: {
        ru: 'Телефон',
        en: 'Phone'
    },
    
    // Футер
    footer_slogan: {
        ru: 'Преобразуем креативность в цифровую реальность',
        en: 'Transforming creativity into digital reality'
    },
    footer_company: {
        ru: 'Компания',
        en: 'Company'
    },
    footer_about: {
        ru: 'О нас',
        en: 'About'
    },
    footer_team: {
        ru: 'Команда',
        en: 'Team'
    },
    footer_careers: {
        ru: 'Карьера',
        en: 'Careers'
    },
    footer_news: {
        ru: 'Новости',
        en: 'News'
    },
    footer_products: {
        ru: 'Продукты',
        en: 'Products'
    },
    footer_support: {
        ru: 'Поддержка',
        en: 'Support'
    },
    footer_docs: {
        ru: 'Документация',
        en: 'Documentation'
    },
    footer_faq: {
        ru: 'FAQ',
        en: 'FAQ'
    },
    footer_contact: {
        ru: 'Контакты',
        en: 'Contact'
    },
    footer_privacy: {
        ru: 'Конфиденциальность',
        en: 'Privacy'
    },
    footer_copyright: {
        ru: '© 2025 Nicet. Все права защищены.',
        en: '© 2025 Nicet. All rights reserved.'
    },
    footer_terms: {
        ru: 'Условия использования',
        en: 'Terms of Use'
    },
    footer_privacy_policy: {
        ru: 'Политика конфиденциальности',
        en: 'Privacy Policy'
    },
    footer_sitemap: {
        ru: 'Карта сайта',
        en: 'Sitemap'
    },
    github_view_profile: {
        ru: 'Посетить GitHub',
        en: 'Visit GitHub'
    },
    github_recent_activity: {
        ru: 'Недавняя активность на GitHub',
        en: 'Recent GitHub Activity'
    },
    github_days_ago: {
        ru: 'дней назад',
        en: 'days ago'
    }
};

// Интеграция с GitHub API
function fetchGitHubActivity() {
    const githubFeed = document.querySelector('.github-feed');
    if (!githubFeed) return;
    
    // Аккаунт Nicetink на GitHub
    const githubAccount = 'Nicetink';
    
    // Попытка загрузить активность через GitHub API
    // Примечание: Для реального использования API, вам потребуется токен
    fetchGitHubActivityMock();
    
    // Функция имитации загрузки активности с GitHub
    function fetchGitHubActivityMock() {
        const recentActivity = [
            {
                repo: 'Nicetink/AetherScript',
                message: 'Добавлены новые функции для параллельной обработки данных',
                date: '2 дня назад',
                url: 'https://github.com/Nicetink/AetherScript'
            },
            {
                repo: 'Nicetink/System-Spy-X',
                message: 'Исправлены ошибки в модуле мониторинга компонентов ПК',
                date: '5 дней назад',
                url: 'https://github.com/Nicetink/System-Spy-X'
            },
            {
                repo: 'Nicetink/studiosite',
                message: 'Обновлен дизайн и добавлена поддержка мобильных устройств',
                date: 'неделю назад',
                url: 'https://github.com/Nicetink/studiosite'
            }
        ];
        
        // Очищаем контейнер
        githubFeed.innerHTML = '';
        
        // Добавляем активность
        recentActivity.forEach(activity => {
            const commitElement = document.createElement('div');
            commitElement.className = 'github-commit';
            
            commitElement.innerHTML = `
                <i class="fab fa-github"></i>
                <div class="commit-info">
                    <p class="commit-message">${activity.message}</p>
                    <a href="${activity.url}" target="_blank" class="commit-repo">${activity.repo}</a>
                    <span class="commit-date">${activity.date}</span>
                </div>
            `;
            
            githubFeed.appendChild(commitElement);
        });
        
        // Обновляем ссылку на GitHub
        const githubLinks = document.querySelectorAll('a[href*="github.com/nicet-studio"]');
        githubLinks.forEach(link => {
            link.href = `https://github.com/${githubAccount}`;
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        });
    }
    
    // Функция для реального API (для использования в продакшен)
    // Раскомментируйте и настройте для рабочего сайта
    /*
    async function fetchGitHubActivityLive() {
        try {
            // Получаем последние события пользователя или организации
            const response = await fetch(`https://api.github.com/users/${githubAccount}/events`);
            if (!response.ok) throw new Error('Failed to fetch GitHub activity');
            
            const events = await response.json();
            const pushEvents = events.filter(event => event.type === 'PushEvent').slice(0, 3);
            
            // Очищаем контейнер
            githubFeed.innerHTML = '';
            
            if (pushEvents.length === 0) {
                // Если нет событий, показываем сообщение
                githubFeed.innerHTML = '<p>Нет недавней активности</p>';
                return;
            }
            
            // Добавляем активность
            pushEvents.forEach(event => {
                const repo = event.repo.name;
                const commitMessage = event.payload.commits[0].message;
                const date = new Date(event.created_at);
                const timeAgo = getTimeAgo(date);
                const url = `https://github.com/${repo}/commit/${event.payload.commits[0].sha}`;
                
                const commitElement = document.createElement('div');
                commitElement.className = 'github-commit';
                
                commitElement.innerHTML = `
                    <i class="fab fa-github"></i>
                    <div class="commit-info">
                        <p class="commit-message">${commitMessage}</p>
                        <a href="${url}" target="_blank" class="commit-repo">${repo}</a>
                        <span class="commit-date">${timeAgo}</span>
                    </div>
                `;
                
                githubFeed.appendChild(commitElement);
            });
        } catch (error) {
            console.error('Error fetching GitHub activity:', error);
            githubFeed.innerHTML = '<p>Не удалось загрузить активность с GitHub</p>';
        }
    }
    
    // Функция для получения времени в формате "X дней назад"
    function getTimeAgo(date) {
        const now = new Date();
        const diffMs = now - date;
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        
        if (diffDays === 0) return 'сегодня';
        if (diffDays === 1) return 'вчера';
        if (diffDays < 7) return `${diffDays} дней назад`;
        if (diffDays < 30) return `${Math.floor(diffDays / 7)} недель назад`;
        return `${Math.floor(diffDays / 30)} месяцев назад`;
    }
    */
}

// Инициализация фильтров новостей
function initNewsFilters() {
    const newsFilters = document.querySelectorAll('.news-filter');
    const newsCards = document.querySelectorAll('.news-card');
    
    if (!newsFilters.length || !newsCards.length) return;
    
    newsFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            // Удаляем класс active у всех фильтров
            newsFilters.forEach(f => f.classList.remove('active'));
            
            // Добавляем класс active текущему фильтру
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            // Фильтруем карточки новостей
            newsCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                // Показываем все карточки или только с определенной категорией
                if (filterValue === 'all' || filterValue === category) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Инициализация пагинации новостей
    const paginationButtons = document.querySelectorAll('.news-pagination .pagination-btn');
    if (paginationButtons.length) {
        paginationButtons.forEach(button => {
            if (!button.disabled) {
                button.addEventListener('click', function() {
                    // Убираем класс active со всех кнопок
                    paginationButtons.forEach(btn => btn.classList.remove('active'));
                    
                    // Добавляем класс active текущей кнопке
                    this.classList.add('active');
                    
                    // В реальном проекте здесь будет загрузка следующей страницы новостей
                    // Для демонстрации просто прокручиваем страницу вверх к блоку новостей
                    window.scrollTo({
                        top: document.querySelector('.news-section').offsetTop - 100,
                        behavior: 'smooth'
                    });
                });
            }
        });
    }
} 