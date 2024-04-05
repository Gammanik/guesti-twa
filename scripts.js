function toggleInfo(elementId) {
    var info = document.getElementById(elementId);
    var content = info.querySelector('.scrollable-content');
    if (info.classList.contains('show')) {
        info.classList.remove('show');
        setTimeout(() => content.style.opacity = 0, 50);
    } else {
        info.classList.add('show');
        setTimeout(() => content.style.opacity = 1, 250);
    }
}
