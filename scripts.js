document.addEventListener('DOMContentLoaded', function() {
    const headings = document.querySelectorAll('.menu-heading');
    headings.forEach(function(heading) {
        heading.addEventListener('click', function() {
            const submenu = this.nextElementSibling;
            const blurElements = document.querySelectorAll('.container > *:not(.menu)');
            if (submenu.classList.contains('active')) {
                submenu.classList.remove('active');
                blurElements.forEach(element => {
                    element.style.filter = 'none';
                });
            } else {
                submenu.classList.add('active');
                blurElements.forEach(element => {
                    element.style.filter = 'blur(5px)';
                });
            }
        });
    });

    const buttons = document.querySelectorAll('.menu-heading');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            const submenu = this.nextElementSibling;
            const cardContent = submenu.querySelector('.card-content');
            const cardTitle = cardContent.querySelector('.info');
            const cardDescription = cardContent.querySelector('.card-description');

            // cardTitle.textContent = this.getAttribute('data-title');
            // cardDescription.textContent = cardContent.getAttribute('data-description');
        });
    });
});
