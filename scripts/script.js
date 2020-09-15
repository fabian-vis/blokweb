
var deButton = document.querySelector("menu");

function doeFormNeerEnOp(){
	let hetFormulier = document.querySelector("onzichtbaar");
	hetFormulier.classList.toggle("toonMenu");
}

deButton.addEventListener("click", doeFormNeerEnOp);
