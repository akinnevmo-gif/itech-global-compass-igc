const canvas = document.getElementById("compass")
const ctx = canvas.getContext("2d")

let currentHeading = 0

function drawCompass(angle){

ctx.clearRect(0,0,420,420)

ctx.save()

ctx.translate(210,210)

ctx.rotate(angle*Math.PI/180)

ctx.beginPath()

ctx.moveTo(0,-170)
ctx.lineTo(12,0)
ctx.lineTo(-12,0)

ctx.closePath()

ctx.fillStyle="red"
ctx.fill()

ctx.restore()

drawCompassRing()

}

function drawCompassRing(){

ctx.beginPath()
ctx.arc(210,210,190,0,2*Math.PI)
ctx.strokeStyle="white"
ctx.lineWidth=3
ctx.stroke()

}
