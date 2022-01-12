let menuBtn = document.getElementById('bars');
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
let header_nav = document.querySelector('.header-nav')

for (let m = 0; m < main_link.length; m++) {
    main_link[m].addEventListener('click', (e) => {
        load.classList.add('loading');
        // main_link.classList.add('active');
        e.target.removeEventListener;
    })

}


// adding a click event listener to the button to toggle hide and show the menu content
const menuclose = () => {
    menu.classList.toggle('toggle-menu');
    main.classList.toggle('shrink');
    mainNav.classList.toggle('shrink-nav');
    section.classList.toggle('hide-section');
    load.classList.toggle('loading')

}

load.addEventListener('click', () => {

})

header_middle_content.addEventListener('click', () => {
    menu.classList.remove('toggle-menu');
    main.classList.remove('shrink');
    mainNav.classList.remove('shrink-nav');
    section.classList.remove('hide-section');
    load.classList.remove('loading')
})

header_right_content.addEventListener('click', () => {
    menu.classList.remove('toggle-menu');
    main.classList.remove('shrink');
    mainNav.classList.remove('shrink-nav');
    section.classList.remove('hide-section');
    load.classList.remove('loading')
})

// creating the search box event for screen widths less than 768px
searchBtn.addEventListener('click', () => {
    if (document.body.scrollWidth < 768) {
        search.style.display = 'block'
        header_middle_content.classList.add('show-search-box')
        hide_search_box.style.display = 'block'
        header_left_content.style.display = 'none'
        header_right_content.style.display = 'none'
    }

})

hide_search_box.addEventListener('click', () => {
    search.style.display = 'none'
    hide_search_box.style.display = 'none'
    header_left_content.style.display = 'flex'
    header_right_content.style.display = 'flex'
    header_middle_content.classList.remove('show-search-box')
})



// GET https: //www.googleapis.com/youtube/v3/videos

// https: //developers.google.com/youtube/v3/docs/videos/list#try-it