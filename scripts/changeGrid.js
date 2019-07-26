function resetGrid() {
	while(gridFrame.lastChild) {
		gridFrame.removeChild(gridFrame.lastChild);
	}
}

function changeGridSize() {
	let newSize = parseInt(gridSizeInput.value); 
	if(newSize < 1)
		return 0;

	resetGrid();
	addSquaresToGrid(newSize);
	addGridSquareEventListeners();
}

const gridSizeInput = document.querySelector("#grid-size-form").firstElementChild;
const newGridButton = document.querySelector("#grid-size-form").lastElementChild;
newGridButton.addEventListener("click", changeGridSize);
