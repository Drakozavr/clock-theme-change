//theme changer

const sunMoonContainer = document.querySelector(".sun-moon-container");

document.querySelector(".theme-toggle-button").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const currentRotation = parseInt(
    getComputedStyle(sunMoonContainer).getPropertyValue("--rotation")
  );
  sunMoonContainer.style.setProperty("--rotation", currentRotation + 180);
});

//clock

setInterval(setClock, 1000);

const hourArrow = document.querySelector("[data-hour-arrow]");
const minuteArrow = document.querySelector("[data-minute-arrow]");
const secondArrow = document.querySelector("[data-second-arrow]");

function setClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

  setRotation(secondArrow, secondsRatio);
  setRotation(minuteArrow, minutesRatio);
  setRotation(hourArrow, hoursRatio);
}

function setRotation(element, rotationRatio) {
  console.log("element", element);
  element.style.setProperty("--rotation", rotationRatio * 360);
}

setClock();
