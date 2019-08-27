//TODO: Write code to toggle on/off color when colorchanging and eraser are selected and to toggle on/off or hide/display opacity display when clicking on brush or not
function toggleOpacityForm(e) {
	let currentPen = e.target.value;
	if(currentPen == "brush")
		opacityValueForm.style.display = "";
	else
		opacityValueForm.style.display = "none";

	if(currentPen == "color-changing")
		colorSelector.disabled = true;	
	else
		colorSelector.disabled = false;
}

function toggleMenu(e) {
	if(e.target.parentElement.id == "hide-menu") {
		settingsMenu.style.display = "none";
		openMenuButton.style.display = "";
	}
	else {
		settingsMenu.style.display = "";
		openMenuButton.style.display = "none";
	}
}

penSelectorList.forEach(penSelector => penSelector.addEventListener("click", toggleOpacityForm));

let settingsMenu = document.querySelector("#settings");
let menuToggleList = document.querySelectorAll(".toggle-menu-button");
let openMenuButton = document.querySelector("#show-menu");
menuToggleList.forEach(toggleButton => toggleButton.addEventListener("click", toggleMenu));
