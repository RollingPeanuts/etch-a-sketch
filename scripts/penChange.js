function addColorToggle(e) {
	if(e.target.style.backgroundColor) //TODO: Anyway to make this more pretty?
		e.target.style.backgroundColor = "";
	else
		e.target.style.backgroundColor = penColor; //TODO: Allow user to set background color
}

function changeOpacity(e) {
	if(!e.target.style.opacity)
		e.target.style.opacity = 0.2;
	else
		e.target.style.opacity = parseFloat(e.target.style.opacity) + 0.2; //TODO: Allow user to set opacity change value
}

function setPen(e) {
	penType = e.target.value;
	updateGridSquareEventListeners();
}

let penSelectorList= document.querySelectorAll("#pen-selector input");
penSelectorList.forEach(penSelector => penSelector .addEventListener("click", setPen));
