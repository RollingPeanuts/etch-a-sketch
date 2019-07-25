function addSquaresToGrid(size = 16) {
	for(let i=0; i<Math.pow(size, 2); i++)
	{
		gridFrame.appendChild(square.cloneNode());
	}
	document.documentElement.style.setProperty("--gridSideSquares", size);
	document.documentElement.style.setProperty("--squareSideLength", 900/size + "px");
}

const gridFrame = document.querySelector("#container");
let square = document.createElement("div");
square.classList.add("square");

let htmlStyles = window.getComputedStyle(document.querySelector("html"));
let gridSize = parseInt(htmlStyles.getPropertyValue("--gridSideLength").slice(0, -2));
addSquaresToGrid();
