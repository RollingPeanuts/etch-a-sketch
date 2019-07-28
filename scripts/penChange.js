function setReversiblePen() {
	gridSquaresList.forEach(gridSquare => gridSquare.addEventListener("mouseleave", 

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
			setReversiblePen();
			break;
	}

}

let penOptions = document.querySelectorAll("#pen-selector input");
penOptions.forEach(penType => penType.addEventListener("click", changePen));
