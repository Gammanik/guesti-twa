function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(function(content) {
        content.classList.remove('active');
    });
    document.querySelector(`#${tabName}-content`).classList.add('active');

    document.querySelectorAll('.nav-item').forEach(function(item) {
        item.classList.remove('active');
    });
    document.querySelector(`.nav-item[onclick="switchTab('${tabName}')"]`).classList.add('active');
}

async function loadTabContent(tabName) {
    const response = await fetch(`${tabName}/${tabName}.html`);
    if (response.ok) {
        const content = await response.text();
        document.getElementById(`${tabName}-content`).innerHTML = content;

        // Проверяем, загружаем ли мы вкладку 'home'
        if (tabName === 'home') {
            // Создаем элемент <link> для подключения CSS
            const cssLink = document.createElement('link');
            cssLink.rel = 'stylesheet';
            cssLink.href = `${tabName}/home-styles.css`; // Путь к CSS файлу
            document.head.appendChild(cssLink); // Добавляем <link> в <head>
        }
    } else {
        console.error('Ошибка загрузки:', response.statusText);
    }
}


// // Активация первой вкладки при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    switchTab('home');
    loadTabContent('home'); // Загрузить содержимое для домашней страницы
});
