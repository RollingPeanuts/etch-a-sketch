let penType= "normal"; //Default Pen Type
let penColor = "black"; //Default Pen Color

function resetEventListeners() {
	gridSquaresList.forEach(gridSquare => gridSquare.removeEventListener("mouseleave", changeColor));
	gridSquaresList.forEach(gridSquare => gridSquare.removeEventListener("mouseleave", changeOpacity));
	gridSquaresList.forEach(gridSquare => gridSquare.removeEventListener("mouseleave", addColorToggle));
	gridSquaresList.forEach(gridSquare => gridSquare.removeEventListener("mouseleave", eraseStyle));
}

function updateGridSquareEventListeners() {
	//updateGridSquareList();
	/* TODO PROBLEM: resetEventListener() runs before changeColor eventListener
	 *          so changeColor is deleted before it's able to run, messing 
	 *          with randomizePenColor functionality */
	resetEventListeners(); 
	switch(penType) {	
		case "normal":
			gridSquaresList.forEach(gridSquare => gridSquare.addEventListener("mouseleave", changeColor));	
			break;
		case "brush":
			gridSquaresList.forEach(gridSquare => gridSquare.addEventListener("mouseleave", changeOpacity));
			break;
		case "reversible":
			gridSquaresList.forEach(gridSquare => gridSquare.addEventListener("mouseleave", addColorToggle));
			break;
		case "eraser":
			gridSquaresList.forEach(gridSquare => gridSquare.addEventListener("mouseleave", eraseStyle));
			break;
	}	
}
