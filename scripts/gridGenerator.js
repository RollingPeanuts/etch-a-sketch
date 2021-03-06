function setSquareSizes(size) {
	document.documentElement.style.setProperty("--gridSideSquares", size);
	document.documentElement.style.setProperty("--squareSideLength", gridSideLength/size + "px");
}

function addSquaresToGrid(size = 16) {
	for(let i=0; i<Math.pow(size, 2); i++)
	{
		gridFrame.appendChild(square.cloneNode());
	}
	setSquareSizes(size);
}

const gridFrame = document.querySelector("#sketch-grid");
const square = document.createElement("div");
square.classList.add("square");

/* Retrieves size of grid as specified in default.css */
const htmlStyles = window.getComputedStyle(document.querySelector("html"));
let gridSideLength = parseInt(htmlStyles.getPropertyValue("--gridSideLength").slice(0, -2));

addSquaresToGrid();
