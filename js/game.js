/* Мини-игра "Кликер" */

document.addEventListener('DOMContentLoaded', function() {
    initClickerGame();
});

// Инициализация игры-кликера
function initClickerGame() {
    // Элементы игры
    const gameToggle = document.getElementById('game-toggle');
    const gameContainer = document.getElementById('clicker-game');
    const closeButton = document.getElementById('close-game');
    const clickTarget = document.getElementById('click-target');
    const clickCountDisplay = document.getElementById('click-count');
    const levelDisplay = document.getElementById('level-display');
    const progressFill = document.getElementById('progress-fill');
    
    // Кнопки улучшений
    const upgradeSpeed = document.getElementById('upgrade-speed');
    const upgradeMultiplier = document.getElementById('upgrade-multiplier');
    const upgradeAuto = document.getElementById('upgrade-auto');
    
    // Параметры игры
    let clickCount = 0;
    let clickMultiplier = 1;
    let clickSpeed = 1;
    let autoClicksPerSecond = 0;
    let level = 1;
    let targetClicks = 50; // Клики до следующего уровня
    let autoClickInterval;
    
    // Стоимость улучшений
    const upgradeCosts = {
        speed: 50,
        multiplier: 100,
        auto: 200
    };
    
    // Обработчик для открытия/закрытия игры
    if (gameToggle) {
        gameToggle.addEventListener('click', function() {
            if (gameContainer.style.display === 'block') {
                gameContainer.style.display = 'none';
            } else {
                gameContainer.style.display = 'block';
                
                // Загружаем сохраненный прогресс
                loadGameState();
                
                // Обновляем интерфейс
                updateGameUI();
            }
        });
    }
    
    // Обработчик для закрытия игры
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            gameContainer.style.display = 'none';
            
            // Сохраняем состояние игры
            saveGameState();
        });
    }
    
    // Обработчик для кликов
    if (clickTarget) {
        clickTarget.addEventListener('click', function() {
            // Добавляем клики
            addClicks(clickSpeed * clickMultiplier);
            
            // Добавляем эффект нажатия
            this.classList.add('clicked');
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 300);
            
            // Создаем анимацию числа
            createClickAnimation(event);
        });
    }
    
    // Обработчики для кнопок улучшений
    if (upgradeSpeed) {
        upgradeSpeed.addEventListener('click', function() {
            if (clickCount >= upgradeCosts.speed) {
                clickCount -= upgradeCosts.speed;
                clickSpeed += 1;
                
                // Увеличиваем стоимость для следующего улучшения
                upgradeCosts.speed = Math.floor(upgradeCosts.speed * 1.5);
                upgradeSpeed.querySelector('.upgrade-cost').textContent = `${upgradeCosts.speed} кликов`;
                
                // Обновляем интерфейс
                updateGameUI();
            }
        });
    }
    
    if (upgradeMultiplier) {
        upgradeMultiplier.addEventListener('click', function() {
            if (clickCount >= upgradeCosts.multiplier) {
                clickCount -= upgradeCosts.multiplier;
                clickMultiplier *= 2;
                
                // Увеличиваем стоимость для следующего улучшения
                upgradeCosts.multiplier = Math.floor(upgradeCosts.multiplier * 2);
                upgradeMultiplier.querySelector('.upgrade-cost').textContent = `${upgradeCosts.multiplier} кликов`;
                
                // Обновляем интерфейс
                updateGameUI();
            }
        });
    }
    
    if (upgradeAuto) {
        upgradeAuto.addEventListener('click', function() {
            if (clickCount >= upgradeCosts.auto) {
                clickCount -= upgradeCosts.auto;
                autoClicksPerSecond += 1;
                
                // Увеличиваем стоимость для следующего улучшения
                upgradeCosts.auto = Math.floor(upgradeCosts.auto * 1.7);
                upgradeAuto.querySelector('.upgrade-cost').textContent = `${upgradeCosts.auto} кликов`;
                
                // Обновляем автоклик
                updateAutoClicker();
                
                // Обновляем интерфейс
                updateGameUI();
            }
        });
    }
    
    // Функция для добавления кликов
    function addClicks(amount) {
        clickCount += amount;
        
        // Проверяем, не достигли ли мы следующего уровня
        checkLevelUp();
        
        // Обновляем интерфейс
        updateGameUI();
    }
    
    // Проверка повышения уровня
    function checkLevelUp() {
        if (clickCount >= targetClicks) {
            level++;
            targetClicks = Math.floor(targetClicks * 2.5);
            
            // Показываем уведомление о повышении уровня
            showLevelUpNotification();
        }
    }
    
    // Обновление интерфейса игры
    function updateGameUI() {
        // Обновляем счетчик кликов
        clickCountDisplay.textContent = Math.floor(clickCount);
        
        // Обновляем уровень
        levelDisplay.textContent = level;
        
        // Обновляем прогресс-бар
        const progress = (clickCount / targetClicks) * 100;
        progressFill.style.width = `${Math.min(progress, 100)}%`;
        
        // Обновляем доступность кнопок улучшений
        upgradeSpeed.disabled = clickCount < upgradeCosts.speed;
        upgradeMultiplier.disabled = clickCount < upgradeCosts.multiplier;
        upgradeAuto.disabled = clickCount < upgradeCosts.auto;
    }
    
    // Создание анимации чисел при клике
    function createClickAnimation(event) {
        // Создаем элемент с числом
        const animation = document.createElement('div');
        animation.className = 'click-animation';
        animation.textContent = `+${clickSpeed * clickMultiplier}`;
        
        // Позиционируем элемент
        const rect = clickTarget.getBoundingClientRect();
        animation.style.left = `${event.clientX - rect.left}px`;
        animation.style.top = `${event.clientY - rect.top}px`;
        
        // Добавляем в DOM
        clickTarget.appendChild(animation);
        
        // Удаляем через некоторое время
        setTimeout(() => {
            animation.remove();
        }, 1000);
    }
    
    // Показ уведомления о повышении уровня
    function showLevelUpNotification() {
        const notification = document.createElement('div');
        notification.className = 'level-up-notification glass-effect';
        notification.innerHTML = `
            <i class="fas fa-level-up-alt"></i>
            <span>Уровень повышен до ${level}!</span>
        `;
        
        // Добавляем в DOM
        document.body.appendChild(notification);
        
        // Удаляем через некоторое время
        setTimeout(() => {
            notification.classList.add('fade-out');
            setTimeout(() => {
                notification.remove();
            }, 500);
        }, 3000);
    }
    
    // Обновление автокликера
    function updateAutoClicker() {
        // Очищаем предыдущий интервал
        if (autoClickInterval) {
            clearInterval(autoClickInterval);
        }
        
        // Создаем новый интервал, если есть автоклики
        if (autoClicksPerSecond > 0) {
            autoClickInterval = setInterval(() => {
                addClicks(autoClicksPerSecond * clickMultiplier);
            }, 1000);
        }
    }
    
    // Сохранение состояния игры
    function saveGameState() {
        const gameState = {
            clickCount,
            clickMultiplier,
            clickSpeed,
            autoClicksPerSecond,
            level,
            targetClicks,
            upgradeCosts
        };
        
        localStorage.setItem('clickerGameState', JSON.stringify(gameState));
    }
    
    // Загрузка состояния игры
    function loadGameState() {
        const savedState = localStorage.getItem('clickerGameState');
        
        if (savedState) {
            const gameState = JSON.parse(savedState);
            
            clickCount = gameState.clickCount || 0;
            clickMultiplier = gameState.clickMultiplier || 1;
            clickSpeed = gameState.clickSpeed || 1;
            autoClicksPerSecond = gameState.autoClicksPerSecond || 0;
            level = gameState.level || 1;
            targetClicks = gameState.targetClicks || 50;
            
            if (gameState.upgradeCosts) {
                upgradeCosts.speed = gameState.upgradeCosts.speed || 50;
                upgradeCosts.multiplier = gameState.upgradeCosts.multiplier || 100;
                upgradeCosts.auto = gameState.upgradeCosts.auto || 200;
            }
            
            // Обновляем текст стоимости улучшений
            upgradeSpeed.querySelector('.upgrade-cost').textContent = `${upgradeCosts.speed} кликов`;
            upgradeMultiplier.querySelector('.upgrade-cost').textContent = `${upgradeCosts.multiplier} кликов`;
            upgradeAuto.querySelector('.upgrade-cost').textContent = `${upgradeCosts.auto} кликов`;
            
            // Обновляем автоклик
            updateAutoClicker();
        }
    }
    
    // Автосохранение каждые 30 секунд
    setInterval(saveGameState, 30000);
    
    // Добавляем стили для анимаций
    addGameStyles();
}

// Добавление стилей для анимаций игры
function addGameStyles() {
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        .click-animation {
            position: absolute;
            color: white;
            font-weight: bold;
            pointer-events: none;
            animation: float-up 1s ease-out forwards;
            z-index: 10;
        }
        
        @keyframes float-up {
            0% {
                opacity: 1;
                transform: translateY(0);
            }
            100% {
                opacity: 0;
                transform: translateY(-50px);
            }
        }
        
        .level-up-notification {
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            color: white;
            padding: 10px 20px;
            border-radius: 30px;
            display: flex;
            align-items: center;
            gap: 10px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            z-index: 1100;
            animation: pop-in 0.5s ease-out forwards;
        }
        
        .level-up-notification.fade-out {
            animation: pop-out 0.5s ease-in forwards;
        }
        
        @keyframes pop-in {
            0% {
                opacity: 0;
                transform: translate(-50%, -20px);
            }
            100% {
                opacity: 1;
                transform: translate(-50%, 0);
            }
        }
        
        @keyframes pop-out {
            0% {
                opacity: 1;
                transform: translate(-50%, 0);
            }
            100% {
                opacity: 0;
                transform: translate(-50%, -20px);
            }
        }
    `;
    
    document.head.appendChild(styleElement);
} 