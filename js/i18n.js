// Словари для интернационализации
const dictionaries = {
    // Английский (основной язык)
    en: {
        // Меню
        menu_home: 'Home',
        menu_products: 'Products',
        menu_news: 'News',
        menu_features: 'Features',
        menu_partners: 'Partners',
        menu_about: 'About',
        menu_contact: 'Contact',
        menu_license: 'License',
        menu_archive: 'Archive',
        menu_github: 'GitHub',
        menu_full_archive: 'Full Archive',
        menu_download_all: 'Download All',
        
        // Герой-секция
        hero_title: 'Create what matters',
        hero_subtitle: 'A set of innovative tools that help developers create better products',
        hero_button_explore: 'Explore products',
        hero_button_itch: 'Visit itch.io',
        
        // Продукты
        products_title: 'Our Products',
        products_subtitle: 'Powerful tools for developers and creators',
        product_download: 'Download',
        
        // Табы продуктов
        tab_styloPoly: 'StyloPoly',
        tab_ctg: 'CTG',
        tab_aetherScript: 'AetherScript',
        tab_lazip: 'Lazip',
        tab_serenade: 'Serenade',
        tab_aligeSys: 'Alige Sys',
        tab_effinitumX: 'Effinitum X',
        
        // Описания продуктов
        product_styloPoly_desc: 'A powerful Blender addon that simplifies the creation of Low-Poly models.',
        product_styloPoly_feature1: 'Simple tools for Low-Poly modeling',
        product_styloPoly_feature2: 'Automatic model optimization',
        product_styloPoly_feature3: 'Built-in texture tools',
        
        product_ctg_desc: 'Code template generator for C++ that accelerates project development.',
        product_ctg_feature1: 'Pre-configured templates for various project types',
        product_ctg_feature2: 'Automatic project structure creation',
        product_ctg_feature3: 'Integration with popular IDEs',
        
        product_aetherScript_desc: 'A modern programming language with simple syntax and powerful capabilities.',
        product_aetherScript_feature1: 'Simple and intuitive syntax',
        product_aetherScript_feature2: 'Built-in tools for parallel computing',
        product_aetherScript_feature3: 'Advanced type system',
        
        product_lazip_desc: 'An innovative file compressor that compresses even already compressed archives.',
        product_lazip_feature1: 'Additional compression of existing zip archives',
        product_lazip_feature2: 'Advanced compression algorithms',
        product_lazip_feature3: 'Simple and intuitive interface',
        
        product_serenade_desc: 'Simple and elegant music player for macOS with unique features.',
        product_serenade_feature1: 'Minimalist design and easy control',
        product_serenade_feature2: 'Advanced sound processing functions',
        product_serenade_feature3: 'Integration with cloud music services',
        
        product_aligeSys_desc: 'Advanced Windows optimizer that improves system performance.',
        product_aligeSys_feature1: 'Automatic optimization of system services',
        product_aligeSys_feature2: 'System cleanup from unnecessary files',
        product_aligeSys_feature3: 'Tools to improve game performance',
        
        product_effinitumX_desc: 'Powerful Windows system optimization tool created with WPF.',
        product_effinitumX_feature1: 'Detailed system information (CPU, memory, disks)',
        product_effinitumX_feature2: 'System cleanup from temporary and unnecessary files',
        product_effinitumX_feature3: 'Disk analyzer and process manager',
        
        // Особенности
        features_title: 'Key Features',
        features_subtitle: 'What makes our products unique',
        
        feature_performance_title: 'High Performance',
        feature_performance_desc: 'All our products are optimized for maximum performance and minimal resource usage.',
        
        feature_security_title: 'Security',
        feature_security_desc: 'We take security and data protection seriously, ensuring reliable operation of all our applications.',
        
        feature_code_title: 'Clean Code',
        feature_code_desc: 'Our tools allow you to write cleaner, more modular, and maintainable code for your projects.',
        
        feature_automation_title: 'Automation',
        feature_automation_desc: 'Automate routine tasks and focus on the creative aspects of your work.',
        
        feature_customization_title: 'Customization',
        feature_customization_desc: 'Flexible settings and extensive customization options to adapt to your needs.',
        
        feature_community_title: 'Community',
        feature_community_desc: 'Join a growing community of developers using our tools.',
        
        // Партнеры
        partners_title: 'Our Partners',
        partners_subtitle: 'Companies that trust us',
        
        // О нас
        about_title: 'About Us',
        about_text1: 'Nicet is a team of experienced developers and designers creating innovative software tools for developers, designers, and creative professionals.',
        about_text2: 'Our mission is to simplify and automate workflows, allowing creative people to focus on creating amazing products without unnecessary technical complexities.',
        
        about_stat1: 'Years of experience',
        about_stat2: 'Satisfied users',
        about_stat3: 'Products in portfolio',
        
        // Контакты
        contact_title: 'Contact Us',
        contact_subtitle: 'Have questions or suggestions? Write to us!',
        
        contact_name: 'Name',
        contact_email: 'Email',
        contact_subject: 'Subject',
        contact_message: 'Message',
        contact_send: 'Send',
        
        contact_address_title: 'Address',
        contact_address: 'Technology St. 123, Moscow, Russia',
        contact_email_title: 'Email',
        contact_phone_title: 'Phone',
        
        // Лицензионный раздел
        license_title: 'License',
        license_subtitle: 'Information about licensing our products',
        license_info: 'Not all programs are distributed under the MIT license. Some programs have their own license agreements.',
        license_mit: 'MIT License',
        
        // AI Ассистент
        ai_assistant_title: 'NicetAI Assistant',
        ai_assistant_greeting: 'Hello! I\'m NicetAI, your digital assistant. How can I help you today?',
        ai_assistant_placeholder: 'Type your question...',
        ai_suggestion_start: 'How to get started?',
        ai_suggestion_products: 'What products does Nicet offer?',
        ai_suggestion_contact: 'Contact information',
        
        // GitHub интеграция
        github_repositories: 'GitHub Repositories',
        github_repo_access: 'Users with an active license have access to our private repositories on GitHub.',
        github_view_repo: 'View repository',
        
        // Футер
        footer_slogan: 'Innovative tools for creative people',
        
        footer_company: 'Company',
        footer_about: 'About',
        footer_team: 'Team',
        footer_careers: 'Careers',
        footer_news: 'News',
        
        footer_products: 'Products',
        
        footer_support: 'Support',
        footer_docs: 'Documentation',
        footer_faq: 'FAQ',
        footer_contact: 'Contact',
        footer_privacy: 'Privacy',
        
        footer_copyright: '© 2025 Nicet. All rights reserved.',
        footer_terms: 'Terms of Use',
        footer_privacy_policy: 'Privacy Policy',
        footer_sitemap: 'Sitemap',
        
        footer_license: 'License',
        
        // Новости
        news_title: "Software News",
        news_subtitle: "Learn about the latest updates and new features",
        news_all: "All News",
        news_updates: "Updates",
        news_releases: "New Releases",
        news_events: "Events",
        news_more: "Read More",
        news_arrowmania_title: "Arrowmania Game Released",
        news_arrowmania_text: "A 4-key rhythm game made in PICO-8 inspired by games such as Stepmania and DDR.",
        news_4dkeys_title: "4DKeys - Keyboard Sound Tool",
        news_4dkeys_text: "An application that plays various sound samples as you type for a more tactile and engaging typing experience.",
        news_pokekey_title: "Poke key - Virtual Keyboard",
        news_pokekey_text: "Virtual keyboard for streaming and YouTube videos. Fully customizable to your needs.",
        news_effinitumx_title: "Effinitum X Announcement",
        news_effinitumx_text: "New Windows optimization tool with system information, cleanup and performance improvements.",
        news_autokey_title: "Auto Key Press Tool",
        news_autokey_text: "Tool for automating key presses in ZX Spectrum emulator including BASIC support and image conversion.",
        news_epirythm_title: "Epic Rhythm Game",
        news_epirythm_text: "New rhythm game with unique gameplay and modern graphics for music game enthusiasts.",
        
        // Скачивание всех программ
        archive_download_all_question: 'Want to download all programs at once?',
        archive_download_all_button: 'Download Full Archive',
        archive_download_size: 'Size: ~250MB',
        
        // Архивные описания
        archive_uptima4_desc: 'The latest version of the game engine with improved graphics and physics',
        archive_uptima3_desc: 'Version with improved particle system and VR support',
        archive_uptima2_desc: 'Version with updated scene editor and improved rendering',
        archive_uptima1_desc: 'Stable version of the first generation game engine',
        archive_pure1_desc: 'First version with basic UI development features',
        archive_pure2_desc: 'Improved version with extended capabilities and optimization',
        archive_pytelos_desc: 'Lightweight Python-based operating system for IoT devices',
        archive_pydosos_desc: 'Basic version of Python command shell',
        archive_pydos1_desc: 'Updated version with expanded command set',
        archive_pydos_beta_desc: 'Beta version with new experimental features',
        
        // Анимированный кубик
        easter_egg_found: 'Easter egg found! Congratulations!',
        easter_egg_cube: 'Click the cube 4 times to find an easter egg',
        easter_egg_message: 'Congratulations! You have discovered a secret message! You get a virtual prize - a new project idea!',
        
        // Категории архива
        archive_uptima_title: 'Uptima Engine',
        archive_pure_title: 'PURE',
        archive_pytelos_title: 'PytelOS',
        archive_pydos_title: 'PyDOS',
        archive_title: 'Software Archive',
        archive_subtitle: 'All versions of our software',
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
        
        // Бета-уведомление
        beta_notice: 'The site is in beta testing. Technical issues and errors may occur. Thank you for your understanding!',
        
        // Генератор идей
        idea_generator: 'Click to get a project idea',
        idea_placeholder: 'Your idea will appear here',
        
        // Cookie consent
        cookie_consent_text: 'We use cookies to improve your experience on our site. By continuing to use the site, you agree to the use of cookies.',
        cookie_accept: 'Accept',
        cookie_settings: 'Settings',
        cookie_settings_title: 'Cookie Settings',
        cookie_necessary: 'Necessary Cookies',
        cookie_necessary_desc: 'These cookies are essential for the website to function and cannot be turned off.',
        cookie_analytics: 'Analytics Cookies',
        cookie_analytics_desc: 'Help us understand how visitors interact with the website.',
        cookie_marketing: 'Marketing Cookies',
        cookie_marketing_desc: 'Used to display relevant advertising and track its effectiveness.',
        cookie_save: 'Save Settings',
        
        // Уведомления о скачиваниях
        download_warning: 'Attention! Direct downloads from the site are currently unavailable. Please use GitHub or itch.io to download programs.'
    },
    
    // Русский
    ru: {
        // Меню
        menu_home: 'Главная',
        menu_products: 'Продукты',
        menu_news: 'Новости',
        menu_features: 'Возможности',
        menu_partners: 'Партнеры',
        menu_about: 'О нас',
        menu_contact: 'Контакты',
        menu_license: 'Лицензия',
        menu_archive: 'Архив',
        menu_github: 'GitHub',
        menu_full_archive: 'Полный архив',
        menu_download_all: 'Скачать всё',
        
        // Герой-секция
        hero_title: 'Создавайте то, что имеет значение',
        hero_subtitle: 'Набор инновационных программ, которые помогают разработчикам создавать лучшие продукты',
        hero_button_explore: 'Изучить программы',
        hero_button_itch: 'Посетить itch.io',
        
        // Продукты
        products_title: 'Наши продукты',
        products_subtitle: 'Мощные инструменты для разработчиков и креаторов',
        product_download: 'Скачать',
        
        // Табы продуктов
        tab_styloPoly: 'StyloPoly',
        tab_ctg: 'CTG',
        tab_aetherScript: 'AetherScript',
        tab_lazip: 'Lazip',
        tab_serenade: 'Serenade',
        tab_aligeSys: 'Alige Sys',
        tab_effinitumX: 'Effinitum X',
        
        // Описания продуктов
        product_styloPoly_desc: 'Мощный аддон для Blender, который упрощает создание Low-Poly моделей.',
        product_styloPoly_feature1: 'Простые инструменты для Low-Poly моделирования',
        product_styloPoly_feature2: 'Автоматическая оптимизация моделей',
        product_styloPoly_feature3: 'Встроенные текстурные инструменты',
        
        product_ctg_desc: 'Генератор шаблонов кода для C++, который ускоряет разработку проектов.',
        product_ctg_feature1: 'Предварительно настроенные шаблоны для различных типов проектов',
        product_ctg_feature2: 'Автоматическое создание структуры проекта',
        product_ctg_feature3: 'Интеграция с популярными IDE',
        
        product_aetherScript_desc: 'Современный язык программирования с простым синтаксисом и мощными возможностями.',
        product_aetherScript_feature1: 'Простой и интуитивно понятный синтаксис',
        product_aetherScript_feature2: 'Встроенные инструменты для параллельных вычислений',
        product_aetherScript_feature3: 'Расширенная система типов',
        
        product_lazip_desc: 'Инновационный компрессор файлов, который сжимает даже уже сжатые архивы.',
        product_lazip_feature1: 'Дополнительное сжатие существующих zip-архивов',
        product_lazip_feature2: 'Продвинутые алгоритмы компрессии',
        product_lazip_feature3: 'Простой и понятный интерфейс',
        
        product_serenade_desc: 'Простой и элегантный музыкальный плеер для macOS с уникальными функциями.',
        product_serenade_feature1: 'Минималистичный дизайн и простое управление',
        product_serenade_feature2: 'Продвинутые функции обработки звука',
        product_serenade_feature3: 'Интеграция с облачными музыкальными сервисами',
        
        product_aligeSys_desc: 'Продвинутый оптимизатор для Windows, который улучшает производительность системы.',
        product_aligeSys_feature1: 'Автоматическая оптимизация системных служб',
        product_aligeSys_feature2: 'Очистка системы от ненужных файлов',
        product_aligeSys_feature3: 'Инструменты для улучшения производительности игр',
        
        product_effinitumX_desc: 'Мощный инструмент оптимизации системы Windows, созданный с использованием WPF.',
        product_effinitumX_feature1: 'Детальная информация о системе (CPU, память, диски)',
        product_effinitumX_feature2: 'Очистка системы от временных и ненужных файлов',
        product_effinitumX_feature3: 'Анализатор диска и менеджер процессов',
        
        // Особенности
        features_title: 'Ключевые особенности',
        features_subtitle: 'Что делает наши продукты уникальными',
        
        feature_performance_title: 'Высокая производительность',
        feature_performance_desc: 'Все наши продукты оптимизированы для максимальной производительности и минимального использования ресурсов.',
        
        feature_security_title: 'Безопасность',
        feature_security_desc: 'Мы серьезно относимся к безопасности и защите данных, обеспечивая надежную работу всех наших приложений.',
        
        feature_code_title: 'Чистый код',
        feature_code_desc: 'Наши инструменты позволяют писать более чистый, модульный и поддерживаемый код для ваших проектов.',
        
        feature_automation_title: 'Автоматизация',
        feature_automation_desc: 'Автоматизируйте рутинные задачи и сосредоточьтесь на творческих аспектах вашей работы.',
        
        feature_customization_title: 'Настраиваемость',
        feature_customization_desc: 'Гибкие настройки и широкие возможности кастомизации для адаптации под ваши потребности.',
        
        feature_community_title: 'Сообщество',
        feature_community_desc: 'Присоединяйтесь к растущему сообществу разработчиков, использующих наши инструменты.',
        
        // Партнеры
        partners_title: 'Наши партнеры',
        partners_subtitle: 'Компании, которые нам доверяют',
        
        // О нас
        about_title: 'О нас',
        about_text1: 'Nicet - это команда опытных разработчиков и дизайнеров, создающих инновационные программные инструменты для разработчиков, дизайнеров и креативных профессионалов.',
        about_text2: 'Наша миссия - упростить и автоматизировать рабочие процессы, позволяя творческим людям сосредоточиться на создании удивительных продуктов без лишних технических сложностей.',
        
        about_stat1: 'Лет опыта',
        about_stat2: 'Довольных пользователей',
        about_stat3: 'Продуктов в портфолио',
        
        // Контакты
        contact_title: 'Свяжитесь с нами',
        contact_subtitle: 'Есть вопросы или предложения? Напишите нам!',
        
        contact_name: 'Имя',
        contact_email: 'Email',
        contact_subject: 'Тема',
        contact_message: 'Сообщение',
        contact_send: 'Отправить',
        
        contact_address_title: 'Адрес',
        contact_address: 'ул. Технологическая 123, Москва, Россия',
        contact_email_title: 'Email',
        contact_phone_title: 'Телефон',
        
        // Лицензионный раздел
        license_title: 'Лицензия',
        license_subtitle: 'Информация о лицензировании наших продуктов',
        
        // AI Ассистент
        ai_assistant_title: 'NicetAI Ассистент',
        ai_assistant_greeting: 'Привет! Я NicetAI, ваш цифровой ассистент. Чем я могу помочь вам сегодня?',
        ai_assistant_placeholder: 'Введите ваш вопрос...',
        ai_suggestion_start: 'Как начать работу?',
        ai_suggestion_products: 'Какие продукты предлагает Nicet?',
        ai_suggestion_contact: 'Контактная информация',
        
        // GitHub интеграция
        github_repositories: 'Репозитории на GitHub',
        github_repo_access: 'Для пользователей с действующей лицензией предоставляется доступ к нашим закрытым репозиториям на GitHub.',
        github_view_repo: 'Перейти в репозиторий',
        
        // Футер
        footer_slogan: 'Инновационные инструменты для творческих людей',
        
        footer_company: 'Компания',
        footer_about: 'О нас',
        footer_team: 'Команда',
        footer_careers: 'Карьера',
        footer_news: 'Новости',
        
        footer_products: 'Продукты',
        
        footer_support: 'Поддержка',
        footer_docs: 'Документация',
        footer_faq: 'FAQ',
        footer_contact: 'Контакты',
        footer_privacy: 'Конфиденциальность',
        
        footer_copyright: '© 2025 Nicet. Все права защищены.',
        footer_terms: 'Условия использования',
        footer_privacy_policy: 'Политика конфиденциальности',
        footer_sitemap: 'Карта сайта',
        
        footer_license: 'Лицензия',
        
        // Новости
        news_title: "Новости наших программ",
        news_subtitle: "Узнайте о последних обновлениях и новых функциях",
        news_all: "Все новости",
        news_updates: "Обновления",
        news_releases: "Новые релизы",
        news_events: "События",
        news_more: "Подробнее",
        news_arrowmania_title: "Выпущена игра Arrowmania",
        news_arrowmania_text: "4-клавишная ритм-игра, созданная в PICO-8 под вдохновением от игр Stepmania и DDR.",
        news_4dkeys_title: "4DKeys - инструмент звуков клавиатуры",
        news_4dkeys_text: "Приложение, которое воспроизводит различные звуковые сэмплы при наборе текста для более тактильного и увлекательного опыта.",
        news_pokekey_title: "Poke key - виртуальная клавиатура",
        news_pokekey_text: "Виртуальная клавиатура для стримов и видео на YouTube. Полностью настраиваемая под ваши потребности.",
        news_effinitumx_title: "Анонс Effinitum X",
        news_effinitumx_text: "Новый инструмент оптимизации Windows с информацией о системе, очисткой и улучшением производительности.",
        news_autokey_title: "Инструмент автоматического нажатия клавиш",
        news_autokey_text: "Инструмент для автоматизации нажатий клавиш в эмуляторе ZX Spectrum, включая поддержку BASIC и изображений.",
        news_epirythm_title: "Epic Rhythm Game",
        news_epirythm_text: "Новая ритм-игра с уникальным геймплеем и современной графикой для любителей музыкальных игр.",
        
        // Скачивание всех программ
        archive_download_all_question: 'Хотите скачать все программы сразу?',
        archive_download_all_button: 'Скачать полный архив',
        archive_download_size: 'Размер: ~250MB',
        
        // Архивные описания
        archive_uptima4_desc: 'Последняя версия игрового движка с улучшенной графикой и физикой',
        archive_uptima3_desc: 'Version with improved particle system and VR support',
        archive_uptima2_desc: 'Version with updated scene editor and improved rendering',
        archive_uptima1_desc: 'Stable version of the first generation game engine',
        archive_pure1_desc: 'Первая версия с базовыми функциями для разработки интерфейсов',
        archive_pure2_desc: 'Улучшенная версия с расширенными возможностями и оптимизацией',
        archive_pytelos_desc: 'Легкая операционная система на базе Python для IoT устройств',
        archive_pydosos_desc: 'Базовая версия командной оболочки на Python',
        archive_pydos1_desc: 'Обновленная версия с расширенным набором команд',
        archive_pydos_beta_desc: 'Бета-версия с новыми экспериментальными функциями',
        
        // Анимированный кубик
        easter_egg_found: 'Вы нашли пасхалку! Поздравляем!',
        easter_egg_cube: 'Нажмите на кубик 4 раза, чтобы найти пасхалку',
        easter_egg_message: 'Поздравляем! Вы обнаружили секретное сообщение! Вы получаете виртуальный приз - новую идею для проекта!',
        
        // Категории архива
        archive_uptima_title: 'Uptima Engine',
        archive_pure_title: 'PURE',
        archive_pytelos_title: 'PytelOS',
        archive_pydos_title: 'PyDOS'
    }
};

