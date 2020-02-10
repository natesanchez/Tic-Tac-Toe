let boxes = document.querySelectorAll(".boxes")

let box1 = document.querySelector(".box1")

let box2 = document.querySelector(".box2")

let box3 = document.querySelector(".box3")

let box4 = document.querySelector(".box4")

let box5 = document.querySelector(".box5")

let box6 = document.querySelector(".box6")

let box7 = document.querySelector(".box7")

let box8 = document.querySelector(".box8")

let box9 = document.querySelector(".box9")

boxes.forEach(item => {
	item.addEventListener("click", changeColor)
})

function changeColor (e) {
	e.preventDefault();
	let id = event.target.getAttribute("data-id")
	console.log(id)
}