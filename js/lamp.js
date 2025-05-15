/* Интерактивная лампа идей */

document.addEventListener('DOMContentLoaded', function() {
    initLamp();
    createParticles();
});

// Инициализация лампы идей
function initLamp() {
    const lampContainer = document.querySelector('.idea-lamp-container');
    const ideaPopup = document.querySelector('.idea-popup');
    const closeButton = document.querySelector('.close-idea');
    const ideaText = document.getElementById('random-idea');
    
    if (!lampContainer || !ideaPopup || !closeButton || !ideaText) return;
    
    // Клик по лампе
    lampContainer.addEventListener('click', function() {
        const randomIdea = getRandomIdea();
        ideaText.textContent = randomIdea;
        ideaPopup.classList.add('active');
        
        // Анимируем лампу
        const lamp = this.querySelector('.idea-lamp');
        lamp.style.transform = 'scale(1.2)';
        lamp.style.boxShadow = '0 0 30px var(--cursor-primary)';
        
        setTimeout(() => {
            lamp.style.transform = 'scale(1)';
            lamp.style.boxShadow = '';
        }, 300);
    });
    
    // Закрыть идею
    closeButton.addEventListener('click', function(e) {
        e.stopPropagation();
        ideaPopup.classList.remove('active');
    });
    
    // Закрытие по клику вне попапа
    document.addEventListener('click', function(e) {
        if (!lampContainer.contains(e.target) && !ideaPopup.contains(e.target)) {
            ideaPopup.classList.remove('active');
        }
    });
}

// Генерация случайной идеи проекта
function getRandomIdea() {
    const ideas = [
        "Создайте генератор 3D-моделей на основе текстового описания",
        "Разработайте плагин для браузера, который анализирует достоверность новостей",
        "Создайте приложение для обмена навыками между людьми",
        "Разработайте игру, где механика основана на принципах физики",
        "Создайте систему умного дома с голосовым управлением",
        "Разработайте алгоритм для автоматической генерации музыки",
        "Создайте приложение для планирования путешествий по необычным местам",
        "Разработайте платформу для совместного решения сложных задач программирования",
        "Создайте инструмент для визуализации алгоритмов машинного обучения",
        "Разработайте приложение для отслеживания экологического следа",
        "Создайте генератор рецептов на основе имеющихся ингредиентов",
        "Разработайте сервис для аналитики сна и улучшения его качества",
        "Создайте виртуального персонального тренера с ИИ",
        "Разработайте платформу для обмена идеями между предпринимателями",
        "Создайте инструмент для автоматизации рутинных задач в процессе разработки",
        "Разработайте систему для анализа и оптимизации энергопотребления",
        "Создайте приложение для изучения языков с использованием AR",
        "Разработайте децентрализованную социальную сеть",
        "Создайте инструмент для создания интерактивных презентаций",
        "Разработайте платформу для сотрудничества между художниками и программистами",
        "Создайте систему персонализированного обучения на основе ИИ",
        "Разработайте приложение для улучшения психического здоровья",
        "Создайте инструмент для автоматического рефакторинга кода",
        "Разработайте платформу для виртуальных выставок и галерей",
        "Создайте приложение для управления личными финансами с предсказанием расходов",
        "Разработайте цифровой сад, где растения растут на основе вашей активности",
        "Создайте синтезатор голоса с эмоциональной окраской",
        "Разработайте систему для мониторинга и анализа качества воздуха",
        "Создайте приложение для поиска и обмена редкими предметами коллекционирования",
        "Разработайте платформу для коллаборативного написания историй",
        "Создайте инструмент для генерации уникальных шрифтов",
        "Разработайте сервис для обмена навыками и услугами без денег",
        "Создайте приложение для распознавания растений и уходу за ними",
        "Разработайте интерактивную карту культурного наследия вашего города",
        "Создайте систему для анализа эмоционального тона в текстах и сообщениях",
        "Разработайте инструмент для создания интерактивных учебных материалов",
        "Создайте приложение для совместного слушания музыки в реальном времени",
        "Разработайте платформу для проведения виртуальных хакатонов",
        "Создайте генератор персонажей для настольных ролевых игр",
        "Разработайте приложение для автоматизации офисных задач",
        "Создайте инструмент для визуализации музыки в реальном времени",
        "Разработайте сервис для поиска единомышленников по интересам",
        "Создайте систему для управления умным гардеробом",
        "Разработайте платформу для обмена идеями по устойчивому развитию",
        "Создайте приложение для организации групповых путешествий",
        "Разработайте инструмент для создания интерактивных книг",
        "Создайте систему для мониторинга здоровья домашних животных",
        "Разработайте платформу для обучения программированию через игры",
        "Создайте приложение для поиска и поддержки локальных производителей",
        "Разработайте инструмент для создания и проведения виртуальных экскурсий"
    ];
    
    const randomIndex = Math.floor(Math.random() * ideas.length);
    return ideas[randomIndex];
}

// Создание частиц для фона
function createParticles() {
    const container = document.querySelector('.particles-container');
    if (!container) return;
    
    const particlesCount = 120;
    
    for (let i = 0; i < particlesCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Больше вариаций размеров
        const size = Math.random() * 5 + 1;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Определяем стили
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${x}%`;
        particle.style.top = `${y}%`;
        
        // Больше вариаций цветов
        const colors = [
            'var(--cursor-primary)',
            'var(--cursor-secondary)',
            'var(--cursor-accent)',
            'linear-gradient(135deg, var(--cursor-primary), var(--cursor-secondary))',
            'linear-gradient(45deg, var(--cursor-secondary), var(--cursor-accent))',
            'linear-gradient(225deg, var(--cursor-primary), var(--cursor-accent))'
        ];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.background = randomColor;
        
        // Разнообразная непрозрачность
        particle.style.opacity = Math.random() * 0.7 + 0.1;
        
        // Больше вариаций анимаций
        const duration = Math.random() * 30 + 10;
        const delay = Math.random() * 10;
        
        particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite alternate`;
        
        // Добавляем форму для некоторых частиц
        if (Math.random() > 0.7) {
            const randomShape = Math.random();
            if (randomShape < 0.33) {
                particle.style.borderRadius = '20% 80% 40% 60% / 60% 30% 70% 40%'; // Органическая форма
            } else if (randomShape < 0.66) {
                particle.style.borderRadius = '2px'; // Квадрат
            }
            // Остальные остаются круглыми
        }
        
        // Добавляем в контейнер
        container.appendChild(particle);
    }
}

// Анимация блобов при скролле
function animateGlowOnScroll() {
    const blobs = document.querySelectorAll('.blob.glow-effect');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        
        blobs.forEach((blob, index) => {
            const speed = 0.05 + (index * 0.02);
            const rotation = scrollTop * speed;
            const scale = 1 + (scrollTop * 0.0005);
            
            blob.style.transform = `rotate(${rotation}deg) scale(${scale})`;
        });
    });
}

// Запуск дополнительных анимаций
document.addEventListener('DOMContentLoaded', function() {
    animateGlowOnScroll();
    
    // Анимация для героя
    const heroImage = document.querySelector('.hero-image.expanded');
    if (heroImage) {
        window.addEventListener('mousemove', function(e) {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            const moveX = (mouseX - 0.5) * 20;
            const moveY = (mouseY - 0.5) * 10;
            
            heroImage.style.transform = `scale(1.1) translate(${moveX}px, ${moveY}px)`;
        });
    }
}); 