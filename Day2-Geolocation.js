var x = document.getElementById('get-location');
function getGeolocation(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = 'not working';
    }
}

function showPosition(position) {
    x.innerHTML = "latitude =" + position.coords.latitude;
    x.innerHTML +="<br />"
    x.innerHTML += "longitude =" + position.coords.longitude;

    var localApi = "http://maps.googleapis.com/maps/api/geocode/json?latlang="+position.coords.latitude+","+position.coords.longitude+"&sensor=true";

    // $.get({
    //     url: localApi,
    //     success: function (data) {
    //         console.log(data);
    //     }
    // });
}
