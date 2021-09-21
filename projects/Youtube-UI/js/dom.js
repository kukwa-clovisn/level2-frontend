let content = document.querySelector('.content');
let refresh = document.querySelectorAll('.main-link');


let src = [
    '/assets/videos/How to Improve UI_UX Design Skills - 5 Quick Tips.mp4#t=50',
    "/assets/videos/JSON Crash Course.mkv",
    "/assets/videos/O NO! IT'S TOO HOT IN HERE! KOKO BASS _ BAND CAM @TimGodfreyWorld @Church BoiTV @Showgear Records.mp4#t=40",
    "/assets/videos/Vanilla Javascript Text Animation Tutorial.mp4#t=20",
    "/assets/videos/The Person You Should Not Marry - mildred kingsley Okonkwo.mp4#t=100",
    "/assets/videos/Vanilla Javascript Text Animation Tutorial.mp4",
    "/assets/videos/Vanilla Javascript Text Animation Tutorial.mp4",
    "/assets/videos/Learn DOM Manipulation In 18 Minutes_2.mp4",
    "/assets/videos/How to Improve UI_UX Design Skills - 5 Quick Tips.mp4",
    "/assets/videos/The Person You Should Not Marry - mildred kingsley Okonkwo.mp4",
    "/assets/videos/How to Improve UI_UX Design Skills - 5 Quick Tips.mp4",
    "/assets/videos/JSON Crash Course.mkv",
    "/assets/videos/O NO! IT'S TOO HOT IN HERE! KOKO BASS _ BAND CAM @TimGodfreyWorld @Church BoiTV @Showgear Records.mp4"
];

let image_src = [
    "/assets/images/images.png",
    "/assets/images/images.png",
    "/assets/images/images.png",
    "/assets/images/images.png",
    "/assets/images/images.png",
    "/assets/images/images.png",
    "/assets/images/images.png",
    "/assets/images/images.png",
    "/assets/images/images.png",
    "/assets/images/images.png",
    "/assets/images/images.png",
    "/assets/images/images.png",
    "/assets/images/images.png"
];

let video_heading = [
    "how to improve UI_UX design skills - 5 quick tips",
    "let me revive your weak or dead prayer life in 12 minutes - apostle JOSHUA SELMAN",
    "O NO! it's TOO HOT IN HERE! KOKO BASS _ BAND CAM @TimGodfreyWorld @Church BoiTV @Showgear Records.",
    "THE BEST CHRISTMAS CAROL YOU WOULD WATCH IN 2020 ! FEATURING MK STIXX __ MUST WATCH!!! __ KOKO BASS.mkv",
    "the person you should not marry - mildred kingsley Okonkwo",
    "when you feel reluctant to pray do this! - ask pastor chris - pastor chris teaching",
    "when you feel reluctant to pray do this! - ask pastor chris - pastor chris teaching",
    "when you feel reluctant to pray do this! - ask pastor chris - pastor chris teaching",
    "the person you should not marry - mildred kingsley Okonkwo",
    "how to improve UI_UX design skills - 5 quick tips",
    "let me revive your weak or dead prayer life in 12 minutes - apostle JOSHUA SELMAN",
    "O NO! it's TOO HOT IN HERE! KOKO BASS _ BAND CAM @TimGodfreyWorld @Church BoiTV @Showgear Records.",
    "when you feel reluctant to pray do this! - ask pastor chris - pastor chris teaching",
    "when you feel reluctant to pray do this! - ask pastor chris - pastor chris teaching",
    "when you feel reluctant to pray do this! - ask pastor chris - pastor chris teaching"
];

let video_channel = [
    "kcn tv",
    "kcn tv",
    "kcn tv",
    "kcn tv",
    "kcn tv",
    "kcn tv",
    "kcn tv",
    "kcn tv",
    "kcn tv",
    "kcn tv",
    "love world tv",
    "koko bass",
    "koko bass"
]

let video_channel_likes = [
    "9.5k views &bull; 1 years ago",
    "9.5k views &bull; 1 years ago",
    "9.5k views &bull; 1 years ago",
    "9.5k views &bull; 1 years ago",
    "9.5k views &bull; 1 years ago",
    "9.5k views &bull; 1 years ago",
    "9.5k views &bull; 1 years ago",
    "9.5k views &bull; 1 years ago",
    "9.5k views &bull; 1 years ago",
    "9.5k views &bull; 1 years ago",
    "9.5k views &bull; 1 years ago",
    "9.5k views &bull; 1 years ago",
    "9.5k views &bull; 1 years ago"
]
// for(let i = 0; i < src.length; i++) {
//     let count = src.length;
//     let shuffle,lastCount;
//         refresh[i].addEventListener('click', ()=> {
          
