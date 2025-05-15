// Инициализация анимаций при загрузке
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация блобов
    initBlobs();
    
    // Инициализация параллакс-эффекта
    initParallax();
    
    // Эффекты для карточек
    initCardEffects();
    
    // Анимированное появление элементов
    initScrollReveal();
    
    // Анимации при скролле
    initScrollAnimations();
    
    // Эффект параллакса
    initParallaxEffect();
    
    // Эффекты при наведении на кнопки
    initButtonHoverEffects();
    
    // Активация всех карточек особенностей сразу
    activateAllFeatureCards();
});

// Функция для активации всех карточек особенностей сразу при загрузке
function activateAllFeatureCards() {
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        const icon = card.querySelector('.feature-icon');
        if (icon) {
            // Применяем эффект сразу
            icon.style.transform = 'scale(1.1) rotate(5deg)';
            card.classList.add('active');
        }
    });
}

// Функция для анимации блобов
function initBlobs() {
    const blobContainers = document.querySelectorAll('.blob-container');
    
    blobContainers.forEach(container => {
        // Создаем несколько блобов внутри контейнера
        for (let i = 0; i < 3; i++) {
            const blob = document.createElement('div');
            blob.className = 'blob';
            
            // Случайный размер
            const size = Math.floor(Math.random() * 200) + 100;
            blob.style.width = `${size}px`;
            blob.style.height = `${size}px`;
            
            // Случайная позиция
            blob.style.left = `${Math.random() * 80}%`;
            blob.style.top = `${Math.random() * 80}%`;
            
            // Случайный цвет
            const colors = ['primary', 'secondary', 'accent'];
            blob.classList.add(`blob-${colors[i % colors.length]}`);
            
            // Случайная анимация
            const duration = Math.floor(Math.random() * 20) + 15;
            blob.style.animationDuration = `${duration}s`;
            
            container.appendChild(blob);
        }
    });
}

// Функция анимации конкретного блоба
function animateBlob(blob, index) {
    // Разные параметры для разных блобов
    const duration = 12000 + index * 2000; // Разная длительность для каждого блоба
    const startTime = performance.now();
    
    // Радиус движения
    const radiusX = 30 + index * 5;
    const radiusY = 20 + index * 5;
    
    // Функция анимации
    function animate(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = (elapsed % duration) / duration;
        
        // Вычисляем новую позицию по синусоиде
        const angle = progress * Math.PI * 2;
        const x = Math.sin(angle) * radiusX;
        const y = Math.cos(angle) * radiusY;
        
        // Применяем трансформацию
        blob.style.transform = `translate(${x}px, ${y}px)`;
        
        // Продолжаем анимацию
        requestAnimationFrame(animate);
    }
    
    // Запускаем анимацию
    requestAnimationFrame(animate);
}

// Инициализация параллакс-эффекта
function initParallax() {
    // Находим все элементы с параллакс-эффектом
    const heroSection = document.querySelector('.hero');
    
    if (heroSection) {
        const heroContent = heroSection.querySelector('.hero-content');
        const heroImage = heroSection.querySelector('.hero-image');
        
        // Обработчик движения мыши
        document.addEventListener('mousemove', function(e) {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            // Эффект параллакса для текста
            if (heroContent) {
                heroContent.style.transform = `translate(${mouseX * -15}px, ${mouseY * -15}px)`;
            }
            
            // Эффект для изображения
            if (heroImage) {
                heroImage.style.transform = `translate(${mouseX * 20}px, ${mouseY * 20}px)`;
            }
        });
    }
    
    // Параллакс при прокрутке
    window.addEventListener('scroll', function() {
        const scrollTop = window.scrollY;
        
        // Эффект параллакса для всех секций
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const distance = sectionTop - scrollTop;
            
            // Только если секция видна
            if (distance < window.innerHeight && distance > -section.offsetHeight) {
                const background = section.querySelector('.blob-animation');
                
                if (background) {
                    // Эффект для фона
                    const speed = 0.1;
                    const yPos = distance * speed;
                    background.style.transform = `translateY(${yPos}px)`;
                }
            }
        });
    });
}

// Инициализация эффектов для карточек
function initCardEffects() {
    // Эффект свечения при наведении на карточки продуктов
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const cardBounds = this.getBoundingClientRect();
            
            // Создаем эффект свечения
            this.style.background = `
                radial-gradient(
                    circle at ${event.clientX - cardBounds.left}px ${event.clientY - cardBounds.top}px,
                    rgba(93, 79, 255, 0.1),
                    transparent 80%
                ),
                var(--surface-1-color)
            `;
        });
        
        card.addEventListener('mousemove', function(event) {
            const cardBounds = this.getBoundingClientRect();
            
            // Обновляем позицию свечения
            this.style.background = `
                radial-gradient(
                    circle at ${event.clientX - cardBounds.left}px ${event.clientY - cardBounds.top}px,
                    rgba(93, 79, 255, 0.1),
                    transparent 80%
                ),
                var(--surface-1-color)
            `;
        });
        
        card.addEventListener('mouseleave', function() {
            // Удаляем эффект свечения
            this.style.background = 'var(--surface-1-color)';
        });
    });
    
    // Удаляем эффекты наведения для карточек особенностей, так как они теперь активны сразу
}

