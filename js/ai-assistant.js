/* AI Ассистент */

document.addEventListener('DOMContentLoaded', function() {
    initAIAssistant();
});

function initAIAssistant() {
    // Получаем элементы интерфейса
    const aiToggle = document.querySelector('.ai-toggle');
    const aiChatWindow = document.querySelector('.ai-chat-window');
    const aiCloseBtn = document.querySelector('.ai-close');
    const aiSendBtn = document.querySelector('.ai-send');
    const aiInput = document.querySelector('.ai-chat-input input');
    const aiMessages = document.querySelector('.ai-chat-messages');
    const aiSuggestions = document.querySelectorAll('.ai-suggestion-btn');
    
    if (!aiToggle || !aiChatWindow) return;
    
    // Обработчик нажатия на кнопку чат-бота
    aiToggle.addEventListener('click', function() {
        aiChatWindow.classList.toggle('active');
        if (aiChatWindow.classList.contains('active')) {
            aiInput.focus();
        }
    });
    
    // Закрытие окна чата
    aiCloseBtn.addEventListener('click', function() {
        aiChatWindow.classList.remove('active');
    });
    
    // Отправка сообщения
    aiSendBtn.addEventListener('click', sendMessage);
    
    // Отправка по Enter
    aiInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Обработка готовых фраз
    aiSuggestions.forEach(btn => {
        btn.addEventListener('click', function() {
            const message = this.textContent;
            addUserMessage(message);
            getResponse(message);
        });
    });
    
    // Функция отправки сообщения
    function sendMessage() {
        const message = aiInput.value.trim();
        if (message === '') return;
        
        addUserMessage(message);
        aiInput.value = '';
        getResponse(message);
    }
    
    // Добавление сообщения пользователя в чат
    function addUserMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.className = 'ai-message user';
        messageElement.innerHTML = `
            <div class="ai-avatar"><i class="fas fa-user"></i></div>
            <div class="ai-bubble">${message}</div>
        `;
        aiMessages.appendChild(messageElement);
        scrollToBottom();
    }
    
    // Добавление сообщения ассистента в чат
    function addAssistantMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.className = 'ai-message assistant';
        messageElement.innerHTML = `
            <div class="ai-avatar"><i class="fas fa-robot"></i></div>
            <div class="ai-bubble">${message}</div>
        `;
        aiMessages.appendChild(messageElement);
        scrollToBottom();
    }
    
    // Прокрутка до конца сообщений
    function scrollToBottom() {
        aiMessages.scrollTop = aiMessages.scrollHeight;
    }
    
    // Получение ответа от ассистента
    function getResponse(message) {
        // Показываем индикатор печати
        const typingElement = document.createElement('div');
        typingElement.className = 'ai-message assistant typing';
        typingElement.innerHTML = `
            <div class="ai-avatar"><i class="fas fa-robot"></i></div>
            <div class="ai-bubble">...</div>
        `;
        aiMessages.appendChild(typingElement);
        scrollToBottom();
        
        // Имитация задержки ответа для реалистичности
        setTimeout(() => {
            // Удаляем индикатор печати
            aiMessages.removeChild(typingElement);
            
            // Получаем ответ (здесь может быть запрос к API)
            const response = getAIResponse(message);
            addAssistantMessage(response);
        }, 1000);
    }
    
    // Простая логика ответов (в продакшене должен быть API)
    function getAIResponse(message) {
        message = message.toLowerCase();
        
        if (message.includes('привет') || message.includes('здравствуй')) {
            return 'Привет! Чем я могу помочь вам сегодня?';
        }
        else if (message.includes('как начать') || message.includes('начать работу')) {
            return 'Чтобы начать работу с нашими продуктами, вам нужно выбрать подходящий инструмент в разделе "Продукты", скачать его и следовать инструкциям по установке. У нас есть подробная документация для каждого продукта.';
        }
        else if (message.includes('продукт') || message.includes('инструмент')) {
            return 'Nicet предлагает несколько продуктов: StyloPoly для 3D-моделирования, CTG для генерации шаблонов кода на C++, AetherScript - современный язык программирования, Lazip для компрессии файлов, Serenade Music Player и Alige Sys для оптимизации Windows.';
        }
        else if (message.includes('контакт') || message.includes('связаться')) {
            return 'Вы можете связаться с нами по email: info@nicet.com или через наш GitHub: <a href="https://github.com/Nicetink" target="_blank">github.com/Nicetink</a>.';
        }
        else if (message.includes('лицензи') || message.includes('цена') || message.includes('стоимость')) {
            return 'У нас есть три типа лицензий: персональная ($19.99), коммерческая ($99.99/год) и корпоративная (индивидуальные условия). Подробную информацию вы можете найти в разделе "Лицензия".';
        }
        else if (message.includes('github')) {
            return 'Наш официальный GitHub: <a href="https://github.com/Nicetink" target="_blank">github.com/Nicetink</a>. Там вы можете найти наши репозитории, включая AetherScript, System-Spy-X и другие проекты.';
        }
        else if (message.includes('команда') || message.includes('о нас')) {
            return 'Nicet — это команда опытных разработчиков и дизайнеров, создающих инновационные программные инструменты. У нас более 10 лет опыта в разработке, более 50 000 пользователей и 15+ продуктов в портфолио.';
        }
        else if (message.includes('спасибо') || message.includes('благодар')) {
            return 'Всегда рад помочь! Если у вас возникнут ещё вопросы, не стесняйтесь обращаться.';
        }
        else if (message.includes('возможност') || message.includes('функци')) {
            return 'Наши продукты отличаются высокой производительностью, безопасностью, чистым кодом, автоматизацией рутинных задач, гибкой настройкой и поддержкой сообщества. Подробнее можно узнать в разделе "Возможности".';
        }
        else if (message.includes('партнер')) {
            return 'Мы сотрудничаем с ведущими компаниями в отрасли, включая Unity Technologies, Blender Foundation, Epic Games, GitHub, JetBrains, itch.io, Autodesk и Adobe. Вы можете узнать больше в разделе "Партнеры".';
        }
        else if (message.includes('архив') || message.includes('стар') && message.includes('верси')) {
            return 'В нашем <a href="archive.html">архиве программ</a> вы можете найти все старые версии наших продуктов. Там доступны мажорные и минорные релизы, а также бета и альфа версии. Вы можете использовать фильтры для быстрого поиска нужной программы и версии.';
        }
        else if (message.includes('найти стар') || message.includes('скачать стар')) {
            return 'Чтобы найти и скачать старую версию программы, перейдите в раздел <a href="archive.html">Архив</a>, где вы можете отфильтровать программы по названию, типу версии и году выпуска. Каждая версия сопровождается списком изменений и кнопкой для скачивания.';
        }
        else if (message.includes('styloPoly') && (message.includes('стар') || message.includes('верси'))) {
            return 'Старые версии StyloPoly доступны в <a href="archive.html">архиве</a>. Наиболее популярные версии: v2.5 (2024), v2.1 (2023) и v2.0 (2022). Каждая версия совместима с разными версиями Blender и предлагает различные инструменты для Low-Poly моделирования.';
        }
        else if (message.includes('ctg') && (message.includes('стар') || message.includes('верси'))) {
            return 'Старые версии CTG (Code Template Generator) можно найти в <a href="archive.html">архиве</a>. Доступные версии включают v3.2 (2024) и v3.0 Beta (2023), каждая с различными наборами шаблонов для C++ разработки.';
        }
        else if (message.includes('aetherScript') && (message.includes('стар') || message.includes('верси'))) {
            return 'Предыдущие версии AetherScript, включая бета и альфа релизы, можно найти в <a href="archive.html">архиве программ</a>. Версия v0.9 Alpha (2024) и v0.8 (2023) содержат различные экспериментальные функции.';
        }
        else {
            return 'Извините, я не совсем понял ваш вопрос. Могу рассказать о наших продуктах, лицензиях, команде, архиве программ или технической поддержке. Что именно вас интересует?';
        }
    }
}

// Добавляем стили для печатающегося эффекта
const style = document.createElement('style');
style.innerHTML = `
.ai-message.typing .ai-bubble::after {
  content: '';
  animation: typing 1.5s infinite;
}

@keyframes typing {
  0% { content: '.'; }
  33% { content: '..'; }
  66% { content: '...'; }
}
`;
document.head.appendChild(style); 