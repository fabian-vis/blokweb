var hamburger = document.querySelector("nav button");
var navigatie = document.querySelector("nav");

function toggleMenu() {
  document.querySelector('#burger1').classList.toggle('burger1kruis');
  document.querySelector('#burger2').classList.toggle('burger2kruis');
  navigatie.classList.toggle('toonMenu');
}

hamburger.addEventListener("click", toggleMenu);
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_collapsible_symbol //
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
// tot hier //
