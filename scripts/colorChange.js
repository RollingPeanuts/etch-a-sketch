function changeColor(e) {
	e.target.style.backgroundColor = penColor;	
	e.target.style.opacity = "";
}

function resetAllSquares() {
	gridSquaresList.forEach(gridSquare => gridSquare.removeAttribute("style"));
}

function updatePenColor(e) {
	penColor = e.target.value;
	gridSquaresList.forEach(gridSquare => gridSquare.removeEventListener("mouseleave", randomizePenColor)); //Removes random colors effect
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

let gridSquaresList = document.querySelectorAll(".square");
updateGridSquareEventListeners();

let resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", resetAllSquares);

let colorSelector = document.querySelector("#color-selector");
colorSelector.addEventListener("change", updatePenColor);

let randomColorsButton = document.querySelector("#random-colors-option");
randomColorsButton.addEventListener("click", toggleOnRandomColors);
