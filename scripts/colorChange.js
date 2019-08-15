function changeColor(e) {
	e.target.style.backgroundColor = penColor;	
}

function resetAllSquares() {
	gridSquaresList.forEach(gridSquare => gridSquare.removeAttribute("style"));
}

function updatePenColor(e) {
	penColor = e.target.value;
	updateGridSquareEventListeners();
}

function setRandomColor(e) {
	penColor = "rgba(" + Math.floor(Math.random() * 256) + "," 
		+ Math.floor(Math.random() * 256) + "," 
		+ Math.floor(Math.random() * 256) + ","
		+ (Math.random() * 0.5 + 0.5)  + ")"; //0.5 - 1 Opacity Range
	changeColor(e);
}

let gridSquaresList = document.querySelectorAll(".square");
updateGridSquareEventListeners();

let resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", resetAllSquares);

let colorSelector = document.querySelector("#color-selector");
colorSelector.addEventListener("change", updatePenColor);
