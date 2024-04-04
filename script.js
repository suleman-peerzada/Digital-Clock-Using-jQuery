
// count down

$(document).ready(function () {
  function dataTime() {
    
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    period = hours > 12 ? "PM" : "AM";

    hours = (hours % 12) || 12;
  
    $('#hours').text(hours)
    $('#min').text(minutes)
    $('#sec').text(seconds)
    $('#period').text(period)


  }
  setInterval(dataTime, 1000);
  dataTime();
});
