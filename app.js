const timeSpent = document.getElementById("time-spent");

//month day year
const start = new Date("01/19/2020");

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
let timerId;

function countDown2() {
  const today = new Date();
  const timeSpan = today - start;

  const days = Math.floor(timeSpan / day);
  const hours = Math.floor((timeSpan % day) / hour);
  const minutes = Math.floor((timeSpan % hour) / minute);
  const seconds = Math.floor((timeSpan % minute) / second);

  const ans = Math.floor(timeSpan / 1000);

  timeSpent.innerHTML = ans.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

timerId = setInterval(countDown2, second);
