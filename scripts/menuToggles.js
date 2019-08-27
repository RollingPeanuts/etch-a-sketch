function toggleOpacityForm(e) {
	let currentPen = e.target.value;
	if(currentPen == "brush")
		opacityFormContainer.style.display = "";
	else
		opacityFormContainer.style.display = "none";

	if(currentPen == "color-changing" || currentPen == "eraser")
		colorSelector.disabled = true;	
	else
		colorSelector.disabled = false;
}

function updateTitlePosition(isMenuShowing) {
	if(isMenuShowing) {
		sketchTitle.style.marginRight = "150px";
		sketchAuthor.style.marginRight = "150px";
	}
	else {
		sketchTitle.style.marginRight = "-24px";
		sketchAuthor.style.marginRight = "-24px";
	}
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

const opacityFormContainer = document.querySelector("#opacity-form");
penSelectorList.forEach(penSelector => penSelector.addEventListener("click", toggleOpacityForm));

const settingsMenu = document.querySelector("#settings");
const menuToggleList = document.querySelectorAll(".toggle-menu-button");
const openMenuButton = document.querySelector("#show-menu");
menuToggleList.forEach(toggleButton => toggleButton.addEventListener("click", toggleMenu));

const sketchTitle = document.querySelector("#sketch-heading input");
const sketchAuthor = document.querySelector("#sketch-author input");