//             if(count > 0) {
//                 shuffle = Math.floor(Math.random() * count);
//                 count--;
//                 console.log(shuffle)
//                 console.log(src[shuffle])
                
//                 lastCount = src[count]
//                 src[count] = src[shuffle]
//                 src[shuffle] = src[count];
//             }
//         })
// }


// console.log(src)


// creating a for loop that  loops through the source array and creates a video and contents of the html page
for(let i = 0; i < src.length; i++) {

    let count = src.length;
let shuffle,lastCount;
   
   

// creating the divs needed for the video content 
    let videoContent = document.createElement('div');
    let aboutVideo = document.createElement('div');
    let video_title = document.createElement('div');
    let logo_image = document.createElement('div');
    let image = document.createElement('img')

    // append the videoContent to the content
    content.append(videoContent)
    videoContent.classList.add('video-content')

 

    // creating a video elment
    let video = document.createElement('video');

    // to the video we add a source for every iteration
    video.src = src[i];

    // adding video attribute of preload
    video.setAttribute('preload', 'metadata');

    // adding to every video a class of video 
    video.classList.add('video');

    // appending the video element to the video_content div
    videoContent.append(video);

    // next we append the aboutVideo to the videoContent div and add a class of about-video to the aboutVideo
    videoContent.append(aboutVideo);
    aboutVideo.classList.add('about-video')

    // we append the image and video_title div to the about video div and adding classes of image and title respectively
    aboutVideo.append(logo_image);
    logo_image.classList.add('image')
    aboutVideo.append(video_title)
    video_title.classList.add('title')

    // next we appent the image element tot he logo_image div
    image.src = image_src[i]
    logo_image.append(image);

    // we create and append the h1, 1, span, and p tag to the title
    let h = document.createElement('h1')
    h.innerText = video_heading[i];
    video_title.append(h)

    let title_menu = document.createElement('i')
    title_menu.classList.add('fa')
    title_menu.classList.add('fa-ellipsis-v')
    title_menu.id = 'i'
    video_title.append(title_menu)

    let check = document.createElement('i')
    check.classList.add('fa')
    check.classList.add('fa-check-circle')

    let span = document.createElement('span')
    video_title.append(span)
    span.append(video_channel[i])
    span.append(check)

    let p = document.createElement('p')
    p.innerText = video_channel_likes[i]
    video_title.append(p)

       
    // creating and onclick event listener on the video content
    videoContent.addEventListener('click', () => {
        window.location.href = "/html/nextpage.html"
        localStorage.setItem('src', JSON.stringify(src[i]))
        localStorage.setItem('heading',JSON.stringify(video_heading[i]))
        localStorage.setItem('views', JSON.stringify(video_channel_likes[i]))
    })
    
    // refresh[i].addEventListener('click', ()=> {
      
    //     if(count > 0) {
    //         shuffle = Math.floor(Math.random() * count);
    //         count--;
    //         console.log(shuffle)
    //         console.log(src[shuffle])
            
    //         lastCount = src[count]
    //         src[count] = src[shuffle]
    //         src[shuffle] = src[count];
    //          return src;
    //     } 
    // })
    
}

console.log(src)
// console.log(linkArr)




        /* <div class="video-content">
            <video class="video" onclick="func()" src="/assets/videos/How to Improve UI_UX Design Skills - 5 Quick Tips.mp4#t=10" preload="metadata" ></video>
            <div class="about-video">
                <div class="image">
                    <img src="/assets/images/images.png" alt="">
                </div>
                <div class="title">
                    <h1>when you feel reluctant to pray do this! - ask pastor chris - pastor chris teaching</h1>
                    <i class="fa fa-ellipsis-v" id="i" aria-hidden="true"></i>
                    <span>kcn tv <i class="fa fa-check-circle" aria-hidden="true"></i></span>
                <p>9.5k views &bullet; 1 years ago</p>
                 
                </div>
            </div>
        // </div> */