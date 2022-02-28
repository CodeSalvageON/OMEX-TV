const options = document.getElementById("options");
const tossec = document.getElementById("tossec");
const privacysec = document.getElementById("privacysec");

const tos = document.getElementById("tos");
const rtos = document.getElementById("rtos");
const privacy = document.getElementById("privacy");
const rprivacy = document.getElementById("rprivacy");
const add = document.getElementById("add");

tossec.style.display = "none";
privacysec.style.display = "none";

privacy.onclick = function () {
  options.style.display = "none";
  privacysec.style.display = "";
}

rprivacy.onclick = function () {
  options.style.display = "";
  privacysec.style.display = "none";
}

tos.onclick = function () {
  options.style.display = "none";
  tossec.style.display = "";
}

rtos.onclick = function () {
  options.style.display = "";
  tossec.style.display = "none";
}

add.onclick = function () {
  window.open("https://discord.com/api/oauth2/authorize?client_id=874826554960658532&permissions=1101662645254&scope=applications.commands%20bot");
}