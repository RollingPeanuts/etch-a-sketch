//TODO: Refactor to remove globals?
let penType= "pen"; //Default Pen Type
let penColor = "black"; //Default Pen Color

function resetEventListeners() {
	gridSquaresList.forEach(gridSquare => gridSquare.removeEventListener("mouseleave", changeColor));
	gridSquaresList.forEach(gridSquare => gridSquare.removeEventListener("mouseleave", changeOpacity));
	gridSquaresList.forEach(gridSquare => gridSquare.removeEventListener("mouseleave", addColorToggle));
	gridSquaresList.forEach(gridSquare => gridSquare.removeEventListener("mouseleave", setRandomColor));
	gridSquaresList.forEach(gridSquare => gridSquare.removeEventListener("mouseleave", eraseStyle));
}

function updateGridSquareEventListeners() {
	resetEventListeners(); 
	switch(penType) {	
		case "pen":
			gridSquaresList.forEach(gridSquare => gridSquare.addEventListener("mouseleave", changeColor));	
			break;
		case "brush":
			gridSquaresList.forEach(gridSquare => gridSquare.removeEventListener("mouseleave", resetOpacity));
			gridSquaresList.forEach(gridSquare => gridSquare.addEventListener("mouseleave", changeOpacity)); //TODO: Maybe roll this back to include changeColor event listener for more clarity/readability?
			break;
		case "reversible":
			gridSquaresList.forEach(gridSquare => gridSquare.addEventListener("mouseleave", addColorToggle));
			break;
		case "color-changing":
			gridSquaresList.forEach(gridSquare => gridSquare.addEventListener("mouseleave", setRandomColor));
			break;
		case "eraser":
			gridSquaresList.forEach(gridSquare => gridSquare.addEventListener("mouseleave", eraseStyle));
			break;
	}	
}
