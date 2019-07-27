function changeColor(e, penColor) {
	e.target.style.backgroundColor = penColor;	
}

function addGridSquareEventListeners(penColor = "black") {
	gridSquaresList = document.querySelectorAll(".square");
	gridSquaresList.forEach(gridSquare =>
		gridSquare.addEventListener("mouseleave", (e) => {
			changeColor(e, penColor);
		})
	);
}

function resetAllSquares() {
	gridSquaresList.forEach(gridSquare => gridSquare.removeAttribute("style"));
}

function updateColor(e) {
	gridSquaresList.forEach(gridSquare => gridSquare.removeEventListener("mouseleave", randomizePenColor));
	let penColor = e.target.value;
	addGridSquareEventListeners(penColor);
}

function randomizePenColor() {
	let color = "rgb(" + Math.floor(Math.random() * 256) + "," 
		+ Math.floor(Math.random() * 256) + "," 
		+ Math.floor(Math.random() * 256) + ")";
	addGridSquareEventListeners(color);
}


function toggleOnRandomColors() {
	gridSquaresList.forEach(gridSquare => gridSquare.addEventListener("mouseleave", randomizePenColor));
}

let gridSquaresList;
addGridSquareEventListeners();

let resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", resetAllSquares);

let colorSelector = document.querySelector("#color-selector");
colorSelector.addEventListener("change", updateColor);

let randomColorsButton = document.querySelector("#random-colors-option");
randomColorsButton.addEventListener("click", toggleOnRandomColors);
