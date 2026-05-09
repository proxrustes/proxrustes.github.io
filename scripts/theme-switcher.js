document.addEventListener('DOMContentLoaded', () => {
    // Add theme toggle button to the page if it doesn't exist
    let themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) {
        const wrapper = document.createElement('div');
        wrapper.id = 'theme-switcher-wrapper';
        wrapper.style.position = 'fixed';
        wrapper.style.bottom = '20px';
        wrapper.style.right = '20px';
        wrapper.style.zIndex = '9999';

        themeToggle = document.createElement('button');
        themeToggle.id = 'theme-toggle';
        themeToggle.title = 'Toggle Theme';
        themeToggle.style.cursor = 'pointer';
        themeToggle.style.background = 'white';
        themeToggle.style.border = '1px solid #ccc';
        themeToggle.style.borderRadius = '50%';
        themeToggle.style.width = '50px';
        themeToggle.style.height = '50px';
        themeToggle.style.fontSize = '1.5rem';
        themeToggle.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        
        wrapper.appendChild(themeToggle);
        document.body.appendChild(wrapper);
    }

    const themes = [
        { file: 'styles/themes/old-internet.css', icon: '💾' },
        { file: 'styles/themes/neobrutalism.css', icon: '🏗️' },
    ];
    
    let currentThemeIndex = 7; // Default to clean theme
    const savedThemeIndex = localStorage.getItem('themeIndex');
    if (savedThemeIndex !== null) {
        currentThemeIndex = parseInt(savedThemeIndex, 10);
    }
    
    let themeLink = document.getElementById('dynamic-theme');
    if (!themeLink) {
        themeLink = document.createElement('link');
        themeLink.id = 'dynamic-theme';
        themeLink.rel = 'stylesheet';
        document.head.appendChild(themeLink);
    }

    // Apply initial theme
    const applyTheme = (index) => {
        const theme = themes[index];
        themeLink.href = theme.file;
        if (themeToggle) {
            themeToggle.textContent = theme.icon;
        }
    };
    
    applyTheme(currentThemeIndex);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            currentThemeIndex = (currentThemeIndex + 1) % themes.length;
            localStorage.setItem('themeIndex', currentThemeIndex);
            applyTheme(currentThemeIndex);
        });
    }
});