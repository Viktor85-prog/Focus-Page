const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  name = document.getElementById("name"),
  focus = document.getElementById("focus");

showTime = () => {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();
  const amPm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )}<span></span>${amPm}`;
  setTimeout(showTime, 1000);
};

addZero = (n) => {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
};

setBgGreet = () => {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    document.body.style.backgroundImage = 'url("./img/morning.jpg")';
    greeting.textContent = "Good Morning";
  } else if (hour < 18) {
    document.body.style.backgroundImage = 'url("./img/afternoon.jpg")';
    greeting.textContent = "Good Afternoon";
  } else {
    document.body.style.backgroundImage = 'url("./img/night.jpg")';
    greeting.textContent = "Good Evening";
    document.body.style.color = "white";
  }
};

getName = () => {
  if (localStorage.getItem("name") === null) {
    name.textContent = "[Enter Name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
};

setName = (e) => {
  if (e.type === "keypress") {
    if (e.which === 13 || e.keyCode === 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
};

getFocus = () => {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "[Enter focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
};
setFocus = (e) => {
  if (e.type === "keypress") {
    if (e.which === 13 || e.keyCode === 13) {
      localStorage.setItem("focus", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
};

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

showTime();
setBgGreet();
getName();
getFocus();
