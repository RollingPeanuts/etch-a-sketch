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

let gridSquaresList;
addGridSquareEventListeners();

let resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", resetAllSquares);
