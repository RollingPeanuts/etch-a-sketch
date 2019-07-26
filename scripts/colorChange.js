function changeColor(e, penColor)
{
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

function resetAllSquares()
{
	gridSquaresList.forEach(gridSquare => gridSquare.removeAttribute("style"));
}

function updateColor(e)
{
	let penColor = e.target.value;
	addGridSquareEventListeners(penColor);
}

let gridSquaresList;
addGridSquareEventListeners();

let resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", resetAllSquares);

let colorSelector = document.querySelector("#color-selector");
colorSelector.addEventListener("change", updateColor);
