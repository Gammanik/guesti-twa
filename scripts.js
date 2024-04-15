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
            const expanded = item.classList.contains('expanded');
            // Сначала сжимаем все карточки
            document.querySelectorAll('.info-item').forEach(i => {
                i.classList.remove('expanded');
                i.querySelector('.info-content').style.maxHeight = '0';
                i.querySelector('.info-content').style.opacity = '0';
            });

            // Раскрываем выбранную карточку, если она не была раскрыта
            // if (!expanded) {
                item.classList.add('expanded');
                const content = item.querySelector('.info-content');

                content.style.maxHeight = '800px'; // Увеличиваем максимальную высоту для раскрытия
                content.style.opacity = '1';
            // }
        });
    });


});