// Плавное появление элементов при прокрутке
function initScrollReveal() {
    // Наблюдатель за пересечением элементов с зоной видимости
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Добавляем класс для анимации
                entry.target.classList.add('revealed');
                
                // Прекращаем отслеживание элемента после его появления
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Элемент будет анимирован, когда 10% его станет видно
    });
    
    // Отслеживаем все элементы, которые нужно анимировать
    const elements = document.querySelectorAll('.feature-card, .product-card, .partner-logo, .contact-card');
    
    elements.forEach(element => {
        // Добавляем начальные стили
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        // Начинаем отслеживать элемент
        observer.observe(element);
        
        // Добавляем обработчик события для изменения стилей
        element.addEventListener('transitionend', function() {
            if (this.classList.contains('revealed')) {
                this.style.opacity = '1';
                this.style.transform = 'translateY(0)';
            }
        });
    });
}

// Функция для создания эффекта движущихся частиц
function createParticles(container, count) {
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Случайные параметры для частиц
        const size = Math.random() * 5 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
        // Применяем стили
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        
        // Добавляем частицу в контейнер
        container.appendChild(particle);
    }
}

// Создаем анимированные частицы для фона героя
window.addEventListener('load', function() {
    const heroSection = document.querySelector('.hero');
    
    if (heroSection) {
        // Создаем контейнер для частиц
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles-container';
        
        // Добавляем контейнер
        heroSection.appendChild(particlesContainer);
        
        // Создаем частицы
        createParticles(particlesContainer, 30);
    }
});

// Анимации при скролле
function initScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    const slideElements = document.querySelectorAll('.slide-in');
    const scaleElements = document.querySelectorAll('.scale-in');
    
    const isElementInView = (element, offset = 0.2) => {
        const elementPosition = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        return (
            elementPosition.top <= windowHeight * (1 - offset) &&
            elementPosition.bottom >= 0
        );
    };
    
    const handleScrollAnimation = () => {
        // Анимация появления
        fadeElements.forEach(element => {
            if (isElementInView(element)) {
                element.classList.add('visible');
            }
        });
        
        // Анимация слайда
        slideElements.forEach(element => {
            if (isElementInView(element)) {
                element.classList.add('visible');
            }
        });
        
        // Анимация масштабирования
        scaleElements.forEach(element => {
            if (isElementInView(element)) {
                element.classList.add('visible');
            }
        });
    };
    
    // Запускаем анимацию один раз при загрузке
    handleScrollAnimation();
    
    // Запускаем анимацию при скролле
    window.addEventListener('scroll', handleScrollAnimation);
}

// Эффект параллакса
function initParallaxEffect() {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    const handleParallax = () => {
        const scrollTop = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = element.getAttribute('data-speed') || 0.5;
            const position = scrollTop * speed;
            
            element.style.transform = `translateY(${position}px)`;
        });
    };
    
    window.addEventListener('scroll', handleParallax);
}

// Эффекты при наведении на кнопки
function initButtonHoverEffects() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            this.style.setProperty('--x', `${x}px`);
            this.style.setProperty('--y', `${y}px`);
            this.classList.add('pulse');
        });
        
        button.addEventListener('mouseleave', function() {
            this.classList.remove('pulse');
        });
    });
}

// Анимация счетчиков для статистики
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 секунды
        const startTime = Date.now();
        const endTime = startTime + duration;
        
        const updateCounter = () => {
            const currentTime = Date.now();
            const remaining = Math.max(0, endTime - currentTime) / duration;
            const value = Math.floor(target - (remaining * target));
            
            counter.textContent = value;
            
            if (remaining > 0) {
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// Анимация волны для секций
function createWave(container, color, opacity, delay) {
    const wave = document.createElement('div');
    wave.className = 'wave';
    wave.style.setProperty('--wave-color', color);
    wave.style.setProperty('--wave-opacity', opacity);
    wave.style.animationDelay = `${delay}s`;
    
    container.appendChild(wave);
}

function initWaves() {
    const waveContainers = document.querySelectorAll('.wave-container');
    
    waveContainers.forEach(container => {
        createWave(container, 'var(--primary)', '0.3', 0);
        createWave(container, 'var(--secondary)', '0.2', 1.5);
        createWave(container, 'var(--accent)', '0.1', 3);
    });
} 