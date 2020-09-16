

var burger1 = document.querySelector('#burger1');
var burger2 = document.querySelector('#burger2');
var burgermenu = document.querySelector('#hamburgermenu');

function burgerMenuKlikken() {
  burger1.classList.toggle('burger1kruis');
  burger2.classList.toggle('burger2kruis');
}

burgermenu.addEventListener("click", burgerMenuKlikken);
