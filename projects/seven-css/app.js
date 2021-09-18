let c = document.querySelector('#canvas');
let cont = c.getContext("2d")


// adding gradient color
// creating gradient
// let gradient = cont.createLinearGradient(0, 0, 200,20)
let gradient = cont.createRadialGradient(90, 0, 360, 90, 300,90)
gradient.addColorStop(0, "red")
gradient.addColorStop(1, "white")
// gradient.addColorStop(0.7, "red")
// fill with gradient
cont.fillStyle = gradient;
cont.fillRect(0, 0, 300, 200)

// drawing a text
cont.font = "40px arial";
cont.strokeText("moon", 50, 70)

// drawing a line
cont.moveTo(0, 0)
cont.lineTo(160, 100)
cont.stroke()

// drawing a circle
m.moveTo(0,0)
m.lineTo(100,250)
cont.beginPath();
cont.arc(150, 200, 100, 0, 2 * Math.PI)
cont.fil()





