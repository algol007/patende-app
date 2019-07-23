function toggleSidebar(){
    document.getElementById("sidebar").classList.toggle("active");
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

  