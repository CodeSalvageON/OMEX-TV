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
  const jar = document.getElementById("fps");
  const jar_contents = document.getElementById("fps").innerHTML;
  
  jar.innerHTML = jar_contents + gui;
}

docReady(function () {
  showGUI();
});