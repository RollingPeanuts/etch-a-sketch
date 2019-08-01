let penSelection = "normal"; //Default Pen Type
let penColor = "black"; //Default Pen Color

function resetEventListeners() {
	gridSquaresList.forEach(gridSquare => gridSquare.removeEventListener("mouseleave", randomizePenColor));
	gridSquaresList.forEach(gridSquare => gridSquare.removeEventListener("mouseleave", changeColor));
	gridSquaresList.forEach(gridSquare => gridSquare.removeEventListener("mouseleave", addColorToggle));
}

function updateGridSquareList() {
	gridSquaresList = document.querySelectorAll(".square");
}


function updateGridSquareEventListeners() {
	updateGridSquareList();
	resetEventListeners();
	switch(penSelection) {	
		case "normal":
			gridSquaresList.forEach(gridSquare => gridSquare.addEventListener("mouseleave", changeColor));	
			break;
		case "brush":
			break;
		case "reversible":
			gridSquaresList.forEach(gridSquare => gridSquare.addEventListener("mouseleave", addColorToggle));
			break;
	}	
}
