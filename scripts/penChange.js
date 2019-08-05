function addColorToggle(e) {
	if(e.target.style.backgroundColor) //TODO: Anyway to make this more pretty?
	{
		e.target.style.backgroundColor = "";
		e.target.style.opacity = "";
	}	
	else
		e.target.style.backgroundColor = penColor; //TODO: Allow user to set background color
}

//TODO: PROBLEM: When changing back normal pen after using brush, normal pen is unable to override brush and reversible keep opacity feature when flipping.
function changeOpacity(e) {
	if(!e.target.style.opacity)
		e.target.style.opacity = 0.2;
	else if(e.target.style.opacity >= 1)
		e.target.style.opacity = 1;
	else
		e.target.style.opacity = parseFloat(e.target.style.opacity) + 0.2; //TODO: Allow user to set opacity change value

	e.target.style.backgroundColor = penColor;
}

function eraseStyle(e) {
	e.target.style = "";
}

function setPen(e) {
	penType = e.target.value;
	updateGridSquareEventListeners();
}

let penSelectorList= document.querySelectorAll("#pen-selector input");
penSelectorList.forEach(penSelector => penSelector .addEventListener("click", setPen));
