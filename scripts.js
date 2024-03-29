document.addEventListener('DOMContentLoaded', function() {
    const headings = document.querySelectorAll('.menu-heading');
    headings.forEach(function(heading) {
        heading.addEventListener('click', function() {
            const submenu = this.nextElementSibling;
            const infoItems = submenu.querySelectorAll('.info');
            infoItems.forEach(function(info) {
                info.style.display = 'block';
            });
        });
    });

    const infoItems = document.querySelectorAll('.info');
    infoItems.forEach(function(info) {
        info.addEventListener('click', function() {
            // Здесь можете реализовать показ логина и пароля для соответствующего подраздела
            alert('Логин: ваш логин\nПароль: ваш пароль');
        });
    });
});
