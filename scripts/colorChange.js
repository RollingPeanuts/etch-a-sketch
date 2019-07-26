function changeColor(e)
{
	e.target.style.backgroundColor = penColor;	
}

function addGridSquareEventListeners() {
	let gridSquaresList = document.querySelectorAll(".square");
	gridSquaresList.forEach(gridSquare => gridSquare.addEventListener("mouseleave", changeColor));
}

function resetAllSquares()
{
	gridSquaresList.forEach(gridSquare => gridSquare.removeAttribute("style"));
}

let penColor = "black";
addGridSquareEventListeners();

let resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", resetAllSquares);
