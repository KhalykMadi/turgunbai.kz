let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.burger-nav');
let menuItem = document.querySelector('.center');
let body = document.querySelector('body')


menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
    menu.prepend(menuItem)
	menu.classList.toggle('active');
    body.classList.toggle('lock')
})


let menuItems = document.querySelectorAll('.nav-list li');

// Добавляем обработчик клика для каждого пункта меню
menuItems.forEach(function(item) {
    item.addEventListener('click', function(event) {
        // Закрываем меню при клике на пункт меню
        menuBtn.classList.remove('active');
        menu.classList.remove('active');
        body.classList.remove('lock');
    });
});
