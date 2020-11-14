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
  const ui = document.createElement("ui");
  const ui_contents = document.getElementById("ui").innerHTML;

  const body = document.querySelector("body");
  
  ui.innerHTML = jar_contents + gui;
  body.style.overflow = "scroll";
}

docReady(function () {
  showGUI();
});