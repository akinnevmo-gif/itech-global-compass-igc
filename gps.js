function updateGPS(){

if(navigator.geolocation){

navigator.geolocation.watchPosition((pos)=>{

let lat = pos.coords.latitude
let lon = pos.coords.longitude

document.getElementById("lat").innerText = lat.toFixed(6)
document.getElementById("lon").innerText = lon.toFixed(6)

})

}

}

updateGPS()
