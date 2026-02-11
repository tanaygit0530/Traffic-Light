let currentLight = "red";

function changeLight() {
  if (currentLight === "red") {
    currentLight = "yellow";
  } else if (currentLight === "yellow") {
    currentLight = "green";
  } else {
    currentLight = "red";
  }

  updateLights();
}

function updateLights() {
  document.getElementById("red").classList.remove("on");
  document.getElementById("yellow").classList.remove("on");
  document.getElementById("green").classList.remove("on");

  document.getElementById(currentLight).classList.add("on");
}
