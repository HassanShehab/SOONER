var x = document.getElementById("loc-1");
var y = document.getElementById("loc-2");
var locBtn = document.getElementById("locBtn");
var form = document.getElementById("form");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.value =  position.coords.latitude ;
  y.value = position.coords.longitude;
}

function popUp(){
  form.classList.remove('none');
}

locBtn.addEventListener('click', getLocation);
locBtn.addEventListener('click',popUp);
