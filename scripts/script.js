
var burgermenu = document.querySelector('#hamburgermenu');

function burgerMenuKlikken() {
  document.querySelector('#burger1').classList.toggle('burger1kruis');
  document.querySelector('#burger2').classList.toggle('burger2kruis');
  document.querySelector('#schuifmenu').classList.toggle('klapmenuzien');
}
burgermenu.addEventListener("click", burgerMenuKlikken);
