// Biosphere script
// Copy and paste this into your console when you're at https://orb.farm

const gui = `
<button id="changeSize">Change Size of Sand Canvas</button>
<br/>
<button id="uploadImage">Upload to the BioSphere</button>
<br/>
<button id="openChatroom">Open BioSphere Chatroom</button>
<br/>
<button id="switchToMaterialPalette" onclick="switchToPalette()">Switch to Material Palette</button>
`;
const material_palette = `
<button class="Air">Clear</button>
`;

const changeSize = document.getElementById("changeSize");
const uploadImage = document.getElementById("uploadImage");
const openChatroom = document.getElementById("openChatroom");
const switchToMaterialPalette = document.getElementById("switchToMaterialPalette");

const sky_canvas = document.getElementById("sky-canvas");

function docReady(fn) {
  if (document.readyState === "complete" || document.readyState === "interactive") {
    setTimeout(fn, 1);
  } 
  
  else {
    document.addEventListener("DOMContentLoaded", fn);
  }
} 

function showGUI () {
  const ui = document.createElement("hud-buttons");
  const ui_contents = document.getElementById("hud-buttons").innerHTML;

  const body = document.querySelector("body");
  
  body.style.overflow = "scroll";
  body.backgroundColor = "black";
}

function switchToPalette () {
  ui.innerHTML = material_palette;
}

docReady(function () {
  showGUI();

  ui.innerHTML = gui;
  sky_canvas.innerHTML = "";
});