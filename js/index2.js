function toggleSidebar(){
    document.getElementById("sidebar").classList.toggle("active");
}

const endpoint = "https://api.thingspeak.com/channels/829911/feeds.json?results=1";
  fetch(endpoint)
  .then(response => response.json())
  .then(data => {
    console.log(data); // Prints result from `response.json()` in getRequest
    var value7 = data.feeds[0].field7;
    var value8 = data.feeds[0].field8;
    console.log(value7);
    console.log(value8);

    if (value7 == 1){
      document.querySelector(".input1").innerHTML = "SENSOR 1 = ON";
    }else{
      document.querySelector(".input1").innerHTML = "SENSOR 1 = OFF";
    }

    if (value8 == 1){
      document.querySelector(".input2").innerHTML = "SENSOR 2 = ON";
    }else{
      document.querySelector(".input2").innerHTML = "SENSOR 2 = OFF";
    }

  })
  .catch(error => console.error(error));

  