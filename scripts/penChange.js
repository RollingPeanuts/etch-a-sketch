function resetPen() {
	gridSquaresList.forEach(gridSquare => gridSquare.removeEventListener("mouseleave", randomizePenColor));
	gridSquaresList.forEach(gridSquare => gridSquare.removeEventListener("mouseleave", changeColor));
	
}

function addColorToggle(e) {
	if(e.target.style.backgroundColor)
		e.target.style.backgroundColor = "";
	else
		e.target.style.backgroundColor = colorSelector.value;
}

function setPen(penSelection) {
	let newPen = penSelection || document.querySelector("input[name=pen-option]:checked").value; 
	resetPen();
	switch(newPen) {	
		case "normal":
			let currentColor = colorSelector.value;
			addGridSquareEventListeners(currentColor);
			break;
		case "brush":
			break;
		case "reversible":
			gridSquaresList.forEach(gridSquare => gridSquare.addEventListener("mouseleave", addColorToggle));
			break;
	}
}

function changePen(e) {
	let penSelection = e.target.value;	
	setPen(penSelection);
}

let penOptions = document.querySelectorAll("#pen-selector input");
penOptions.forEach(penType => penType.addEventListener("click", changePen));