// Добавляем переводы для новых разделов
const additionalTranslations = {
    // Меню
    menu_license: {
        ru: 'Лицензия',
        en: 'License'
    },
    menu_archive: {
        ru: 'Архив',
        en: 'Archive'
    },
    menu_full_archive: {
        ru: 'Полный архив',
        en: 'Full Archive'
    },

    // Лицензионный раздел
    license_title: {
        ru: 'Лицензия',
        en: 'License'
    },
    license_subtitle: {
        ru: 'Информация о лицензировании наших продуктов',
        en: 'Information about licensing our products'
    },
    
    // AI Ассистент
    ai_assistant_title: {
        ru: 'NicetAI Ассистент',
        en: 'NicetAI Assistant'
    },
    ai_assistant_greeting: {
        ru: 'Привет! Я NicetAI, ваш цифровой ассистент. Чем я могу помочь вам сегодня?',
        en: 'Hello! I\'m NicetAI, your digital assistant. How can I help you today?'
    },
    ai_assistant_placeholder: {
        ru: 'Введите ваш вопрос...',
        en: 'Type your question...'
    },
    ai_suggestion_start: {
        ru: 'Как начать работу?',
        en: 'How to get started?'
    },
    ai_suggestion_products: {
        ru: 'Какие продукты предлагает Nicet?',
        en: 'What products does Nicet offer?'
    },
    ai_suggestion_contact: {
        ru: 'Контактная информация',
        en: 'Contact information'
    },
    
    // GitHub интеграция
    github_repositories: {
        ru: 'Репозитории на GitHub',
        en: 'GitHub Repositories'
    },
    github_repo_access: {
        ru: 'Для пользователей с действующей лицензией предоставляется доступ к нашим закрытым репозиториям на GitHub.',
        en: 'Users with an active license have access to our private repositories on GitHub.'
    },
    github_view_repo: {
        ru: 'Перейти в репозиторий',
        en: 'View repository'
    },
    
    // Футер
    footer_license: {
        ru: 'Лицензия',
        en: 'License'
    },
    
    // Страница архива
    archive_title: {
        ru: 'Архив программ',
        en: 'Software Archive'
    },
    archive_subtitle: {
        ru: 'Все версии наших программ',
        en: 'All versions of our software'
    },
    archive_product_filter: {
        ru: 'Продукт:',
        en: 'Product:'
    },
    archive_version_filter: {
        ru: 'Версия:',
        en: 'Version:'
    },
    archive_year_filter: {
        ru: 'Год:',
        en: 'Year:'
    },
    archive_reset_filters: {
        ru: 'Сбросить фильтры',
        en: 'Reset Filters'
    },
    archive_download: {
        ru: 'Скачать',
        en: 'Download'
    },
    archive_changelog: {
        ru: 'Список изменений',
        en: 'Changelog'
    },
    archive_no_results: {
        ru: 'По выбранным фильтрам программы не найдены',
        en: 'No programs found with selected filters'
    },
    archive_clear_filters: {
        ru: 'Очистить фильтры',
        en: 'Clear Filters'
    },
    archive_all_products: {
        ru: 'Все продукты',
        en: 'All Products'
    },
    archive_all_versions: {
        ru: 'Все версии',
        en: 'All Versions'
    },
    archive_major_releases: {
        ru: 'Мажорные релизы',
        en: 'Major Releases'
    },
    archive_minor_updates: {
        ru: 'Минорные обновления',
        en: 'Minor Updates'
    },
    archive_beta_versions: {
        ru: 'Бета-версии',
        en: 'Beta Versions'
    },
    archive_alpha_versions: {
        ru: 'Альфа-версии',
        en: 'Alpha Versions'
    },
    archive_all_years: {
        ru: 'Все годы',
        en: 'All Years'
    },
    archive_older: {
        ru: '2020 и ранее',
        en: '2020 and earlier'
    },
    
    // Бета-уведомление
    beta_notice: {
        ru: 'Сайт находится на стадии бета-тестирования. Возможны технические проблемы и ошибки. Спасибо за понимание!',
        en: 'The site is in beta testing. Technical issues and errors may occur. Thank you for your understanding!'
    },
    
    // Генератор идей
    idea_generator: {
        ru: 'Нажми, чтобы получить идею проекта',
        en: 'Click to get a project idea'
    },
    idea_placeholder: {
        ru: 'Ваша идея появится здесь',
        en: 'Your idea will appear here'
    },
    
    // Лицензионная информация
    license_mit: {
        ru: 'Лицензия MIT',
        en: 'MIT License'
    },
    license_info: {
        ru: 'Не все программы распространяются под лицензией MIT. Некоторые программы имеют собственные лицензионные соглашения.',
        en: 'Not all programs are distributed under the MIT license. Some programs have their own license agreements.'
    },
    
    // Cookie consent
    cookie_consent_text: {
        ru: 'Мы используем cookie-файлы для улучшения работы сайта. Продолжая пользоваться сайтом, вы соглашаетесь с использованием файлов cookie.',
        en: 'We use cookies to improve your experience on our site. By continuing to use the site, you agree to the use of cookies.'
    },
    cookie_accept: {
        ru: 'Принять',
        en: 'Accept'
    },
    cookie_settings: {
        ru: 'Настройки',
        en: 'Settings'
    },
    cookie_settings_title: {
        ru: 'Настройки файлов cookie',
        en: 'Cookie Settings'
    },
    cookie_necessary: {
        ru: 'Необходимые cookie',
        en: 'Necessary Cookies'
    },
    cookie_necessary_desc: {
        ru: 'Эти файлы cookie необходимы для работы веб-сайта и не могут быть отключены.',
        en: 'These cookies are essential for the website to function and cannot be turned off.'
    },
    cookie_analytics: {
        ru: 'Аналитические cookie',
        en: 'Analytics Cookies'
    },
    cookie_analytics_desc: {
        ru: 'Помогают нам понять, как посетители взаимодействуют с сайтом.',
        en: 'Help us understand how visitors interact with the website.'
    },
    cookie_marketing: {
        ru: 'Маркетинговые cookie',
        en: 'Marketing Cookies'
    },
    cookie_marketing_desc: {
        ru: 'Используются для показа релевантной рекламы и отслеживания её эффективности.',
        en: 'Used to display relevant advertising and track its effectiveness.'
    },
    cookie_save: {
        ru: 'Сохранить настройки',
        en: 'Save Settings'
    }
};

