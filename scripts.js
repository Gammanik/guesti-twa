document.addEventListener("DOMContentLoaded", function() {
    const menuHeadings = document.querySelectorAll(".menu-heading");
    const modalContainer = document.querySelector(".modal-container");
    const modalTitle = document.querySelector(".modal-title");
    const modalInfo = document.querySelector(".modal-info");
    const modalIcon = document.querySelector(".modal-icon");
    const modalClose = document.querySelector(".close");

    // Показать модальное окно при клике на подраздел
    menuHeadings.forEach(heading => {
        heading.addEventListener("click", function() {
            const title = this.getAttribute("data-title");
            const info = this.nextElementSibling.querySelector(".info").getAttribute("data-info");
            modalTitle.textContent = title;
            modalInfo.innerHTML = info;
            modalContainer.style.display = "block";
            document.body.style.overflow = "hidden"; // Запретить прокрутку фона при открытом модальном окне
        });
    });

    // Закрыть модальное окно при клике на крестик
    modalClose.addEventListener("click", function() {
        modalContainer.style.display = "none";
        document.body.style.overflow = "auto"; // Восстановить прокрутку фона
    });

    // Закрыть модальное окно при клике вне его области
    window.addEventListener("click", function(event) {
        if (event.target === modalContainer) {
            modalContainer.style.display = "none";
            document.body.style.overflow = "auto"; // Восстановить прокрутку фона
        }
    });
});
