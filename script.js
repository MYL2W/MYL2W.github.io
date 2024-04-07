// Получаем кнопку "Socials" и контейнер для кнопок с иконками
var socialsBtn = document.querySelector('.socials-btn');
var socialBtnsContainer = document.querySelector('.social-btns-container');

// Обработчик события нажатия на кнопку "Socials"
socialsBtn.addEventListener('click', function() {
    // Скрываем кнопку "Socials"
    socialsBtn.style.display = 'none';
    // Показываем контейнер с кнопками с иконками
    socialBtnsContainer.style.display = 'block';
});
