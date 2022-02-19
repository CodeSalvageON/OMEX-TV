const options = document.getElementById("options");
const tossec = document.getElementById("tossec");
const musicsec = document.getElementById("musicsec");

const tos = document.getElementById("tos");
const rtos = document.getElementById("rtos");
const music = document.getElementById("music");
const rmusic = document.getElementById("rmusic");
const add = document.getElementById("add");

tossec.style.display = "none";
musicsec.style.display = "none";

music.onclick = function () {
  options.style.display = "none";
  musicsec.style.display = "";
}

rmusic.onclick = function () {
  options.style.display = "";
  musicsec.style.display = "none";
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
  window.open("https://discord.com/api/oauth2/authorize?client_id=862464429912621078&permissions=1101696199687&scope=applications.commands%20bot");
}