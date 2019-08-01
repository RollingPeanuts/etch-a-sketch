function addColorToggle(e) {
	if(e.target.style.backgroundColor)
		e.target.style.backgroundColor = "";
	else
		e.target.style.backgroundColor = penColor;
}

function setPen(e) {
	penSelection  = e.target.value;
	updateGridSquareEventListeners();
}

let penOptions = document.querySelectorAll("#pen-selector input");
penOptions.forEach(penType => penType.addEventListener("click", setPen));
