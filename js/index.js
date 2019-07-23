function toggleSidebar(){
  document.getElementById("sidebar").classList.toggle("active");
}


function ajaxdor(url){
var xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.onload = function() {
    if (xhr.status === 200) {
        result = xhr.responseText
        if (result != "0"){
          alert("Changed")
        }
        else{
          ajaxdor(url)
        }
    }
    else {
        alert('Request failed.  Returned status of ' + xhr.status);
    }
};
xhr.send();
}

const endpoint = "https://api.thingspeak.com/channels/829911/feeds.json?results=1";
fetch(endpoint)
.then(response => response.json())
.then(data => {
  console.log(data); // Prints result from `response.json()` in getRequest
  var value1 = data.feeds[0].field1;
  console.log(value1);
  document.querySelector(".sensor").innerHTML = value1;
})
.catch(error => console.error(error));

