function resetGrid() {
	while(gridFrame.lastChild) {
		gridFrame.removeChild(gridFrame.lastChild);
	}
}

function updateGridSquareList() {
	gridSquaresList = document.querySelectorAll(".square");
}

function updateGridLength(newLength) {
	document.documentElement.style.setProperty("--gridSideLength", newLength + "px");
	gridSideLength = newLength;
}

function changeGridSize() {
	let newSize = parseInt(gridSquareNumber.value); 
	let newLength = parseInt(gridSquareLength.value);
	if(newSize < 1)
		return 0; //Catches invalid size lengths
	if(newLength <1)
		return 0;
	resetGrid();
	updateGridLength(newLength);
	addSquaresToGrid(newSize);
	updateGridSquareList();
	updateGridSquareEventListeners();
}

const gridSquareNumber = document.querySelector("#grid-size-form input[name='square-number']");
const gridSquareLength = document.querySelector("#grid-size-form input[name='side-length']");
const newGridButton = document.querySelector("#grid-size-form input[type='submit']");
newGridButton.addEventListener("click", changeGridSize);
