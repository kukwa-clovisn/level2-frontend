let blurred = document.querySelector('#blur');
let menubtn = document.getElementById('bars');
let menu = document.querySelector('.menu');
let hidebtn = document.querySelector('#hidebtn');
let video = document.querySelectorAll('.video');
let mainNav = document.querySelector('.main-nav');
let content = document.querySelector('#content');
let load = document.querySelector('.load');
let main = document.querySelector('.main');

let videoArr = [];
function fun() {
    for(let j = 0; j < video.length; j++){
     videoArr.push(video[j]);
        video[j].addEventListener('click', (e) => {
            
         //    video[j].src = nextpage.src;
            e.target.removeEventListener;
            nextpage.src = video[j].src;
         
         
        })
    }
    let videoCount = videoArr.length;
    let shuffleArr, arrangeArr;
    while(videoCount > 0) {
        shuffleArr = Math.floor(Math.random() * videoCount);
        videoCount--;
        arrangeArr = videoArr[videoCount];
        videoArr[videoCount] = videoArr[shuffleArr];
        videoArr[shuffleArr] = arrangeArr;
    }
    console.log(videoArr)
 // shuffling numbers around
 //    let arr = [1,2,3,4,5,6];
 //    let arrLength = arr.length;
 //    let index,temp;
 //    while(arrLength > 0){
 //        index = Math.floor(Math.random() * arrLength);
 //        arrLength--;
 
 //        temp = arr[arrLength];
 //        arr[arrLength] = arr[index];
 //        arr[index] = temp;
 //    }
 //    console.log(arr);
 }

menubtn.addEventListener('click', () => {
    // content.classList.toggle('shrink');
    menu.classList.toggle('toggle-menu');
    // main.classList.toggle('shrink');
    // section.classList.toggle('hide-section');
    blurred.classList.toggle('fade');    
})



blurred.addEventListener('click', ()=> {
    blurred.classList.toggle('fade');
    menu.classList.toggle('toggle-menu');
    main.classList.toggle('shrink');
    // content.classList.remove('shrink');
    mainNav.classList.toggle('shrink-nav');
    section.classList.toggle('hide-section');
})