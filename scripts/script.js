
var burgermenu = document.querySelector('#hamburgermenu');
function burgerMenuKlikken() {
  document.querySelector('#burger1').classList.toggle('burger1kruis');
  document.querySelector('#burger2').classList.toggle('burger2kruis');
  document.querySelector('#schuifmenu').classList.toggle('klapmenuzien');
}
burgermenu.addEventListener("click", burgerMenuKlikken);


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
