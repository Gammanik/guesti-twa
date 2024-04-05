function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(function(node) {
        node.style.display = 'none';
    });
    document.getElementById(tabName + '-content').style.display = 'block';

    document.querySelectorAll('.nav-item').forEach(function(node) {
        node.classList.remove('active');
    });
    document.querySelector('.nav-item[onclick="switchTab(\'' + tabName + '\')"]').classList.add('active');
}

// Активируем первую вкладку по умолчанию
switchTab('home');
