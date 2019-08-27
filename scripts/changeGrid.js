function resetGrid() {
	while(gridFrame.lastChild) {
		gridFrame.removeChild(gridFrame.lastChild);
	}
}

function updateGridSquareList() {
	gridSquaresList = document.querySelectorAll(".square");
}

function changeGridSize() {
	let newSize = parseInt(gridSizeInput.value); 
	if(newSize < 1)
		return 0; //Catches invalid size lengths

	resetGrid();
	addSquaresToGrid(newSize);
	updateGridSquareList();
	updateGridSquareEventListeners();
}

const gridSizeInput = document.querySelector("#grid-size-form input[type='number']");
const newGridButton = document.querySelector("#grid-size-form input[type='submit']");
newGridButton.addEventListener("click", changeGridSize);
