let content = document.querySelector('.content');
let refresh = document.querySelectorAll('.main-link');
let vid_search = document.querySelector('#search-icon');
let input_search = document.querySelector('#search')


const search_val = input_search.value;
let normal_val = 'gospel music';

for (let i = 0; i < refresh.length; i++) {
    refresh[i].addEventListener('click', () => {
        normal_val = refresh[i].innerText;
    })
}

const api_key = 'AIzaSyDDBGRLItPVAVaBXNh-dFzGMdb4WHz-3tw'
const api_key_two = 'AIzaSyCm1_Gc2sB2Wc02L1z7d1pRCj7GX5YFAYI'


vid_search.addEventListener('click', search_videos)
let src = [];
let video_heading = []
let video_channel = []
let video_channel_likes = []
let image_src = []


function search_videos() {

    src = [];
    video_heading = []
    video_channel = []
    video_channel_likes = []
    image_src = []


    if (input_search.value.length > 0) {

        // fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=' + search_val + '&key=' + api_key_two).then(res => res.json()).then(res => {
        fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&order=title&q=" + input_search.value.replace(/\s+/g, '%20') + "&key=AIzaSyCm1_Gc2sB2Wc02L1z7d1pRCj7GX5YFAYI").then(res => res.json()).then(res => {
            console.log(res.items);

            for (let i = 0; i < res.items.length; i++) {

                src.push("https://www.youtube.com/embed/" + res.items[i].id.videoId);

                image_src.push(res.items[i].snippet.thumbnails.default.url);

                video_heading.push(res.items[i].snippet.title);

                video_channel.push(res.items[i].snippet.channelTitle);

                video_channel_likes.push(res.items[i].snippet.publishedAt);

            }
            display_videos();
        });

        console.log(src)
        console.log(src.length)
        console.log(src[0])
        console.log(src[3])
        console.log(video_channel)
        console.log(video_heading)

        src = [];
        video_heading = []

        video_channel = []
        video_channel_likes = []


    } else {

        // fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=' + search_val + '&key=' + api_key_two).then(res => res.json()).then(res => {
        fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&order=relevance&q=" + normal_val.replace(/\s+/g, '%20') + "&key=AIzaSyDDBGRLItPVAVaBXNh-dFzGMdb4WHz-3tw").then(res => res.json()).then(res => {
            console.log(res.items);

            for (let i = 0; i < res.items.length; i++) {

                src.push("https://www.youtube.com/embed/" + res.items[i].id.videoId);

                image_src.push(res.items[i].snippet.thumbnails.default.url);

                video_heading.push(res.items[i].snippet.title);

                video_channel.push(res.items[i].snippet.channelTitle);

                video_channel_likes.push(res.items[i].snippet.publishedAt);

            }
            display_videos();
        });
    }
}


const display_videos = () => {
    // creating a for loop that  loops through the source array and creates a video and contents of the html page
    for (let i = 0; i < src.length; i++) {

        console.log(video_channel.length)
        console.log(video_channel)
        // creating the divs needed for the video content 
        let videoContent = document.createElement('div');
        let aboutVideo = document.createElement('div');
        let video_title = document.createElement('div');
        let logo_image = document.createElement('div');
        let image = document.createElement('img')
        let hover_div = document.createElement('div')

        // append the videoContent to the content
        content.append(videoContent)
        videoContent.classList.add('video-content')



        // creating a video elment
        let video = document.createElement('iframe');
        // videos.push(video)


        // to the video we add a source for every iteration
        video.src = src[i];
        video.setAttribute('allow', 'accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture')
        video.setAttribute('allowfullscreen', '')
        // adding video attribute of preload
        // video.setAttribute('preload', 'metadata', );

        // let hover_icon1 = document.createElement('i')
        // let hover_save = document.createElement('span')
        // let hover__div1 = document.createElement('div')
        // let hover__div2 = document.createElement('div')

        // hover_save.innerText = 'save'
        // let hover_queue = document.createElement('span')
        // hover_queue.innerText = 'save to watch later'
        // hover_icon1.classList.add('fa')
        // hover_icon1.classList.add('fa-outdent')
        // hover_icon1.classList.add('watch-later')
        // let hover_icon2 = document.createElement('i')
        // hover_icon2.classList.add('fa')
        // hover_icon2.classList.add('fa-compass')
        // hover_icon2.classList.add('queue')
        // hover_div.append( hover__div1, hover__div2)
        // hover_div.classList.add('hover-div')
        // hover__div1.append(hover_save, hover_icon2)

        // hover__div2.append(hover_queue, hover_icon1)

        // adding to every video a class of video 
        video.classList.add('video');
        // video.addEventListener('onmouseover', () => {
        //     hover_div.classList.toggle('show_hover')
        // })

        // appending the video element to the video_content div
        videoContent.append(video);
        // videoContent.append(hover_div)

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
            localStorage.setItem('heading', JSON.stringify(video_heading[i]))
            localStorage.setItem('views', JSON.stringify(video_channel_likes[i]))
        })

        console.log(video)
    }
}



window.addEventListener('load', search_videos)