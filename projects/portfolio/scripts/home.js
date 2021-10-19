let canvas = document.getElementById('canvas')

for (let i = 0; i < 9; i++) {
    let canva = document.createElement('canvas')
    canva.classList.add('canva' + [i])
    canvas.append(canva)
}

window.onload = moveIn()

function moveIn() {
    console.log('initializing')
    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
        console.log('your here')
    }
}