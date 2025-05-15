/* Лицензионный раздел */

document.addEventListener('DOMContentLoaded', function() {
    initLicenseTabs();
    initFAQItems();
});

// Инициализация табов для лицензий
function initLicenseTabs() {
    const licenseButtons = document.querySelectorAll('.license-tab-button');
    
    licenseButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Получаем ID таба
            const licenseType = this.getAttribute('data-license');
            
            // Убираем активный класс со всех кнопок и таб-панелей
            document.querySelectorAll('.license-tab-button').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.license-tab-pane').forEach(pane => pane.classList.remove('active'));
            
            // Добавляем активный класс текущей кнопке
            this.classList.add('active');
            
            // Активируем соответствующую панель
            document.getElementById(`${licenseType}-license`).classList.add('active');
        });
    });
}

// Инициализация FAQ разделов (раскрывающиеся ответы)
function initFAQItems() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            // Получаем родительский элемент
            const faqItem = this.parentElement;
            
            // Переключаем активное состояние
            faqItem.classList.toggle('active');
            
            // Меняем иконку
            const icon = this.querySelector('.faq-toggle i');
            if (faqItem.classList.contains('active')) {
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
            } else {
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
            }
        });
    });
}

// Добавляем GitHub интеграцию для лицензионного раздела
document.addEventListener('DOMContentLoaded', function() {
    // Здесь мы можем добавить логику для проверки лицензий через GitHub API
    // например, проверку лицензии в репозитории Nicetink или привязку GitHub аккаунта к лицензии
    
    // Добавляем информацию о репозиториях в разделе лицензий
    addGitHubRepositoryInfo();
});

// Функция для добавления информации о репозиториях в раздел лицензий
function addGitHubRepositoryInfo() {
    // Создаем раздел с информацией о репозиториях
    const licenseSection = document.querySelector('.license-section .container');
    if (!licenseSection) return;
    
    // Создаем контейнер для GitHub информации
    const githubInfoContainer = document.createElement('div');
    githubInfoContainer.className = 'github-license-info glass-effect';
    githubInfoContainer.innerHTML = `
        <h3 class="gradient-text">Репозитории на GitHub</h3>
        <p>Для пользователей с действующей лицензией предоставляется доступ к нашим закрытым репозиториям на GitHub.</p>
        
        <div class="github-repos-container">
            <div class="github-repo-card glass-effect">
                <div class="repo-header">
                    <i class="fab fa-github"></i>
                    <h4>AetherScript</h4>
                </div>
                <p>AetherScript is a high-level, statically typed interpreted language with a strong focus on code readability, memory safety, and built-in support for concurrency.</p>
                <div class="repo-stats">
                    <span><i class="fas fa-star"></i> 1</span>
                    <span><i class="fas fa-code-branch"></i> HTML</span>
                </div>
                <a href="https://github.com/Nicetink/AetherScript" class="btn btn-outline" target="_blank">Перейти в репозиторий</a>
            </div>
            
            <div class="github-repo-card glass-effect">
                <div class="repo-header">
                    <i class="fab fa-github"></i>
                    <h4>System-Spy-X</h4>
                </div>
                <p>System Spy X — приложение для просмотра всех компонентов пк, разработанное Michael Möller & Nicet Studio для операционных систем Windows.</p>
                <div class="repo-stats">
                    <span><i class="fas fa-code-branch"></i> HTML</span>
                </div>
                <a href="https://github.com/Nicetink/System-Spy-X" class="btn btn-outline" target="_blank">Перейти в репозиторий</a>
            </div>
            
            <div class="github-repo-card glass-effect">
                <div class="repo-header">
                    <i class="fab fa-github"></i>
                    <h4>studiosite</h4>
                </div>
                <p>Официальный сайт Nicet Studio с информацией о продуктах и проектах команды.</p>
                <div class="repo-stats">
                    <span><i class="fas fa-code-branch"></i> HTML</span>
                </div>
                <a href="https://github.com/Nicetink/studiosite" class="btn btn-outline" target="_blank">Перейти в репозиторий</a>
            </div>
            
            <div class="github-repo-card glass-effect">
                <div class="repo-header">
                    <i class="fab fa-github"></i>
                    <h4>docweb</h4>
                </div>
                <p>Документация по AetherScript и другим проектам Nicet Studio.</p>
                <div class="repo-stats">
                    <span><i class="fas fa-code-branch"></i> HTML</span>
                </div>
                <a href="https://github.com/Nicetink/docweb" class="btn btn-outline" target="_blank">Перейти в репозиторий</a>
            </div>
        </div>
    `;
    
    // Добавляем в секцию после FAQ
    licenseSection.appendChild(githubInfoContainer);
    
    // Добавляем стили для репозиториев
    const style = document.createElement('style');
    style.innerHTML = `
        .github-license-info {
            padding: 30px;
            margin-top: 30px;
        }
        
        .github-repos-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }
        
        .github-repo-card {
            padding: 20px;
            border-radius: 10px;
            transition: all 0.3s ease;
        }
        
        .github-repo-card:hover {
            transform: translateY(-5px);
            box-shadow: var(--cursor-glow-primary);
        }
        
        .repo-header {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 15px;
        }
        
        .repo-header i {
            font-size: 24px;
            color: var(--cursor-primary);
        }
        
        .repo-header h4 {
            margin: 0;
            font-size: 18px;
        }
        
        .repo-stats {
            display: flex;
            gap: 15px;
            margin: 15px 0;
            color: var(--cursor-text-secondary);
            font-size: 14px;
        }
        
        .github-repo-card .btn {
            width: 100%;
            margin-top: 10px;
        }
        
        @media (max-width: 768px) {
            .github-repos-container {
                grid-template-columns: 1fr;
            }
        }
    `;
    document.head.appendChild(style);
} 