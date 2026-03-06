if(window.DeviceOrientationEvent){

window.addEventListener("deviceorientation",(event)=>{

let heading = event.alpha

if(heading !== null){

currentHeading = heading + IGC_CONFIG.declination

document.getElementById("heading").innerText =
currentHeading.toFixed(2)

drawCompass(currentHeading)

}

})

}
