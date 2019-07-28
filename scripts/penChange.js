function resetPen() {
	gridSquaresList.forEach(gridSquare => gridSquare.removeEventListener("mouseleave", changeColor));
}

function addColorToggle(e) {
	if(e.target.style.backgroundColor)
		e.target.style.backgroundColor = "";
	else
		e.target.style.backgroundColor = colorSelector.value;
}

function changePen(e) {
	let penSelection = e.target.value;	
	switch(penSelection) {	
		case "normal":
			let currentColor = colorSelector.value;
			addGridSquareEventListeners(currentColor);
			break;
		case "brush":
			break;
		case "reversible":
			resetPen();
			gridSquaresList.forEach(gridSquare => gridSquare.addEventListener("mouseleave", addColorToggle));
			break;
	}

}

let penOptions = document.querySelectorAll("#pen-selector input");
penOptions.forEach(penType => penType.addEventListener("click", changePen));
