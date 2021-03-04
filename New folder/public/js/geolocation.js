function geolocation1() {
    if('geolocation' in navigator) {
        //console.log('geolocation is available')
        navigator.geolocation.getCurrentPosition(position =>{
            let lat = position.coords.latitude;
            let long = position.coords.longitude;
            document.getElementById("latitude").textContent = lat;
            document.getElementById("longtitude").textContent = long;
        });
    } else {
        //console.log('geolocation is not available')
    }
}


