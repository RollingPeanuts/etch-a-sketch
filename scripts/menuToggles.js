function toggleOpacityForm(e) {
	let currentPen = e.target.value;
	if(currentPen == "brush")
		opacityValueForm.style.display = "";
	else
		opacityValueForm.style.display = "none";

	if(currentPen == "color-changing" || currentPen == "eraser")
		colorSelector.disabled = true;	
	else
		colorSelector.disabled = false;
}

function updateTitlePosition(isMenuShowing) {
	if(isMenuShowing)
		sketchTitle.style.marginRight = "150px";
	else
		sketchTitle.style.marginRight = "-24px";
}


function toggleMenu(e) {
	let isMenuShowing;
	if(e.target.parentElement.id == "hide-menu") {
		settingsMenu.style.display = "none";
		openMenuButton.style.display = "";
		isMenuShowing = false;
	}
	else {
		settingsMenu.style.display = "";
		openMenuButton.style.display = "none";
		isMenuShowing = true;
	}
	updateTitlePosition(isMenuShowing);
}

penSelectorList.forEach(penSelector => penSelector.addEventListener("click", toggleOpacityForm));

let settingsMenu = document.querySelector("#settings");
let menuToggleList = document.querySelectorAll(".toggle-menu-button");
let openMenuButton = document.querySelector("#show-menu");
menuToggleList.forEach(toggleButton => toggleButton.addEventListener("click", toggleMenu));

let sketchTitle = document.querySelector("#sketch-heading input");
