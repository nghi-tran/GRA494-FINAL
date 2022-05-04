
function myFunction() {
  var x = document.getElementById("mynavHamburger");
  if (x.className === "navHamburger") {
    x.className += " responsive";
  } else {
    x.className = "navHamburger";
  }
}
