function resetGrid() {
	while(gridFrame.lastChild) {
		gridFrame.removeChild(gridFrame.lastChild);
	}
}

function changeGridSize() {
	resetGrid();
	let newSize = parseInt(gridSizeInput.value); 
	addSquaresToGrid(newSize);
	addGridSquareEventListeners();
}

const gridSizeInput = document.querySelector("#grid-size-form").firstElementChild;
const newGridButton = document.querySelector("#grid-size-form").lastElementChild;
newGridButton.addEventListener("click", changeGridSize);
