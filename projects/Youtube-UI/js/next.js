let blurred = document.querySelector('#blur');
let menubtn = document.getElementById('bars');
let menu = document.querySelector('.menu');
let hidebtn = document.querySelector('#hidebtn');
let video = document.querySelectorAll('.video');
let mainNav = document.querySelector('.main-nav');
let content = document.querySelector('#content');
let load = document.querySelector('.load');
let main = document.querySelector('.main');
let like = document.querySelector('#like');
let dislike = document.querySelector('#dislike');
let videoTitle = document.querySelectorAll(".video-title");
let videoViews = document.querySelectorAll(".video-views");
let mainVideoTitle = document.querySelector('#main-video-title');
let mainVideoviews = document.querySelector('#main-video-views');
let nextpage = document.querySelector('#nextpage')
let comment = document.querySelector('#comment')
let commentBtn = document.querySelector('.submit')
let cancelBtn = document.querySelector('.cancel')
let bind = document.querySelector('#bind')


window.onload = ()=> {
        let src = localStorage.getItem('src')
        let heading = localStorage.getItem('heading')
        let views = localStorage.getItem('views')
        if(src == '') {
            nextpage.src = "/assets/videos/Learn DOM Manipulation In 18 Minutes_2.mp4";
        }else{
            
            nextpage.src = JSON.parse(src)
            mainVideoviews.innerText = JSON.parse(views)
            
            
        }
        clearLocalStorage()
    
}

// function shuffle() {
//     let videoCount = videoArr.length;
//             let shuffleArr, arrangeArr;
//             if(videoCount > 0) {
//                 shuffleArr = Math.floor(Math.random() * videoCount);
//                 videoCount--;
//                 arrangeArr = videoArr[videoCount];
//                 videoArr[videoCount] = videoArr[shuffleArr];
//                 videoArr[shuffleArr] = arrangeArr;
//                return console.log(videoArr);
//             } 
// }

function clearLocalStorage() {
    localStorage.setItem('src', '')
        localStorage.setItem('heading','')
        localStorage.setItem('views','')
}
let videoArr = [];
function fun() {
    for(let j = 0; j < video.length; j++){
     videoArr.push(video[j]);
        video[j].addEventListener('click', (e) => {
            mainVideoTitle.innerText = videoTitle[j].innerText;
            mainVideoviews.innerText = videoViews[j].innerText;
            e.target.removeEventListener;
            nextpage.src = video[j].src;
         
            
        })
    }
   
    
   
    // console.log(videoArr)
    // console.log(arrangeArr)

    
 }



//  shuffleVideos()

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
    // main.classList.toggle('shrink');
    // content.classList.remove('shrink');
    mainNav.classList.toggle('shrink-nav');
    section.classList.toggle('hide-section');
})

// function that increments the count on the like and dislike buttons
let countUp = 25000;
let countDown = 20;
like.innerHTML = countUp;
dislike.innerHTML = countDown;

function thumbLike () {
    // like.innerHTML = countUp++;
    // dislike.innerHTML = countDown--;
    if(dislike.innerHTML - 1 == -1) {
        console.log('No dislike')
        // return dislike.innerHTML = 0;
        return countDown = 1;
    }else{
        like.innerHTML = countUp++;
        dislike.innerHTML = countDown--;
        
    }
}

function thumbDislike () {
        dislike.innerHTML = countDown++;
        like.innerHTML = countUp--;
   // setInterval(() => {
   //     counter = counter + 1;
   // }, 1000)
   console.log(dislike.innerHTML)
   // setInterval(thumbs, 3000);
   // clearInterval(thumbs)
}



//creating a function that adds the comments down
commentBtn.addEventListener('click', () => {
    if(comment !== '') {
        console.log(comment.value)
        bind.innerText = comment.value;
        // localStorage.setItem('comment', JSON.stringify(comment.value));
        comment.value = '';
    }else{
       return console.log('no comment');
    }
})

cancelBtn.addEventListener('click', () => {
    comment.value = ''
})

let replies = [];
for (let i = 0; i <=10; i++) {

}