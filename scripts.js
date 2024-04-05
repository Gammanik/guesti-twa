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

// Активация первой вкладки при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    switchTab('home');
});
