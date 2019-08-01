function changeColor(e) {
	//PROBLEM: Changing colors ignores reversible feature
	e.target.style.backgroundColor = penColor;	
}

function resetAllSquares() {
	gridSquaresList.forEach(gridSquare => gridSquare.removeAttribute("style"));
}

function updatePenColor(e) {
	penColor = e.target.value;
	updateGridSquareEventListeners();
}

function randomizePenColor() {
	penColor = "rgb(" + Math.floor(Math.random() * 256) + "," 
		+ Math.floor(Math.random() * 256) + "," 
		+ Math.floor(Math.random() * 256) + ")";
	updateGridSquareEventListeners();
}


function toggleOnRandomColors() {
	gridSquaresList.forEach(gridSquare => gridSquare.addEventListener("mouseleave", randomizePenColor));
}

let gridSquaresList;
updateGridSquareEventListeners();

let resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", resetAllSquares);

let colorSelector = document.querySelector("#color-selector");
colorSelector.addEventListener("change", updatePenColor);

let randomColorsButton = document.querySelector("#random-colors-option");
randomColorsButton.addEventListener("click", toggleOnRandomColors);
