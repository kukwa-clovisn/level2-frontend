let time = document.querySelector('#time')
let hour = document.querySelector('#hour')
let minutes = document.querySelector('#min')
let seconds = document.querySelector('#sec')
let mili = document.querySelector('#milisec')
let add = document.querySelector('#add')
let val = document.querySelector('#val')
let num = document.querySelector('#number')


let h = 0;
let sec = 0;
let min = 0;
let ms = 0
let interval;
let value = 0;

function start() {

    hour.innerText = h;
    minutes.innerText = min;
    seconds.innerText = sec;
    mili.innerText = ms;


    clearInterval(interval)
    // if (num.value !== NAN) {
    ms = ms + parseInt(num.value);


    if (ms >= 100) {
        // sec = sec + parseInt(num.value) ;
        sec += 1;

        ms = parseInt(num.value);
        if (sec == 60 || sec > 60) {
            min += 1;
            sec = 0;
            ms = parseInt(num.value);

            if (min == 60) {
                h += 1;
                min = 0;
                sec = 0;
                ms = parseInt(num.value);
            }
        }
    }
    // }


    interval = setInterval(start, 10);

}


function stop() {
    clearInterval(interval)
}


// creating the canvas element
let canva = document.querySelector('#canva')
let canvas = []

for (let i = 0; i < 10; i++) {
    let circle = document.createElement('canvas');
    circle.classList.add('canvas')
    canva.append(circle)

}