function updateClock() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
    s=(hours>=12?"PM":"AM")
    let timeString = hours + ":" + minutes + ":" + seconds+s;
    document.getElementById("clock").innerHTML = timeString;
  }
  
  setInterval(updateClock, 1000);
  