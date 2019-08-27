function addColorToggle(e) {
	if(e.target.style.backgroundColor)
	{
		e.target.style.backgroundColor = "";
	}	
	else
		changeColor(e);
}

function changeOpacity(e) {
	brushOpacity = parseFloat(opacityValueForm.value);
	if(!e.target.style.opacity)
		e.target.style.opacity = brushOpacity;
	else if(e.target.style.opacity >= 1)
		e.target.style.opacity = 1;
	else
		e.target.style.opacity = parseFloat(e.target.style.opacity) + brushOpacity; 

	e.target.style.backgroundColor = penColor;
}

function eraseStyle(e) {
	e.target.style = "";
}

function resetOpacity(e) {
	e.target.style.opacity = "";
}

function setPen(e) {
	if(penType == "brush")
		gridSquaresList.forEach(gridSquare => gridSquare.addEventListener("mouseleave", resetOpacity));
	else if(penType == "color-changing")
		penColor = colorSelector.value;
	penType = e.target.value;
	updateGridSquareEventListeners();
}

function setOpacityGradient() {
	updateGridSquareEventListeners();
}


let penSelectorList = document.querySelectorAll("#pen-selector input:not([type='number'])");
penSelectorList.forEach(penSelector => penSelector.addEventListener("click", setPen));

let opacityValueForm = document.querySelector("input[name='opacity-value']");
opacityValueForm.addEventListener("change", setOpacityGradient);
