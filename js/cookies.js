/* Управление cookie и согласием на их использование */

document.addEventListener('DOMContentLoaded', function() {
    initCookieConsent();
});

// Инициализация системы управления cookie
function initCookieConsent() {
    const cookieConsent = document.getElementById('cookie-consent');
    const acceptButton = document.getElementById('accept-cookies');
    const settingsButton = document.getElementById('cookie-settings');
    const cookieModal = document.getElementById('cookie-settings-modal');
    const closeModalButton = document.getElementById('close-cookie-settings');
    const saveSettingsButton = document.getElementById('save-cookie-settings');
    
    // Проверяем, было ли уже получено согласие
    if (!getCookie('cookie_consent')) {
        // Показываем баннер
        setTimeout(() => {
            cookieConsent.style.display = 'block';
        }, 1500);
    }
    
    // Обработчик для кнопки "Принять"
    if (acceptButton) {
        acceptButton.addEventListener('click', function() {
            // Сохраняем все cookie
            setCookie('cookie_consent', 'all', 365);
            setCookie('necessary_cookies', 'true', 365);
            setCookie('analytics_cookies', 'true', 365);
            setCookie('marketing_cookies', 'true', 365);
            
            // Скрываем баннер
            cookieConsent.style.display = 'none';
        });
    }
    
    // Обработчик для кнопки "Настройки"
    if (settingsButton) {
        settingsButton.addEventListener('click', function() {
            cookieModal.classList.add('active');
            
            // Загружаем текущие настройки
            loadCookieSettings();
        });
    }
    
    // Обработчик для закрытия модального окна
    if (closeModalButton) {
        closeModalButton.addEventListener('click', function() {
            cookieModal.classList.remove('active');
        });
    }
    
    // Обработчик для сохранения настроек
    if (saveSettingsButton) {
        saveSettingsButton.addEventListener('click', function() {
            // Получаем значения переключателей
            const analyticsEnabled = document.getElementById('analytics-cookies').checked;
            const marketingEnabled = document.getElementById('marketing-cookies').checked;
            
            // Сохраняем настройки
            setCookie('cookie_consent', 'custom', 365);
            setCookie('necessary_cookies', 'true', 365); // Всегда включены
            setCookie('analytics_cookies', analyticsEnabled ? 'true' : 'false', 365);
            setCookie('marketing_cookies', marketingEnabled ? 'true' : 'false', 365);
            
            // Закрываем модальное окно и баннер
            cookieModal.classList.remove('active');
            cookieConsent.style.display = 'none';
            
            // Применяем настройки
            applyCookieSettings();
        });
    }
}

// Загрузка текущих настроек cookie
function loadCookieSettings() {
    const analyticsCookie = getCookie('analytics_cookies');
    const marketingCookie = getCookie('marketing_cookies');
    
    // Устанавливаем значения переключателей
    document.getElementById('analytics-cookies').checked = (analyticsCookie === 'true');
    document.getElementById('marketing-cookies').checked = (marketingCookie === 'true');
}

// Применение настроек cookie
function applyCookieSettings() {
    const analyticsEnabled = getCookie('analytics_cookies') === 'true';
    const marketingEnabled = getCookie('marketing_cookies') === 'true';
    
    // Здесь можно добавить код для включения/отключения аналитики и маркетинговых инструментов
    console.log('Analytics enabled:', analyticsEnabled);
    console.log('Marketing enabled:', marketingEnabled);
    
    // Пример: отключение Google Analytics
    if (!analyticsEnabled) {
        window['ga-disable-UA-XXXXX-Y'] = true; // Заменить на реальный ID
    }
}

// Функция для получения значения cookie
function getCookie(name) {
    const cookieString = decodeURIComponent(document.cookie);
    const cookies = cookieString.split(';');
    
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        
        if (cookie.indexOf(name + '=') === 0) {
            return cookie.substring(name.length + 1, cookie.length);
        }
    }
    
    return null;
}

// Функция для установки cookie
function setCookie(name, value, expiryDays) {
    const date = new Date();
    date.setTime(date.getTime() + (expiryDays * 24 * 60 * 60 * 1000));
    
    const expires = 'expires=' + date.toUTCString();
    document.cookie = name + '=' + value + ';' + expires + ';path=/';
} 