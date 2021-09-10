let menubtn = document.getElementById('bars');
let menu = document.querySelector('.menu');
let hidebtn = document.querySelector('#hidebtn');
let body = document.querySelector('body')

menubtn.addEventListener('click', () => {
    menu.classList.add('toggle-menu');
})

hidebtn.addEventListener('click', () => {
    menu.classList.remove('toggle-menu');
})

