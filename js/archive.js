/* Скрипт для страницы архива программ */

document.addEventListener('DOMContentLoaded', function() {
    initArchiveFilters();
    initPagination();
});

// Инициализация фильтров архива
function initArchiveFilters() {
    const productFilter = document.getElementById('product-filter');
    const versionFilter = document.getElementById('version-filter');
    const yearFilter = document.getElementById('year-filter');
    const resetFiltersBtn = document.getElementById('reset-filters');
    const clearFiltersBtn = document.getElementById('clear-filters');
    const archiveCards = document.querySelectorAll('.archive-card');
    const archiveEmpty = document.querySelector('.archive-empty');
    
    // Функция для обновления отображения карточек программ
    function updateCards() {
        const productValue = productFilter.value;
        const versionValue = versionFilter.value;
        const yearValue = yearFilter.value;
        
        let visibleCount = 0;
        
        archiveCards.forEach(card => {
            const cardProduct = card.getAttribute('data-product');
            const cardVersion = card.getAttribute('data-version');
            const cardYear = card.getAttribute('data-year');
            
            // Проверяем соответствие всем фильтрам
            const matchesProduct = productValue === 'all' || productValue === cardProduct;
            const matchesVersion = versionValue === 'all' || versionValue === cardVersion;
            const matchesYear = yearValue === 'all' || yearValue === cardYear || 
                                (yearValue === 'older' && parseInt(cardYear) < 2021);
            
            // Показываем или скрываем карточку
            if (matchesProduct && matchesVersion && matchesYear) {
                card.style.display = 'flex';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });
        
        // Показываем сообщение, если нет результатов
        if (visibleCount === 0) {
            archiveEmpty.style.display = 'block';
        } else {
            archiveEmpty.style.display = 'none';
        }
    }
    
    // Обработчики событий для фильтров
    productFilter.addEventListener('change', updateCards);
    versionFilter.addEventListener('change', updateCards);
    yearFilter.addEventListener('change', updateCards);
    
    // Сброс фильтров
    function resetFilters() {
        productFilter.value = 'all';
        versionFilter.value = 'all';
        yearFilter.value = 'all';
        updateCards();
    }
    
    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener('click', resetFilters);
    }
    
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', resetFilters);
    }
    
    // Инициализируем отображение
    updateCards();
}

// Инициализация пагинации
function initPagination() {
    const paginationButtons = document.querySelectorAll('.pagination-btn');
    
    paginationButtons.forEach(button => {
        if (!button.disabled) {
            button.addEventListener('click', function() {
                // Убираем класс active со всех кнопок
                paginationButtons.forEach(btn => btn.classList.remove('active'));
                
                // Добавляем класс active текущей кнопке
                this.classList.add('active');
                
                // В реальном проекте здесь будет загрузка следующей страницы результатов
                // Для демонстрации просто прокручиваем страницу вверх
                window.scrollTo({
                    top: document.querySelector('.archive-section').offsetTop - 100,
                    behavior: 'smooth'
                });
            });
        }
    });
}

// Обновление переводов для раздела архива
document.addEventListener('DOMContentLoaded', function() {
    // Добавляем переводы для архива
    const archiveTranslations = {
        // Русский
        ru: {
            archive_title: 'Архив программ',
            archive_subtitle: 'Здесь собраны все старые версии наших программ',
            archive_product_filter: 'Продукт:',
            archive_version_filter: 'Версия:',
            archive_year_filter: 'Год:',
            archive_reset_filters: 'Сбросить фильтры',
            archive_download: 'Скачать',
            archive_changelog: 'Список изменений',
            archive_no_results: 'По выбранным фильтрам программы не найдены',
            archive_clear_filters: 'Очистить фильтры',
            archive_all_products: 'Все продукты',
            archive_all_versions: 'Все версии',
            archive_major_releases: 'Мажорные релизы',
            archive_minor_updates: 'Минорные обновления',
            archive_beta_versions: 'Бета-версии',
            archive_alpha_versions: 'Альфа-версии',
            archive_all_years: 'Все годы',
            archive_older: '2020 и ранее',
            menu_archive: 'Архив'
        },
        
        // Английский
        en: {
            archive_title: 'Software Archive',
            archive_subtitle: 'Here you can find all old versions of our software',
            archive_product_filter: 'Product:',
            archive_version_filter: 'Version:',
            archive_year_filter: 'Year:',
            archive_reset_filters: 'Reset Filters',
            archive_download: 'Download',
            archive_changelog: 'Changelog',
            archive_no_results: 'No programs found with selected filters',
            archive_clear_filters: 'Clear Filters',
            archive_all_products: 'All Products',
            archive_all_versions: 'All Versions',
            archive_major_releases: 'Major Releases',
            archive_minor_updates: 'Minor Updates',
            archive_beta_versions: 'Beta Versions',
            archive_alpha_versions: 'Alpha Versions',
            archive_all_years: 'All Years',
            archive_older: '2020 and earlier',
            menu_archive: 'Archive'
        }
    };
    
    // Объединяем с существующими переводами
    if (typeof dictionaries !== 'undefined') {
        Object.assign(dictionaries.ru, archiveTranslations.ru);
        Object.assign(dictionaries.en, archiveTranslations.en);
        
        // Обновляем тексты если функция существует
        if (typeof updatePageTexts === 'function') {
            const currentLang = document.documentElement.getAttribute('data-lang') || 'ru';
            updatePageTexts(currentLang);
        }
    }
}); 