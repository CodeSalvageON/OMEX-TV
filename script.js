// Biosphere script
// Copy and paste this into your console when you're at https://orb.farm

const gui = `
<button>Change Size of Sand Canvas</button>
<br/>
<button>Upload to the BioSphere</button>
<br/>
<button>Open BioSphere Chatroom</button>
`;

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

  sky_canvas.innerHTML = "";
}

docReady(function () {
  showGUI();

  ui.innerHTML = gui;
});