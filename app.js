let clock = () => {
  let date = new Date();
  let hours = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();

  mins = mins < 10 ? `0${mins}` : mins;
  secs = secs < 10 ? `0${secs}` : secs;

  let time = ` ${hours} : ${mins} : ${secs} `;
  document.getElementById('clock').innerText = time;

  setTimeout(clock, 1000);
  // console.log(time);
};

clock();
