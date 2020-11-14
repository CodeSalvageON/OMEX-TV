// Biosphere script
// Copy and paste this into your console when you're at https://orb.farm

const gui = `
<button>Change Size of Sand Canvas</button>
`;

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
  ui.innerHTML = gui;
}

docReady(function () {
  showGUI();
});