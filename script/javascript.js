setInterval(function(){
  let date = new Date();
  let [hours, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];
  z = (hours*30) + 90;
  y = (minutes* 6) + 90;
  x = (seconds*6) + 90;

  let dom_hours = document.getElementsByClassName('hours')[0];
  dom_hours.style.transform = "rotate("+z+"deg)";
  let display_hours = document.getElementById('hours');
  if (hours > 9) {
    display_hours.innerHTML = hours + "h";
  } else {
    display_hours.innerHTML = "0" + hours + "h";
  };

  let dom_minutes = document.getElementsByClassName('minutes')[0];
  dom_minutes.style.transform = "rotate("+y+"deg)";
  let display_minutes = document.getElementById('minutes');
  if (minutes > 9) {
    display_minutes.innerHTML = minutes + "m";
  } else {
    display_minutes.innerHTML = "0" + minutes + "m";
  };


  let dom_seconds = document.getElementsByClassName('seconds')[0];
  dom_seconds.style.transform = "rotate("+x+"deg)";
  let display_seconds = document.getElementById('seconds');
  if (seconds > 9) {
    display_seconds.innerHTML = seconds + "s";
  } else {
    display_seconds.innerHTML = "0" + seconds + "s";
  };

console.log(seconds)
}, 1000);
