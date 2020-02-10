let boxes = document.querySelectorAll(".boxes")


let gameDiv = document.querySelector(".gameArea");


let gameTracker = 0


boxes.forEach(item => {
	item.addEventListener("click", changeColor)
})


function tracker () {
	gameTracker = gameTracker + 1;
}


function changeColor (e) {
	e.preventDefault();
	if (gameTracker % 2 === 0) {
		e.target.style.background = "red";
		tracker();
	} else {
		e.target.style.background = "blue";
		tracker();
	}
	e.target.removeEventListener("click", changeColor)
}


