const nav = document.getElementById("sideNav");
const btn = document.getElementById("openbtn");

function openNav() {
    nav.style.width = "250px";
    document.body.style.marginLeft = "250px";
    btn.style.display = "none"
  }
function closeNav() {
    nav.style.width = "0";
    document.body.style.marginLeft = "0";
    btn.style.display = ""
  }
