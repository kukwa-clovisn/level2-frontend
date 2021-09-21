let menubtn = document.getElementById('bars');
let menu = document.querySelector('.menu');
let hidebtn = document.querySelector('#hidebtn');
let body = document.querySelector('body');
let main = document.querySelector('.main');
let video = document.querySelectorAll('.video');
let section = document.querySelector('section');
let img = document.querySelectorAll('.img');
let nextpage = document.querySelector('#nextpage');
let main_link = document.querySelectorAll('.main-link');
let load = document.querySelector('.load');
let mainNav = document.querySelector('.main-nav')
let search = document.querySelector('#search');
let searchBtn = document.querySelector('#search-icon');
let hide_search_box = document.querySelector('#hide-search-box')
let header_left_content = document.querySelector('.left-content')
let header_right_content = document.querySelector('.right-content')
let header_middle_content = document.querySelector('.middle-content')

for(let m = 0; m < main_link.length; m++) {
    main_link[m].addEventListener('click', (e) => {
            load.classList.add('loading');
            // main_link.classList.add('active');
            e.target.removeEventListener;
    })

}

// function func(){
//     console.log('you clicked a video')
//     // nextpage.innerHTML = video;
    
//     for(let i = 0; i < video.length; i++) {
//         video[i].addEventListener('click', () => {
//             window.location.href = '/html/nextpage.html';
//             nextpage.src = video[i].src;
//         })
//     }
    
// }

// adding a click event listener to the button to toggle hide and show the menu content
menubtn.addEventListener('click', () => {
    menu.classList.toggle('toggle-menu');
    main.classList.toggle('shrink');
    mainNav.classList.toggle('shrink-nav');
    section.classList.toggle('hide-section'); 
})

// creating the search box event for screen widths less than 768px
searchBtn.addEventListener('click', () => {
    search.style.display ='block'
    header_middle_content.classList.add('show-search-box')
    hide_search_box.style.display = 'block'
    header_left_content.style.display = 'none'
    header_right_content.style.display = 'none'
})

hide_search_box.addEventListener('click', () => {
    search.style.display = 'none'
    hide_search_box.style.display = 'none'
    header_left_content.style.display = 'flex'
    header_right_content.style.display = 'flex'
    header_middle_content.classList.remove('show-search-box')
})
