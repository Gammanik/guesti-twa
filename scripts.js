// function switchTab(tabName) {
//     document.querySelectorAll('.tab-content').forEach(function(content) {
//         content.classList.remove('active');
//     });
//     document.querySelector(`#${tabName}-content`).classList.add('active');
//
//     document.querySelectorAll('.nav-item').forEach(function(item) {
//         item.classList.remove('active');
//     });
//     document.querySelector(`.nav-item[onclick="switchTab('${tabName}')"]`).classList.add('active');
// }
//
// // // Активация первой вкладки при загрузке страницы
// document.addEventListener('DOMContentLoaded', () => {
//     switchTab('home');
//

// });




function switchTab(tabName) {
    // Скрыть все разделы
    document.querySelectorAll('.tab-content').forEach(function(content) {
        content.style.display = 'none';
    });
    // Показать выбранный раздел
    document.getElementById(tabName + '-content').style.display = 'block';

    // Обновить активное состояние вкладок
    document.querySelectorAll('.nav-item').forEach(function(item) {
        item.classList.remove('active');
    });
    document.querySelector(`.nav-item[onclick="switchTab('${tabName}')"]`).classList.add('active');
}

// Активация первой вкладки при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    switchTab('home'); // Установить 'home' как начальный активный раздел


    document.querySelectorAll('.info-item').forEach(item => {
        item.addEventListener('click', () => {
            // Переключаем класс 'expanded' для карточки и её содержимого
            item.classList.toggle('expanded');
        });
    });


    document.querySelectorAll('.info-item').forEach(item => {
        item.addEventListener('click', () => {
            // Сначала закрываем все карточки
            document.querySelectorAll('.info-item').forEach(i => {
                i.classList.remove('expanded');
                i.style.maxHeight = '60px'; // Сжимаем все карточки
            });

            // Раскрываем кликнутую карточку, если она была закрыта
            if (!item.classList.contains('expanded')) {
                item.classList.add('expanded');
                item.style.maxHeight = '1000px'; // Устанавливаем максимальную высоту для раскрытия
            } else {
                item.classList.remove('expanded');
                item.style.maxHeight = '60px'; // Сжимаем карточку, если она была раскрыта
            }
        });
    });


});
