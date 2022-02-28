let params = (new URL(document.location)).searchParams;
let page = params.get("page");

let iframe = document.getElementById("iframe-mess");
let ishit = (iframe.contentWindow || iframe.contentDocument);

setTimeout(function () {
  if (page === "privacy") {
    ishit.document.getElementById("options").style.display = "none";

    setTimeout(function () {
  ishit.document.getElementById("privacysec").style.display = "block";
    }, 200);
  }

  else if (page === "tos") {
    ishit.document.getElementById("options").style.display = "none";

    setTimeout(function () {
  ishit.document.getElementById("tossec").style.display = "block";
    }, 200);
  }
}, 200);