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

const weekday = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const d = new Date();
let day = weekday[d.getDay()];
let month = months[d.getMonth()];
let year = d.getFullYear();
let date = d.getDate();
let suffix = '';
if (date == 1 || date == 21 || date == 31) {
  suffix = 'st';
} else if (date == 2 || date == 22) {
  suffix = 'nd';
} else {
  suffix = 'th';
}

document.getElementById(
  'day'
).innerText = `${day} ${month} ${date}${suffix} ${year}`;