// Объединяем переводы
Object.assign(dictionaries.ru, additionalTranslations.ru);
Object.assign(dictionaries.en, additionalTranslations.en);

// Функция для обновления текстов на странице
function updatePageTexts(language) {
    // Получаем словарь для выбранного языка
    const dictionary = dictionaries[language] || dictionaries.en;
    
    // Находим все элементы с атрибутом data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    
    // Обновляем текст каждого элемента
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        
        if (dictionary[key]) {
            // Если это input или textarea, обновляем placeholder или value
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                // Для полей ввода обновляем placeholder
                if (element.getAttribute('placeholder') !== null) {
                    element.setAttribute('placeholder', dictionary[key]);
                } else {
                    // Для других типов, таких как button, обновляем value
                    element.value = dictionary[key];
                }
            } else {
                // Для обычных элементов обновляем текст
                element.textContent = dictionary[key];
            }
        }
    });
    
    // Обновляем title страницы
    document.title = language === 'ru' ? 'Nicet - Инновационные программы' : 'Nicet - Innovative Software';
}

// Вызываем функцию при загрузке
document.addEventListener('DOMContentLoaded', function() {
    // Получаем сохраненный язык или используем английский по умолчанию
    const currentLang = localStorage.getItem('language') || 'en';
    
    // Устанавливаем атрибут data-lang для <html>
    document.documentElement.setAttribute('data-lang', currentLang);
    
    // Обновляем тексты
    updatePageTexts(currentLang);
}); 